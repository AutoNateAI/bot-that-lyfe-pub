---
name: daily-dossier
description: Turns Nathan's daily radar dossier into three published Bot That Lyfe research articles wired into the Airtable university-intelligence knowledge graph — question-driven investigations spanning market/university/builder signals, drawn from a 7-university/day rotation across the Bot That Lyfe network, each run through research-brief end to end, writes findings back to Research Questions/Research Backlog/Universities/the seven research-dimension tables, deploys, renders a 16:9 explainer video for all three in parallel, seeds commercial-funnel target People from each question's stakeholder-target list, mines the dossier + graph for tomorrow's backlog candidates, then produces Nate & Kai parody distribution content for all three — a YouTube cut per article (three in parallel) plus three reels per article (parallel within an article, articles done one at a time). Use when the user says "here's the dossier" / "here's today's dossier" or otherwise hands over the daily radar synthesis and wants the research→article→Airtable→deploy→distribution loop run.
---

# Daily Dossier

The daily loop: **Dossier In → Graph Check → 3× Article (research-brief) → Airtable Write-Back → Deploy → Backlog Refresh → Lab Bench → Nate & Kai Distribution**. This skill is an orchestrator — it does not reimplement research/draft/asset/verify logic, it calls into `../research-brief/SKILL.md` for that (three times, once per flagship question) and adds the Airtable graph, university-rotation, deploy, and lab-bench steps around it. Load `../research-brief/reference/*.md` (voice-and-evidence, schema, interactive-blocks) exactly as that skill specifies; load `reference/airtable-graph.md` here for every Airtable read/write.

**Three questions, every day**: the dossier carries a **7-university research pass** (see the ChatGPT strategy session that scoped this: funding → research → people → technology → education → economic network → opportunity, across 7 of the network's universities), from which **three flagship questions** get selected and become real, published articles today. Per the strategy session, these three should span *different audiences and question shapes*, not all be student-facing:

- **Market Signal** — something changing in agentic AI / the job market, traced back through the university graph (who's building it, who funded them, who's hiring for it).
- **University Signal** — something from the 7-university pass this run (new funding, a lab, a program) with the funding→research→people→technology→education→jobs chain traced all the way through.
- **Builder Signal** — something immediately actionable (repos to contribute to, a project to build this week, skills a specific course teaches that map to a specific funded project).

Nathan isn't picking one of three pre-written questions — the research pass produces candidates across the 7 universities, and this skill (with Nathan) selects the strongest three across these three shapes. The only other editorial choice is which of the three becomes the single `featured: true` slot (see "Featured placement" below).

Base: `Bot That Lyfe University Intelligence` (`appFfm0RkSVqPXQxS`). Read/write it with the `mcp__claude_ai_Airtable__*` tools directly — there is no local script/env var for this base beyond the `AIRTABLE_BASE_ID_BOT_THAT_LYFE` convenience value in `.env` (which just records the id; reads/writes still go through the MCP tools, not a local fetch script).

**The dossier is Nathan's own synthesis of the private daily radar, not raw source material.** Treat it as a trusted brief, but everything in it that becomes a public claim still needs the evidence bar in `voice-and-evidence.md` — carry through whatever citation the dossier already attached to a claim, and never let a radar-internal detail (scoring, ranking, "which desk found this") leak into the public article.

## 0. Ingest dossier + university-rotation check

1. Read the dossier Nathan pastes/drops. It should name the **7 universities** researched this pass (or fewer if this is an early/partial run — confirm with Nathan rather than assuming) with findings across the seven dimensions (Capital/Funding, Research/Departments & Labs, People, Technology, Education/Courses, Economic Network/Companies, Opportunity/Jobs+GitHub+Events), and **three flagship questions** selected from that pass, each carrying evidence, a preliminary answer, stakeholder targets, an SEO/search-intent angle, and its own **Lab Protocol** (data inputs, preprocessing, analytical sequence, open-source tool category, workflow/commands, intermediate outputs, validation checks, expected visualizations, final artifact, estimated hands-on time, what result would change the conclusion) — same Lab Protocol shape the AutoNateAI lineage used, just applied to university/technology data instead of agricultural data. If the dossier's three questions don't visibly span the Market/University/Builder shapes above, or fewer than three are named, confirm with Nathan before proceeding rather than guessing.

   Each question's stakeholder-targets section carries a commercial layer: search-intent detail behind the SEO angle, 5-15 named targets classified by `Stakeholder Type` (not just "stakeholder" — professor/PI, student leader, employer/recruiter, event organizer, investor, etc.), a public contact path where one is genuinely verifiable, a specific conversation objective per target, and outreach-concept notes. Hold onto this the same way you hold the Lab Protocol — it's not article content, it feeds Phase 7's target-seeding step and the separate `../commercial-outreach-brief/SKILL.md`. See `reference/commercial-funnel.md`.
2. University rotation check (read-only at this stage — Phase 5 writes the update): pull the `Universities` record for each named university (`mcp__claude_ai_Airtable__list_records_for_table` on `Universities`, search by `University`) and note `Priority Score`, `Last Flagship Research`, `Flagship Research Count`, `Research Themes Covered`, `Rotation Notes`, `Last Radar Touch`, `Active`. If a named university doesn't match an existing `Universities` row, flag it to Nathan instead of fabricating one (new university rows are his call).
3. Pull current graph state before touching anything, **for each of the three flagship questions**: `Research Backlog` records (via `mcp__claude_ai_Airtable__list_records_for_table`), filtered/scanned for anything matching that question. Also check `Research Questions` for an existing record on the same topic — each of the three runs should **update** an existing record, never create a duplicate.
4. If a question matches an existing `Research Backlog` row, that's the row this run will resolve for it (its `Status` moves forward at the end — see Phase 5). If it doesn't match anything in the backlog, that's fine — it becomes a new `Research Questions` record and a fresh (immediately-completed) backlog trail.
5. Show Nathan a one-line confirmation naming all three questions, their audience/shape (Market/University/Builder), and what each is linked to in the graph before starting Phase 1 — cheap checkpoint, avoids running the wrong day's questions.

## 1-4. Research → Draft → Assets → Assemble & Verify (run once per flagship question)

Run `../research-brief/SKILL.md` phases 1-4 exactly as written, **three times** — in the order the dossier lists them. Take each question through all four phases to completion before starting the next, rather than interleaving phases across questions; it keeps each checkpoint's context to one question at a time and matches how `research-brief` is written (one question in, one page out).

One adjustment to Phase 1, same for all three: the dossier is your starting source list, not a blank page. Extract every sourced claim the dossier already carries for that question (with its original URL) instead of re-deriving it from scratch, then use WebSearch/WebFetch only to close remaining gaps or verify anything the dossier asserts without a primary-source link. A dossier claim with no URL is not yet a finding — same rule as everywhere else in `voice-and-evidence.md`. The dossier's Lab Protocol write-up for each question is *not* research-brief content — don't fold it into the article's findings or Markdown body; hold onto it for Phase 8 below.

Same checkpoints as `research-brief`: show the findings list before drafting, stop after each phase. Same asset rule: one `gpt-image-2.5-flare` job added to `scripts/generate-og-hero-images.mjs` per question, run with `ONLY="<slug>"` (comma-separate all three slugs once all three are ready, to batch the spend into one run).

## Featured placement (part of Phase 2's `investigations[]` entry)

Two site sections key off publish recency, not array order or evidence length (`src/pages.mjs`: `renderHome`, `renderArticles`):

- The home page's "Featured Research" row shows the **3 most recently published** investigations, most-recent first — sorted by `publishedDate` descending, `featured` as a tiebreaker for same-day articles.
- The home hero panel and the `/research-and-case-studies` hub's banner card both show whichever investigation has `featured: true` (single slot, not the top-3 row).

When Phase 2 writes each of today's three entries:

1. Set `publishedDate: "YYYY-MM-DD"` (today) on **all three** new/updated entries — **every** investigation needs this; it's what drives the 3-slot ordering. See `../research-brief/reference/schema.md`.
2. Once all three are drafted, pick the strongest of the three — the one with the most genuinely resolved finding, not necessarily the one Nathan will find most interesting personally — and set `featured: true` on it. This is a real editorial call Nathan has delegated to this run; say out loud which one you picked and why (one sentence) rather than silently choosing.
3. Find whichever *other* entry in `investigations[]` currently has `featured: true` (there should be exactly one, from a previous day) and remove the field (or set `false`) from it — only one investigation should hold it at a time, across the whole site, not just across today's three.

**This is the timestamp principle**: same-dating all three of today's entries is what makes the home page's Latest Research row and the `/research-and-case-studies` hub show all three of today's articles, newest-first — no extra placement logic needed. This holds as long as no more than three articles publish on the same day; if `dossier-second-look` adds a same-day fourth article, one of today's three flagship pieces would fall out of the home row (acceptable — flag it to Nathan if it happens).

The `featured` flag is **only** set by this skill, on the day's chosen best flagship question. `dossier-second-look` (same-day follow-on articles from the rest of the dossier) must never set `featured` — but it still must set `publishedDate` to that day's date.

`investigations[].region` stays `""` — the site's own `regions[]`/`organizations[]`/`systems[]` arrays in `src/data.mjs` are empty legacy exports (see the comment above them). **This is separate from Airtable's per-dimension tables** (`Departments & Labs`, `Funding & Programs`, etc.), which hold real linking nodes for the knowledge graph — see `reference/airtable-graph.md`.

## 4.5. Meme visual pass (part of Phase 4, before Phase 5)

Once each question's Phase 4 build is verified and its article Markdown is otherwise final, run `../meme-visual-pass/SKILL.md` against that `content/research/<slug>.md` — a second read of the finished article that scatters ~9 contextual, meme-style illustrated images through the prose-heavy sections. This runs on **every** daily-dossier article, all three, same as the hero image. Re-run Phase 4's build-verify step afterward before moving to the next question (or to Phase 5 once all three are done).

## 5. Airtable write-back

Load `reference/airtable-graph.md` for exact table/field names and the linking policy (search for existing nodes, never fabricate a new one on the fly). Do steps 1-3 once per question (three passes); step 4 runs once, covering all seven universities touched by this pass (not just the three that became articles).

1. **`Research Questions`**: create (or update, if Phase 0 found an existing record) one record mirroring the finished `investigations[]` entry — see `reference/airtable-graph.md` for the field-by-field mapping. `Deployed`/`Page URL` stay unset until Phase 6 actually ships.
2. **Link it**: `Universities`, and any of the seven dimension tables the research pass genuinely touched (`Departments & Labs`, `Funding & Programs`, `People`, `Courses`, `Companies & Startups`, `Jobs & Careers`, `GitHub & Open Source`, `Events`) — only to records that already exist (search first).
3. **Resolve the backlog trail**: if Phase 0 found a matching `Research Backlog` row, move its `Status` forward (`Selected`/`Researching` → `Completed`).
4. **University rotation write-back** (once per university researched this pass, up to seven): on each `Universities` record, set `Last Radar Touch` to today. On the three that became flagship articles: set `Last Flagship Research` to today, increment `Flagship Research Count` by 1, append (never overwrite) a dated line to `Research Themes Covered`, and set `Last Deep Dive` to today if this was a genuine substantive deep dive. Update `Rotation Notes`/`Priority Score` only if the research pass actually surfaced something new about that university's cooldown/priority status.

## 6. Deploy

Build is already verified in Phase 4 for all three articles. This phase is the actual `git add`/`commit`/`push` to `main` — which is a real production deploy (`.github/workflows/deploy-gh-pages.yml` runs on every push to `main` and publishes `dist/site` straight to `botthatlyfe.com` via GitHub Pages, no separate approval gate on the CI side). Stop and confirm with Nathan before pushing, same as `research-brief`'s "never publish/commit without being asked" — unless he's already said to go ahead in the same message. Ship all three articles in one push by default. After a confirmed push, set `Deployed`/`Page URL` on all three `Research Questions` records.

## 7. Backlog refresh

Re-read the dossier (all seven universities researched this pass, not just the three chosen questions) against the **now-updated** graph. Look for:

- Other questions/threads from the 7-university pass that didn't become one of today's three articles.
- New entities the pass surfaces (people, labs, companies, repos, events) worth a row in the relevant dimension table even before a full article exists.
- Gaps the day's research exposed but didn't close (`Research Backlog` items).
- **Each question's commercial-layer target list** (see Phase 0) — seed a `People` record for every target that's genuinely public and verifiable and isn't already in the graph: `Stakeholder Type` from the classification, `Why Relevant` citing the specific finding, `Relationship Stage` at its earliest live-schema value, `Public Profile URL` only if real, linked `Universities`/`Research Questions`. A name with no public verification isn't enough — skip it and flag it to Nathan. This step does **not** create `Opportunities` records — that's gated to `../commercial-outreach-brief/SKILL.md`.
- Whether anything this pass found genuinely supports or challenges an existing `Commercial Hypotheses` row (or suggests a new one) — see `reference/commercial-funnel.md`. Add/update with real `Evidence For`/`Evidence Against`, never a fabricated signal.

For each real candidate, create a `Research Backlog` row (`Status: Suggested`, `Radar Date` = today), linked to the relevant `Universities` record — check for an existing matching row first. Then report the ranked list back to Nathan in the chat — this phase writes candidates, it does not silently decide what tomorrow's questions are. Also report the SEO/search-intent notes and the full target list for each of today's three questions in that same message — which targets (if any) become real outreach is Nathan's call via `commercial-outreach-brief`.

## 8. Lab bench — video for all three, rendered in parallel

Each of the dossier's three questions arrives with its own Lab Protocol (held onto from Phase 0/1, not folded into the article body). Every one of today's three articles gets a finished 16:9 explainer video, and all three video builds run in parallel, not one after another.

1. For each of the three slugs, run `../bot-lab-asset-pipeline/SKILL.md`'s asset workflow (`npm run lab:assets -- --article content/research/<slug>.md`) if `lab-assets/<slug>/` doesn't already exist — manifest, PNG/SVG charts, preview video, narration scaffold. Quick and sequential is fine for this step; it's the render that's expensive.
2. Launch the three **explainer** renders (`../bot-lab-video-director/SKILL.md`'s `npm run lab:explainer -- --run lab-assets/<slug>`) **in parallel, all three started before any is waited on** — either three parallel `Agent` (general-purpose) subagents in one message, one per slug, each owning that slug's full asset-workflow-if-needed + explainer render + `ffprobe` verification and reporting back the finished `lab-assets/<slug>/video/explainer-production.mp4` path; or three `Bash` calls with `run_in_background: true` in the same turn if driving it directly. Either approach must start all three before checking on any one of them.
3. Once all three report back, verify each yourself with `ffprobe` (intro/outro/chart-scene frame sampled, audio stream present, duration matches) per `bot-lab-video-director`'s Verification section — don't take a subagent's self-reported success as the final check.
4. Anything left in the day's Lab Protocols beyond the mandatory explainer (9:16 social shorts, deeper simulation work) becomes a short "Today's Bench" stretch list — report it to Nathan, don't run it automatically.
5. Report back to Nathan: all three explainer video paths, anything that failed or fell back (and why), and what's left as stretch.

## 9. Nate & Kai distribution — parody YouTube + reels for all three

Every daily-dossier run also produces shareable, traffic-driving Nate & Kai parody content for all three articles, once they're live (after Phase 6 deploy — these link back to the real published URLs). This is separate from Phase 8's lab-bench explainer: Phase 8 is the professional-tone research video embedded in the lab record; this phase is deliberately loud, comedic, cussing-heavy distribution content built to pull traffic back to the article, using the character-engine pipeline (`../nate-kai-video-director/SKILL.md` and `../nate-kai-reel-director/SKILL.md`), not the lab-bench pipeline.

**Step 1 — three YouTube parody cuts, all three in parallel.** For each of today's three slugs, invoke `../nate-kai-video-director/SKILL.md` using its **informal/comedic parody tone** — heavy, rhythmic cussing (fuck/shit/damn/hell landing naturally and often) with Richard Pryor / Mike Epps / Katt Williams stand-up energy: genuinely worked up or genuinely cracking up about the real facts, punchlines landing on the actual numbers, roast energy aimed at the situation (the funding gap, the paperwork, the hiring freeze) — never cruelly at a real named person, never inventing a fact to make a joke land. Pick an episode slug distinct from the article slug and set `article_url` explicitly to the real live URL. Launch all three before waiting on any of them — three parallel `Agent` (fork or general-purpose) subagents in one message, or three backgrounded `Bash` renders, each owning its own episode write, render, QA contact-sheet pass, and Google Drive sync (`gdrive:Bot That Lyfe Website Marketing Videos/YouTube/`) per that skill's own steps. Verify each yourself once all three report back.

**Step 2 — reels, three per article, articles one at a time.** Unlike the YouTube step, do **not** launch all nine reels across all three articles simultaneously. Instead: for the first article, launch its **three** reels in parallel (all three started before any is waited on), each covering one genuinely distinct focused angle from that article's real facts, via `../nate-kai-reel-director/SKILL.md`, same heavy-cussing/Pryor-Epps-Katt Williams tone as Step 1. Only once all three of that article's reels have actually completed (rendered, QA'd, synced to `gdrive:Bot That Lyfe Website Marketing Videos/Reels/`) do you move to the second article's three reels, then the third's. Net shape: 3 articles × 3 reels = 9 reels total, batched 3-at-a-time by article.

**Duration**: 45-55s is a target for reels, not a cap — never trim content, cut a joke, or shorten a beat just to force a render under 60s. A slightly-long reel that lands its jokes beats a trimmed one that doesn't. Once a reel has rendered, don't re-render it solely to shave its length down.

Report back to Nathan at the end: all three YouTube video paths + durations + Drive sync status, and all nine reel paths + durations + angles covered + Drive sync status, per article.

## What this skill does not do

Generic distribution copy (LinkedIn/Facebook/email drafts) — separate downstream skill. Personalized outreach (micro-brief PDFs, targeted LinkedIn/email drafts, Gmail drafts) for a specific target — `../commercial-outreach-brief/SKILL.md`, run only when Nathan names a target to pursue. Creating `Opportunities` records — that skill's job, not this one's; Phase 7 only ever seeds `People` and (carefully, evidence-gated) `Commercial Hypotheses`. Interview/relationship logging (`Interactions`/`Claims & Observations`) beyond what Phase 7 seeds as backlog/target candidates. Creating new `Universities` rows — flag a genuinely new one back to Nathan instead of inventing one. Running the lab pipeline's own 9:16 social short or deeper simulation work against all three by default — Phase 8 makes the 16:9 explainer mandatory for all three (in parallel), everything past that is stretch, reported not auto-run. (Phase 9's Nate & Kai parody YouTube cuts and reels, by contrast, *are* mandatory for all three articles every day — that's a separate pipeline from the lab-bench one.) **Walking through the rest of the dossier conversationally and deciding whether to build same-day follow-on articles** — that's `../dossier-second-look/SKILL.md`, run after this skill finishes.
