#!/usr/bin/env python3
"""dance-lab/detect_beats.py — run librosa beat tracking on a dance-lab audio
clip and dump {bpm, beat_times} as JSON next to it. Run via .venv/bin/python."""
import json
import sys
from pathlib import Path

import librosa
import numpy as np

HERE = Path(__file__).resolve().parent


def main(audio_path):
    audio_path = Path(audio_path)
    y, sr = librosa.load(audio_path, sr=None, mono=True)
    tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)
    beat_times = librosa.frames_to_time(beat_frames, sr=sr)
    bpm = float(np.asarray(tempo).reshape(-1)[0])

    out = {
        "source": audio_path.name,
        "duration_sec": float(librosa.get_duration(y=y, sr=sr)),
        "bpm": round(bpm, 2),
        "beat_times": [round(float(t), 4) for t in beat_times],
    }
    out_path = audio_path.with_suffix(".beats.json")
    out_path.write_text(json.dumps(out, indent=2))
    print(f"bpm={out['bpm']}  beats={len(out['beat_times'])}  -> {out_path}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else HERE / "audio/clip_115_145.mp3")
