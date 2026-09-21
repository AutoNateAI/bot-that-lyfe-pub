# Bot That Lyfe — University Intelligence Publication

A university-centered technical opportunity intelligence publication: BotThatLyfe.com tracks
funding, research, people, technology, courses, companies, jobs, and open-source activity
across a network of U.S. universities at the intersection of computer science, agentic AI, and
engineering. Forked from the AutoNateAI agricultural-intelligence publication codebase and
re-pointed at this domain — see `.claude/skills/` for the full research/publishing/distribution
pipeline.

Commerce (merch) lives at a separate repo/site, `shop.botthatlyfe.com` — this repo is the
publication only: articles, the daily research radar, and Nate & Kai video/reel distribution.

## Dev loop

```bash
npm install
npm run dev
```

Open `http://localhost:4173`.

## Build

```bash
npm run build
```

Exports the static site to `dist/site/` (what `.github/workflows/deploy-gh-pages.yml` publishes
to `botthatlyfe.com` on every push to `main`).

## The daily loop

Every morning, hand Nathan's radar dossier (a 7-university research pass across the Bot That
Lyfe network — funding, research, people, technology, courses, companies, jobs/GitHub/events)
to Claude Code and say "here's today's dossier." That invokes `.claude/skills/daily-dossier/`,
which:

1. Researches and drafts three flagship articles (Market Signal / University Signal / Builder
   Signal) via `.claude/skills/research-brief/`.
2. Writes findings back into the `Bot That Lyfe University Intelligence` Airtable base
   (`appFfm0RkSVqPXQxS`) — see `.claude/skills/daily-dossier/reference/airtable-graph.md`.
3. Deploys (after confirming with Nathan).
4. Renders a 16:9 lab explainer video per article via `.claude/skills/bot-lab-video-director/`.
5. Produces Nate & Kai parody distribution content — a YouTube cut and three reels per article —
   via `.claude/skills/nate-kai-video-director/` and `.claude/skills/nate-kai-reel-director/`.
6. Mines the graph for tomorrow's backlog candidates.

See `.claude/skills/dossier-second-look/` for same-day follow-on articles and
`.claude/skills/commercial-outreach-brief/` for turning a specific research-surfaced contact into
a real outreach package.

## Social distribution

```bash
npm run social:post -- --platform facebook --message "..." --link "https://botthatlyfe.com/..."
```

Dry-run by default; add `--confirm` to actually publish. See `docs/social-distribution-setup.md`
for LinkedIn/Facebook app setup (including a note on which Facebook Page the copied `.env`
credentials currently point at — check before your first live post).

## Structure

- `server.mjs` — local dev server (also carries Square/booking routes inherited from the fork
  that this repo doesn't currently use — commerce lives at `shop.botthatlyfe.com`).
- `src/` — site data (`data.mjs`), page templates (`pages.mjs`), shared chrome (`components.mjs`).
- `scripts/` — build (`export-static.mjs`), image generation, the `lab:*` asset/video pipeline,
  social posting.
- `content/research/` — published article Markdown (empty until the first dossier run).
- `content/tutorials/` — general CS/AI skill tutorials, carried over from the fork.
- `character-engine/` — the Nate & Kai rigged-character video/reel pipeline (Python + FFmpeg +
  OpenAI TTS + gpt-image).
- `.claude/skills/` — the actual research/publishing/distribution pipeline, see above.

## What's still a manual TODO

- Point `botthatlyfe.com`'s DNS at GitHub Pages (the `CNAME` file/workflow are already set; the
  registrar-side DNS record is not something this repo can do for you).
- Swap the Facebook Page in `.env`/the Meta app to a real Bot That Lyfe Page (currently posts to
  AutoNate AI's Page — see `docs/social-distribution-setup.md`).
- Add real social profile URLs (LinkedIn company page, Instagram, YouTube) once they exist — the
  site's structured data currently omits them rather than guessing.
- The business model is intentionally not locked — see `.claude/skills/daily-dossier/reference/commercial-funnel.md`
  and the `Commercial Hypotheses` Airtable table. Let the daily research find it.
