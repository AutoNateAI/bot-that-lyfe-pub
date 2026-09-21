#!/usr/bin/env python3
"""dance-lab/bounce.py — first move in the dance-move library: a two-knee
"bounce" (weight sinks on the beat, springs back up between beats) driven by
real detected beat times from an audio clip. Renders Kai + Nate side by side
on a plain stage using lib/rig.py against the dance-lab copy of their assets,
then muxes the frames with the source clip into a preview video.

Run with the repo's normal python3 (only needs PIL, already a project dep) —
librosa lives in dance-lab/.venv and is only needed for detect_beats.py.
"""
import json
import subprocess
import sys
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
REPO = HERE.parent  # character-engine/

sys.path.insert(0, str(REPO / "lib"))
import rig  # noqa: E402

FPS = 15
CANVAS = rig.CANVAS  # (1000, 1400) per character
PAIR_SIZE = (CANVAS[0] * 2, CANVAS[1])
BG = (18, 20, 26, 255)  # dark neutral stage, not trying to match the full production set

# Bounce shape, in degrees / px. Trough (deepest crouch) lands exactly on each
# detected beat; the rig eases back up toward neutral by the midpoint before
# the next beat pulls it back down. Symmetric cosine v1 — easy to make the
# dip snappier / the rise lazier later by swapping this curve.
KNEE_BEND_DEG = 22.0
HIP_DROP_PX = 16.0
TORSO_SETTLE_DEG = 3.0


def bounce_phase(t, beat_times):
    """Returns depth in [0, 1]: 1.0 exactly on a beat, 0.0 at the midpoint
    between beats. Falls back to the average beat interval before the first
    beat / after the last one so the motion doesn't just stop dead."""
    if len(beat_times) < 2:
        return 0.0
    if t <= beat_times[0]:
        interval = beat_times[1] - beat_times[0]
        prev_beat = beat_times[0] - interval
        nxt = beat_times[0]
    elif t >= beat_times[-1]:
        interval = beat_times[-1] - beat_times[-2]
        prev_beat = beat_times[-1]
        nxt = beat_times[-1] + interval
    else:
        i = 0
        while beat_times[i + 1] <= t:
            i += 1
        prev_beat, nxt = beat_times[i], beat_times[i + 1]

    span = nxt - prev_beat
    if span <= 0:
        return 0.0
    p = (t - prev_beat) / span  # 0 at trough, 1 at next trough
    import math
    return (1 + math.cos(2 * math.pi * p)) / 2


def bounce_pose(depth):
    return {
        "leg_lower_L": KNEE_BEND_DEG * depth,
        "leg_lower_R": KNEE_BEND_DEG * depth,
        "arm_upper_L": -90 + 6 * depth,
        "arm_upper_R": 90 - 6 * depth,
        "torso": TORSO_SETTLE_DEG * depth,
        "hip_dy": HIP_DROP_PX * depth,
    }


def load_rigs():
    kai = rig.Rig("kai", REPO / "assets/mouths/female_mouths", base_dir=HERE / "assets")
    nate = rig.Rig("nate", REPO / "assets/mouths/male_mouths", base_dir=HERE / "assets")
    return nate, kai


def render_pair(nate, kai, depth):
    frame = Image.new("RGBA", PAIR_SIZE, BG)
    nate_img = rig.render_body(nate, bounce_pose(depth))
    kai_img = rig.render_body(kai, bounce_pose(depth))
    frame.alpha_composite(nate_img, (0, 0))
    frame.alpha_composite(kai_img, (CANVAS[0], 0))
    return frame.convert("RGB")


def main():
    beats_path = HERE / "audio/clip_115_145.beats.json"
    audio_path = HERE / "audio/clip_115_145.mp3"
    beats = json.loads(beats_path.read_text())
    beat_times = beats["beat_times"]
    duration = beats["duration_sec"]

    frames_dir = HERE / "output/bounce_frames"
    frames_dir.mkdir(parents=True, exist_ok=True)
    for f in frames_dir.glob("*.png"):
        f.unlink()

    nate, kai = load_rigs()
    n_frames = int(duration * FPS)
    print(f"rendering {n_frames} frames at {FPS}fps ({beats['bpm']} bpm, {len(beat_times)} beats)")
    for i in range(n_frames):
        t = i / FPS
        depth = bounce_phase(t, beat_times)
        img = render_pair(nate, kai, depth)
        img.save(frames_dir / f"frame_{i:05d}.png")
        if i % 60 == 0:
            print(f"  frame {i}/{n_frames}")

    out_path = HERE / "output/bounce_preview.mp4"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "ffmpeg", "-y",
        "-framerate", str(FPS), "-i", str(frames_dir / "frame_%05d.png"),
        "-i", str(audio_path),
        "-c:v", "libx264", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-shortest",
        str(out_path),
    ]
    subprocess.run(cmd, check=True)
    print(f"wrote {out_path}")


if __name__ == "__main__":
    main()
