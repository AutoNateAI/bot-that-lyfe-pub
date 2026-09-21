---
name: research-brief
description: Turns one university-technical-intelligence research question into a published Bot That Lyfe research page — search-based research, a Markdown write-up with interactive diagrams/charts/maps, generated hero art, and a wired-in investigations[] entry in this site's static export. Use when the user gives a research question (or a daily-dossier candidate question) and wants it to become a real page at /research-and-case-studies/<slug>.
---

# Research Brief

Produces one Bot That Lyfe research page end to end: **Research → Draft → Assets → Assemble & Verify**. Stop and show the user your work at the end of each phase — never chain straight through to a live build without a checkpoint, and never publish/commit without being asked.

This is a search-based skill: Phase 1 is real WebSearch/WebFetch research, not generation from the model's own knowledge. A claim with no fetched source is not a finding — see `reference/voice-and-evidence.md` before writing anything.

## The four phases

### 1. Research (search-based)
Given a question, search primary sources only — NSF/DARPA/DOE/NIH award databases, a university's own department/lab pages, a company's own careers/engineering-blog pages, GitHub repos directly, BLS/job-board data, academic papers — no secondhand blog summaries as the sole source. Every claim gets a URL. If department/lab-level data doesn't exist publicly, say so — don't extrapolate from national/industry-wide figures and present it as specific to one university. Load `reference/voice-and-evidence.md` for the evidence bar and the site's honesty rules (never invent a finding, never claim internal-only radar detail publicly).

Output: a scratch findings list, each item `{ claim, url, dateOrVintage }`. Show this to the user before drafting — it's the cheapest point to catch a bad source.

### 2. Draft
Load `reference/schema.md` for the exact field shapes. Produces two things:
- `content/research/<slug>.md` — the long-form narrative (short answer, system diagram, numbers, the university/technology chain, methodology, implications, doubling as the `investigations[]` entry's body). Load `reference/interactive-blocks.md` before writing any ` ```chart `/` ```map `/` ```graph ` fence — the JSON shape has to match exactly what `public/app.js` expects. Use ` ```graph ` (not ` ```mermaid `) for `## How This Connects` — it's a hand-laid-out, evidence-labeled, live-scenario-capable diagram instead of a static auto-layout flowchart.
- A `src/data.mjs` `investigations[]` entry stub (question, status, stakeholders, evidence, hypothesis, dataNeeds, sources, `sourcePath` pointing at the new `.md` file).

Status stays `"open"` unless the research phase actually produced a real, sourced answer — see `investigationStatusLabels` in `src/data.mjs`.

### 3. Assets
One image per article, generated with `gpt-image-2.5-flare` via `scripts/generate-og-hero-images.mjs` — add one new job entry there, don't build a new script and don't use the older plain-photo pattern in `scripts/generate-lab-images.mjs`. This single generated image does triple duty: the investigation's `thumbnail` (card thumbnail *and* the image at the top of the article body) *and* the page's `ogImage` — set `ogImage: investigation.thumbnail || ...` in `renderInvestigationDetail` rather than generating a second, separate OG asset.

Requirements for the prompt (see the existing job entries for real examples):
- **Photo-realistic**, relevant to the specific question this article answers — not a generic category stock photo.
- The headline/caption text is **baked directly into the image by the model**, not added afterward — ask for "large bold headline text reading [X]" plus a smaller caption line "Bot That Lyfe · [short label], Coming Soon" (drop ", Coming Soon" once the piece has real content). Witty, click-worthy, professional — the same voice as `name` (see `reference/voice-and-evidence.md`), never clickbait that oversells a stub.
- Composition: photo on the left, text baked into the **right ~40-45% of the frame**, dark navy background bleeding in behind the text (matches the site's brand — see `STYLE` constant in the script). Keep text out of the bottom ~10% of the frame.
- Generate at `1536x1024`, the script center-crops to the `1200x630` OG size automatically.
- Save as `og/<slug>.jpg` (not `investigations/<slug>.jpg`) — the `/assets/og/` path prefix is what makes `captionedImgClass()` in `src/pages.mjs` apply the right-cropping CSS (`.captioned-thumb`, `object-position: right center`) that keeps a card-thumbnail's tighter crop from clipping the caption text. A different path prefix silently loses that protection.

Run it with `ONLY="<slug>" node scripts/generate-og-hero-images.mjs` from the repo root to generate just the new entry (or a comma-separated list to regenerate a few) — don't rerun the whole file, it'll re-spend on every image that's already good.

Charts and maps are **not** separate image assets; they're data embedded directly in the Markdown (Phase 2) and render client-side.

### 4. Assemble & verify
1. `node --check` every file you touched (`src/data.mjs`, `src/pages.mjs` if you changed it).
2. `node scripts/export-static.mjs` from the repo root — must complete with no errors and no missing-asset warnings.
3. Open the built page under `dist/site/research-and-case-studies/<slug>/index.html` and grep for `class="research-chart"`, `class="research-map"`, `class="research-graph"` to confirm every block you wrote actually rendered as a data island, not as a raw code block (a JSON typo silently degrades to a visible `.data-block-error` — check for that string too). For an `app.js` change specifically, run `node --input-type=module --check < public/app.js` in addition to the normal `node --check` — the file loads as `type="module"`, where a duplicate top-level declaration is a silent-at-build-time `SyntaxError` that only shows up in the browser.
4. Report the new URL and a one-line summary of what's still open/missing. Do not commit or push unless asked.

### 5. Meme visual pass (not optional for a daily-dossier run)

Once Phase 4 is verified, run `../meme-visual-pass/SKILL.md` against the finished `content/research/<slug>.md` — it scatters ~9 contextual, meme-style illustrated images through the article's prose-heavy stretches, generated with `gpt-image-2.5-flare`. `daily-dossier` always runs this as its own numbered step; if you're driving `research-brief` standalone (no `daily-dossier` wrapper), run it too before calling the article finished — re-run Phase 4's build-verify step afterward, since the meme pass adds new Markdown image lines and files.

## Reference files

| Need | Load |
|---|---|
| Evidence bar, fabrication rules, voice | `reference/voice-and-evidence.md` |
| Exact `investigations[]` field shapes + Markdown section order | `reference/schema.md` |
| ` ```chart `/` ```map ` JSON spec (must match `public/app.js`) | `reference/interactive-blocks.md` |

## What this skill does not do (yet)

No live Airtable/radar integration on its own — `daily-dossier` is the skill that wires this into the `Bot That Lyfe University Intelligence` base (`appFfm0RkSVqPXQxS`); this is the manual "one question in, one page out" loop underneath it. No distribution (LinkedIn/Facebook/email/YouTube) — that's a downstream skill that should consume the finished `investigations[]` entry, not be part of this one. No SEO/redirect work — that's handled separately.
