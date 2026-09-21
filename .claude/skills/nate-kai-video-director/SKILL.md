---
name: nate-kai-video-director
description: Produce a Nate & Kai YouTube video (16:9) from an existing Bot That Lyfe research article, using the character-engine pipeline (episode.json -> OpenAI TTS + contextual gpt-image memes -> rendered/composited video). Use this whenever the user asks to make a YouTube video, video version, video explainer, or video recap of an article — or mentions "Nate and Kai" / "the lab video" for a research piece. Covers both a professional/research tone and an informal/comedic parody tone. Does NOT cover 9:16 / Reels / TikTok-format output — that's a separate skill built on top of this one's episode.json structure.
---

# Nate & Kai Video Director

Turns a published (or in-progress) `content/research/<slug>.md` article into a two-host talk-show video: Nate and Kai, standing on a neon open-floor set, trading lines and pointing at a shared screen that shows real numbers and contextual memes. Everything lives under `character-engine/` in this app.

If the user asks for a YouTube video "over" / "of" / "about" / "for" a research article, this is the skill — don't freehand a new approach, the pipeline below already solves voice, pacing, on-screen visuals, and rendering.

**Scope**: 16:9 YouTube format only (`--format youtube`). The codebase also has a `--format reel` (9:16) path, but it is *not* production-ready — camera framing for portrait is unfinished and untested end-to-end. A separate skill will cover 9:16 once that work is done. Don't attempt a finished reel deliverable with this skill.

## 0. Prerequisites

- `OPENAI_API_KEY` must be set (used for both TTS and meme image generation).
- **Always render with `USE_OPENAI_TTS=true` in the environment.** Without it, the pipeline silently falls back to macOS's built-in `say` command (a generic British-sounding male voice and a robotic-sounding female voice) instead of the actual expressive OpenAI voices. This is not a visible error — the render finishes fine, it just sounds wrong. Always double check this env var is set before rendering.

## 1. Read the source article first

Read `content/research/<slug>.md` (and its `sources[]`-equivalent citations/links) start to finish before writing anything. Pull the real numbers, dates, and named sources directly from the article — don't re-derive or approximate them. The episode's `sources[]` array (step 3) should map 1:1 to citations already established in the article.

## 2. Decide the tone

Ask the user (or infer from how they phrased the request) which register they want. Two tones are proven so far — don't invent a third without being asked:

- **Professional / research tone** (the default unless told otherwise): measured pacing, longer lines are fine (up to ~15-20s), still uses memes on screen but keeps the banter restrained.
- **Informal / comedic parody tone** (standing instruction from Nathan, 2026-09-20, updated 2026-09-20 — this is the tone for every distribution video built to drive traffic back to an article; parody performance, not the site's own voice): short lines for reels and punchy modular beats for YouTube, rapid back-and-forth between Nate and Kai, and real jokes built on the article's actual facts. The target energy is the moment where a big official slogan collides with a brutal real-world receipt, like "energy dominance" meeting a $6.285 diesel pump. Preserve that level across the whole script:
  - Every line needs comic voltage: a reversal, metaphor, simile, callback, tag, or incredulous turn. If a line only explains, rewrite it until it teaches and hits.
  - **Hooks must be A-material in both reels and YouTube videos, and they should start like an interruption.** Open with a dramatic conversational hit — "Yoooo, guess what the fuck," "Broooo, this shit wild," or "My ninja, you won't believe this shit:" — then immediately collide a famous promise, slogan, policy, public assumption, or institutional claim with the article's concrete number, receipt, shortage, failed incentive, or local consequence. Do not start with "Nate..." or "Kai..." unless it is part of a sharper interruption. No soft openers, no throat-clearing, no generic "today we're breaking down."
  - **Cuss heavily and by default.** Fuck/shit/damn/hell should be frequent, rhythmic, and connected to the point. Do not sprinkle profanity randomly; make it part of the timing.
  - Use hard, everyday metaphors that explain the system: a policy as a red button nobody wants to press, a diesel pump eating an operating loan, a refinery as the kitchen and diesel as the cooked meal, a farmer getting handed the receipt for a global conflict.
  - **Story before bit-stack.** Every reel and YouTube cut needs a clean narrative spine, not just adjacent jokes. A viewer should be able to retell it in one sentence: "the promise/policy hit a constraint, the constraint hit the input price, the input price hit this farm workflow, and the article follows the bill." If a joke does not move that story forward, cut or rewrite it.
  - **Core plot engine, not literal questions.** Before writing dialogue, compress the article into this hidden sequence: identity -> origin -> disruption -> power response -> promised fix -> physical/economic constraint -> local impact -> unresolved bill. This is the spine Nathan is asking for: what the thing is, where it comes from, what changed, why powerful actors want a change, why an at-home/domestic fix sounds attractive, what reality makes that hard, and who actually feels the consequence. Do not make the hosts mechanically ask those questions; turn the sequence into scenes, jokes, callbacks, and handoffs.
  - For reels, use an eight-beat mini-story by default: hook, cause, mechanism, local landing, lived pain, complication/twist, unresolved stakes, article curiosity gap. For YouTube, build multiple chapters with the same logic: each chapter opens with a concrete conflict, explains the mechanism, lands the metaphor, then hands off to the next chapter.
  - Pick one recurring object/metaphor per episode and stay with it long enough for the audience to track the plot: the receipt, the pump, the plate, the kitchen, the red button, the courtroom, the relay race, etc. Avoid changing metaphors every line unless the new metaphor clearly escalates the same story.
  - If a line is long or does multiple teaching jobs, do not leave one static screen up for the whole thing. Either split it into shorter back-and-forth lines or use timed `screens[]` so the visual changes with the spoken turns. This matters most on hooks, mechanism explanations, and YouTube chapter openers.
  - Do not use the n-word. If Nathan's intended casual phrasing needs that beat, write "my ninja" instead.
  - For U.S. political or policy-linked stories, research President Trump's current relation to the issue and include it when a credible source supports the connection and the tie is editorially relevant. Use President Trump's name directly when the source supports that relationship, but keep claims neutral, dated, and sourced. Jokes should roast the situation, slogan, policy bind, public contradiction, paperwork, or receipt — not invent motives and not cruelly attack real people.
  - Build from verified mechanisms. The punchline should land on the real number/stat/source, never on a made-up fact.
  - Keep the heat up for the whole video. A YouTube cut can breathe more than a reel, but it should still have a joke engine in every segment and callbacks that make viewers stay for the next beat.
  - Put delivery direction in `voice_instructions`, and put the real punchline directly in `text` so it survives TTS.

Whichever tone, use `voice_instructions` (step 5) to steer TTS delivery per-episode rather than editing the global voice instructions — the global ones are tuned for the professional tone.

## 3. Write `episode.json`

Create `character-engine/episodes/<slug>/episode.json` (pick a slug; it doesn't have to match the article's slug — see `article_url` below for how to point back to the real article when it doesn't).

```json
{
  "episode": "<slug>",
  "title": "<video title>",
  "article_url": "https://botthatlyfe.com/research-and-case-studies/<real-article-slug>",
  "runtime_target_sec": 60,
  "background_meme": { "path": "<abs path>/background.png", "prompt": "<full-video contextual background prompt>" },
  "intro_meme": { "path": "<abs path>/screen-memes/intro.png", "prompt": "<meme prompt>" },
  "outro_meme": { "path": "<abs path>/screen-memes/outro.png", "prompt": "<meme prompt>" },
  "sources": [
    { "id": "s1", "url": "<real source url>", "fact": "<the exact sourced fact>" }
  ],
  "lines": [
    {
      "n": 1,
      "speaker": "kai",
      "mood": "smile",
      "text": "...",
      "cite": ["s1"],
      "gesture": "point_screen_L",
      "move": "pace_out",
      "emphasis": [4, 5],
      "popup": { "headline": "...", "subhead": "..." },
      "screen": { "type": "meme", "path": "<abs path>/screen-memes/line01.png", "prompt": "<meme prompt>" },
      "voice_instructions": "<optional per-episode delivery override>"
    }
  ]
}
```

Field reference:

- `episode`: slug, used for output filenames and (by default) the outro link — see `article_url`.
- `article_url` *(optional)*: the real article's live URL. Defaults to `https://botthatlyfe.com/research-and-case-studies/<episode slug>` (matches the investigation slug convention in `src/data.mjs`). **Set this explicitly** whenever the episode's own slug isn't the real article's slug (e.g. a parody/spinoff cut riffing on an existing article) — otherwise the outro links to a URL that doesn't exist.
- `sources[]`: `id` / `url` / `fact`, pulled straight from the article. `cite` on a line references these `id`s.
- `intro_meme` / `outro_meme` *(optional but recommended)*: `{prompt, path}` — a contextual meme bookending the episode. If omitted, intro/outro fall back to a plain text card (still works, just less captivating).
- `background_meme` *(recommended for every reel and YouTube cut)*: `{prompt, path}` — one contextual full-video background generated by the same image pipeline and held behind the hosts for the entire episode. The renderer sizes it to the delivery format (`1920x1080` for YouTube, `1080x1920` for reel), then blends it with the native neon/grid set so it feels richer without fighting the speakers or screen panel. Write the prompt as a low-distraction environment, not another joke card: no text, no logos, no real public figures, no busy center detail, darker edges, clear room for hosts, and imagery tied to the article's core mechanism.
- Per line:
  - `n`: 1-indexed, sequential, no gaps.
  - `speaker`: `"nate"` or `"kai"`.
  - `text`: the spoken line. Keep it as short as the tone calls for (step 2).
  - `mood`: `neutral` | `smile` | `halflid` (dry/skeptical) | `brows_up` (surprised/impressed). Drives both facial expression and TTS delivery instructions.
  - `cite`: array of source `id`s. Non-empty triggers a citation "ding" sfx and defaults the gesture to pointing at the screen.
  - `gesture` *(optional)*: see the gesture reference below. If omitted: `point_screen_R`/`point_screen_L` (Nate/Kai respectively) when `cite` is non-empty, else `rest_stand`.
  - `move` *(optional)*: `"pace_out"` (steps away from home mark — good for an opening line) or `"pace_back"`.
  - `emphasis` *(optional)*: 0-indexed word positions in `text` to vocally/physically emphasize.
  - `popup` *(optional)*: `{headline, subhead}` — a small secondary callout box, separate from the shared screen, for hammering one stat.
  - `screen` *(optional)*: see step 4. If omitted entirely and `cite` is empty, the screen shows a branded standby card — **never** the line's own caption text.
  - `screens` *(optional)*: timed intra-line screen sequence for longer lines. Each item can be `{ "start_word": 8, "screen": { ... } }` or `{ "at": 2.4, "screen": { ... } }`; use it when a single spoken line needs multiple visuals to stay entertaining and informative.
  - `voice_instructions` *(optional)*: appended to this line's TTS instructions — use this to set an episode-wide tone override (put the same string on every line) without touching the shared per-speaker defaults.

Validate before spending any API calls:

```bash
python3 character-engine/tools/validate_episode.py character-engine/episodes/<slug>/episode.json
```

## 4. Screen content — prefer memes, use real charts only when precision matters

`screen.type` options: `"meme"`, `"image"`, `"text"`, `"stat"`, `"timeline"`, `"table"`, `"quote"`.

**Default to `"meme"` for almost everything.** It's more entertaining, keeps attention, and still bakes in the real number/fact as part of the joke (e.g. a gas pump reading the actual price). It's also far cheaper than running the full lab chart-generation pipeline. Reserve `"image"` (a real chart/map/graph pulled from `lab-assets/<slug>/...`, via `build_image_card`) for a beat where the exact shape of the data matters more than a joke — e.g. a genuinely important trend line.

A meme screen spec:

```json
"screen": {
  "type": "meme",
  "path": "/absolute/path/to/lab-assets/<slug>/screen-memes/lineNN.png",
  "prompt": "<prompt text>"
}
```

`path` and `prompt` are both required. `path` is where the generated image is cached/read from; `prompt` is only consulted when that file doesn't already exist with matching generation metadata (safe to leave both in place across re-renders — unchanged prompts never re-hit the API).

**Writing the prompt**: don't repeat the style/quality boilerplate — `generate_screen_meme.py`'s `STYLE_LOCK` already prepends "bold 2D cartoon meme, thick outlines, no logos, no real public figures, spell out captions exactly" etc. Just write:
1. The actual scene/joke, specific to *this line's* real fact or number (bake the number into the image, e.g. a price tag, a stamped percentage, a sign) — a generic reaction image is a failure.
2. A baked-in caption, ≤8 words, stated exactly (don't leave it to the model to improvise text).
3. If a person appears, vary race/ethnicity across the episode's set of memes.

Generation happens automatically — `make_episode.py` calls `generate_screen_meme.py --episode <path>` before rendering, which extracts every line's (and intro's/outro's) `{prompt, path}` and generates them all in parallel. You never need to invoke it by hand unless testing a single prompt:

```bash
python3 character-engine/tools/generate_screen_meme.py --prompt "..." --out /path/to/test.png
```

The generator targets the shared screen's exact aspect ratio automatically (computed from `make_stage.SCREEN_W`/`SCREEN_H`, currently resolves to `1248x768`) so per-line memes fill the screen edge to edge; the intro/outro cards are a wider box and will show a little padding on the sides — that's expected.

## 5. Gestures, moods, and the shared screen

Both hosts stand flanking one shared screen (not one each). Gesture names describe **which side of the frame** the screen is on relative to the speaker, not anatomy:

- `point_screen_R`: screen is on this speaker's frame-right (Nate's default when cited — his mark is frame-left, screen is to his right).
- `point_screen_L`: screen is on this speaker's frame-left (Kai's default when cited — her mark is frame-right, screen is to her left).
- Don't swap these per-speaker; the default auto-assignment already gets it right. Only set `gesture` explicitly to override with a different pose.
- Other poses: `rest_stand`, `open_hands`, `explain_chop`, `count_one`, `shrug`. Nate's non-`point_screen_*` gestures are automatically mirrored so his arm still swings toward the screen regardless of which named pose is used — you don't need to think about this, just pick whichever gesture fits the line emotionally.

## 6. Render

```bash
OPENAI_API_KEY=<key> USE_OPENAI_TTS=true python3 character-engine/tools/make_episode.py \
  character-engine/episodes/<slug>/episode.json --format youtube
```

This runs, in order: (a) voice generation (`gpt-4o-mini-tts`, `cedar` for Nate / `marin` for Kai) and screen-meme generation, concurrently, each internally parallel across every line — typically 15-20s total even for 14-16 lines; (b) per-line frame rendering + encode across a process pool (this is the dominant cost, ~90% of total wall time — expect roughly 3-4 minutes total for a 12-16 line episode on an 8-core machine); (c) assembly + music scoring.

Everything is cached by content: re-running after editing only line 6's text regenerates only line 6's voice, meme (if its prompt changed), and render — everything else is a cache hit. `RENDER_WORKERS=<n>` env var caps the render process pool if the default (one per line) is too much for the machine's RAM.

**Output**: `make_episode.py` moves the finished video to `character-engine/output/youtube/<slug>.mp4` as its last step (the `Done:` line it prints names this final path, not the old in-episode-folder one) — a single, flat, easy-to-browse folder for every rendered YouTube cut, separate from `character-engine/output/reels/` (the reel skill's equivalent). Everything else (`frames/`, `audio/`, the intermediate `_dialogue_cut.mp4`/`_video_only.mp4`) stays in `character-engine/episodes/<slug>/` as build cache/QA material (step 7 below still reads frames from there) — only the one finished deliverable per render relocates. Both `output/` subfolders are gitignored, same as the episode build cache.

## 7. QA before reporting done

Never declare a render finished without looking at actual frames — cached logic and API responses can silently produce something wrong.

```bash
python3 character-engine/tools/qa_contact_sheet.py character-engine/episodes/<slug> --out /tmp/qa.jpg
```

Then use the Read tool to pull the contact sheet and a handful of individual frames (`episodes/<slug>/frames/lineNN/f*.png`, plus `frames/intro/` and `frames/cta/`) and check:

- Both hosts point *toward* the shared screen, not away from it.
- No screen ever shows the spoken caption text verbatim — only memes/charts/standby.
- Each meme's baked-in joke/number actually matches what that line is saying.
- The outro card shows the correct, real article URL (not a 404).
- No caption or number is clipped at an edge.
- Per-line audio durations are sane for the tone chosen (`ffprobe` each `audio/lineNN.wav` if the tone demands short lines).

You cannot hear the audio yourself — say so explicitly when reporting, and ask the user to confirm delivery/tone landed.

## 8. Sync to Google Drive

Once the render passes QA, upload it so it's reachable from every device:

```bash
rclone copy character-engine/output/youtube/<slug>.mp4 "gdrive:Bot That Lyfe Website Marketing Videos/YouTube/"
```

Idempotent — re-running after a re-render overwrites the same filename in Drive. This is the last step before reporting the episode finished; don't skip it even for a quick/parody-tone render.

## Known gotchas worth remembering

- `USE_OPENAI_TTS` not set → silent fallback to robotic macOS voices. Always set it.
- A line's screen defaulting to nothing does **not** mean "no visual" — it means a branded standby card. It never means "show the caption."
- `point_screen_R`/`point_screen_L` are frame-relative, not anatomical — don't reason about them as "Nate's right hand."
- Editing a `screen.prompt` string is what invalidates the meme cache — editing only the rendered PNG by hand won't survive a re-render.
- The `gdrive:` rclone remote must be configured (`rclone listremotes` should list it) for step 8's Drive sync to work — one-time setup per machine.
