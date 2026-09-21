# Field shapes

## `src/data.mjs` — `investigations[]` entry

Structured, scannable metadata. Keep this flat — don't nest new sub-objects for prose that belongs in the Markdown body instead. The field *keys* below are unchanged from the site's original build (renaming them would mean touching every render function in `src/pages.mjs` that reads them) — several are repurposed in meaning for Bot That Lyfe's university-intelligence domain; the repurposing is noted per field.

```js
{
  slug: "kebab-case-slug",              // page lives at /research-and-case-studies/<slug>
  icon: "help_center",                  // Material Symbols name, existing convention
  status: "open" | "investigating" | "published",   // see investigationStatusLabels
  name: "A provocative, real, clickable QUESTION — this is the H1, the <title>, the OG title, and the card headline everywhere this entry appears. Never a flat topic label ('Georgia Tech Autonomous Systems Funding') — a reason to click ('Georgia Tech Just Got $4.2M for Autonomous Systems. Where Can an Undergrad Actually Plug In?'). It has to be honestly earned by the actual research (see voice-and-evidence.md) — provocative, not clickbait; the tension in the title should be a real tension the article actually resolves or investigates, not a hook that oversells what's inside.",
  question: "The actual analytical research question, one sentence, precise — this is what renders under the H1, not the headline itself. Can be denser/more technical than `name`.",
  tagline: "One honest sentence for card previews — 'here's what we know, here's what's missing.'",
  thumbnail: "/assets/og/<slug>.jpg",                 // generated per Phase 3 below — same file also serves as the page's ogImage, no separate asset
  region: "",                                          // legacy field from the codebase this site forked from — regions[] is empty, always leave this "" (see daily-dossier's "Featured placement" note)
  publishedDate: "YYYY-MM-DD",                        // the day this article actually went live (today, in the skill's run). Drives recency ordering on the home page's "Featured Research" row and the research hub's default sort (see renderHome/renderArticles in src/pages.mjs) — every new investigation needs one, set once, never edited on a later research pass.
  commodity: "Agentic AI / Robotics",                 // REPURPOSED: renders as a free-text tag pill on the card — use it for the article's primary technical domain (e.g. "Agentic AI", "Cybersecurity", "Bioinformatics", "Agentic AI · Jobs") rather than a farm commodity. Free text, no fixed vocabulary required, but keep it short (it's a pill, not a sentence).
  evidence: [ { label, note, url } ],                 // what got you asking the question
  stakeholders: [ "..." ],                            // who you'd want to talk to — professors, PIs, student leaders, employers, founders
  hypothesis: "Your best guess, explicitly hedged.",
  graphLayers: { physical, capital, business, information }, // REPURPOSED labels shown on the page: "The Physical Side" (infrastructure/compute — labs, hardware, campus facilities), "The Money Side" (funding/grants), "The Day-to-Day Work" (people/operations — who's actually doing the work), "The Data/Systems Side" (the technology/data layer itself). Keep each short — the ```graph``` diagram in the .md body carries the real detail.
  dataNeeds: [ "..." ],                               // what's missing before this becomes a real answer
  artifacts: [ "..." ],                               // what you'd build once the data exists (dashboard, model, etc.)
  findings: null | "Findings text once genuinely answered — stays null until then.",
  sources: [ { label, url } ],
  sourcePath: "../content/research/<slug>.md",        // points at the long-form body
}
```

Don't add `methodology` or `implications` as new top-level fields — write them as `##` sections in the Markdown body instead. The reason: they're prose that grows with each research pass, and `data.mjs` gets unreadable fast if long strings live inline.

## `content/research/<slug>.md` — recommended section order

Loaded via `readResearchMarkdown()` in `src/pages.mjs`, rendered with the same hand-rolled `markdownToHtml()` used for tutorials (supports `#`-`####` headings, paragraphs, lists, tables, images, code fences, and the `chart`/`map`/`mermaid` fences below). The first `# H1` is stripped automatically (the page's own `<h1>` already shows the title) — start your actual content at `## Short Answer`.

1. `# Title` (stripped, but keep it for readability/git history)
2. `## Short Answer` — 2-4 sentences, first person, in voice (see `voice-and-evidence.md`). If status is `"open"` or `"investigating"`, say so plainly instead of writing an answer that doesn't exist yet.
3. **One or more history/context sections**, witty header of your choosing, that ground the reader in why the funding/lab/program looks the way it does at all (why this university has this focus, why this program was created, why this technology area suddenly has money in it). Not optional filler — this is where the "dots most people don't connect" requirement starts.
4. `## How This Connects` — a ` ```graph ` block (see `reference/interactive-blocks.md`) tracing the chain — funding → lab/PI → technology → courses → students → jobs, or whichever subset the research actually surfaced. This is the render of `graphLayers`, done as an actual evidence-labeled diagram instead of four text blocks. Use ` ```graph `, not ` ```mermaid `, for this section on every new investigation page.
5. **One or more funding/technology sections** — real grant amounts, real program names, real technology specifics, and explicitly call out anywhere two signals point in different directions (funding surge vs. hiring freeze, hot repo vs. thin contributor base). This is usually the actual insight of the piece.
6. `## The Numbers So Far` — one or more ` ```chart ` blocks plus 1-2 sentences of plain-English interpretation each, always naming exactly what the numbers do and don't cover. Multiple small, honestly-labeled charts beat one chart trying to say everything.
7. `## Where This Is Happening` — a ` ```map ` block, only with genuinely verifiable coordinates (campuses, labs, company HQs) — never a fabricated location
8. **A ground-truth section** if the research phase found one — an actual current, sourced, on-the-ground data point (a real job posting, a real GitHub commit, a real course syllabus) that shows the hypothesis playing out right now, not just in aggregate statistics
9. `## Methodology` — one honest paragraph: what sources you actually used, what you didn't (interviews not yet done, data not yet pulled)
10. `## Moral of the Story` — required, see `voice-and-evidence.md`. Concrete, usable, per-stakeholder next steps — the section people should screenshot.
11. `## Related Research` — a short pointer sentence; the actual cross-links render automatically below the Markdown body from the structured fields, don't duplicate them here

Sections 3 and 5 aren't fixed headers — name them for what they actually say. The fixed-name sections (Short Answer, How This Connects, The Numbers So Far, Where This Is Happening, Methodology, Moral of the Story, Related Research) stay consistent across every article so a returning reader knows the shape.

The structured fields (`detailField*` calls in `renderInvestigationDetail`) render immediately below the Markdown body — evidence, "who we'd like to talk to," data needs, sources, and the related-entity cards. The Markdown body is the narrative; the structured fields are the spec sheet. Don't repeat the same list twice in both places.
