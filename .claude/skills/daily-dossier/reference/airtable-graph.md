# Airtable university intelligence graph — table/field reference

Base: `Bot That Lyfe University Intelligence`, id `appFfm0RkSVqPXQxS`. Verified live via `mcp__claude_ai_Airtable__list_tables_for_base` on 2026-09-20 — if anything here looks stale, re-run that instead of trusting this file blindly. Every table below has real `multipleRecordLinks` relationships back to `Universities` (Airtable auto-creates the inverse link field), so linking one direction is enough.

Use field **names**, not field IDs, when calling `create_records_for_table`/`update_records_for_table` — the MCP tools accept either, names are what stays readable. For `singleSelect`/`multipleSelects` fields, call `get_table_schema` first to confirm the live choice strings before writing one you haven't seen before — don't guess a choice label.

## `Universities` (`tbln4EoYbr2kOUbxX`) — the anchor table

Every investigation traces back to a university. Fields: `University`, `Slug`, `City / State`, `University Type`, `Technical Focus`, `Why In Network`, `Official URL`, plus the rotation-tracking fields written by Phase 5 (see below): `Last Flagship Research`, `Flagship Research Count`, `Last Deep Dive`, `Research Themes Covered`, `Rotation Notes`, `Last Radar Touch`, `Priority Score`, `Active`. Links out to `Departments & Labs`, `Funding & Programs`, `People`, `Courses`, `Research Questions`, `Research Backlog`, `Companies & Startups`, `Jobs & Careers`, `GitHub & Open Source`, `Events`, `Opportunities`.

**No permanent "local" university** — unlike the AutoNateAI lineage this codebase forked from (which had one recurring home region), Bot That Lyfe's network is a deliberately built universe of U.S. universities (the "Bot That Lyfe 100" — research-intensive, regional, and community-connected, not just prestige rankings) that the radar rotates across evenly. See `SKILL.md` Phase 0 for the rotation-selection logic.

Rotation-tracking fields, all written by `daily-dossier` Phase 5 (one write per university touched that day, seven per run) and otherwise read-only for this skill:

| Field | Written how |
|---|---|
| `Last Flagship Research` (date) | Set to today whenever this university is one of the day's flagship questions. |
| `Flagship Research Count` (number) | Incremented by 1 each time — don't recompute from scratch, add 1 to whatever's there. |
| `Last Deep Dive` (date) | Set to today only when the pass was a genuine substantive deep dive, not every touch. |
| `Research Themes Covered` (long text) | **Append**, never overwrite — a running, dated log of what's already been researched here, so the radar avoids repeating the same angle. |
| `Rotation Notes` (long text) | Only touched when something genuinely new about cooldown/priority surfaces — don't restate what's already written. |
| `Last Radar Touch` (date) | Set to today on all seven universities researched today, even the ones that don't produce a published article. |
| `Priority Score` (number) | The radar's own ranking input — freshness × new funding × new research × AI relevance × jobs × events × graph gaps × historical neglect. Update it if Phase 0's research materially changes the read on this university; otherwise leave it. |

Same "search by `University`, never fabricate a new row" rule as every other table: if a dossier/research pass surfaces a university genuinely outside the current network, flag it to Nathan instead of creating one.

## `Research Questions` (`tblf8fuJObui3QaTc`)

One record per published article — mirrors the `investigations[]` entry field-for-field:

| Airtable field | Source |
|---|---|
| `Title` | `investigation.name` (the provocative headline) |
| `Question` | `investigation.question` |
| `Audience` (multi-select) | who this specific question is written for — Students / Employers / Founders & Investors / Policymakers / Researchers / General, matching the "different audience per flagship question" rule in SKILL.md — verify live choices with `get_table_schema` before writing a new one |
| `Question Type` | Market Signal / University Signal / Builder Signal / Cross-University Pattern — see SKILL.md's three-question-shape |
| `Hypothesis` | `investigation.hypothesis` |
| `Findings` | `investigation.findings` (leave blank if still `null`) |
| `Historical Context` | the history/context section(s) of the Markdown body, condensed |
| `Why Now` | why this question matters today specifically — the timeliness hook |
| `Commercial Relevance` | honest notes on who might pay for this intelligence and why — see `commercial-funnel.md`, this is Bot That Lyfe's own "Commercial Intelligence" chapter equivalent |
| `Evidence & Sources` | `investigation.sources`, formatted as `label — url` lines |
| `Status` | `Open Question` \| `Investigating` \| `Answered` — matches the article's `status` |
| `Confidence` | `Low` \| `Medium` \| `High` — your honest read of how solid the finding is |
| `Radar Date` | today, ISO date |
| `Page URL` | live URL once deployed (Phase 6) — leave blank until the push actually happens |
| `SEO / Search Intent` | the search-intent angle behind the headline |
| `Provocation Score` | your own 1-10 read on how genuinely provocative/clickable the question is — used by Phase 0's candidate-scoring step |
| `Universities` | linked record(s) — see linking policy below |

## `Research Backlog` (`tbl5xUHshMQJjEaC8`)

The queue this skill both reads (Phase 0) and writes (Phase 5 resolve, Phase 7 add). Key fields: `Research Candidate` (short title), `Research Question` (the actual question), `Type`, `Priority` (`Critical` / `High` / `Medium` / `Low`), `Status` (`Suggested` → `Selected` → `Researching` → `Completed`, or `Blocked` / `Rejected`), `Why It Matters`, `Expected Graph Contribution`, `Suggested Sources`, `Evidence Needed`, `Radar Date`. Links: `Related Universities`.

Phase 5: when today's article resolves a backlog row, set `Status: Completed`. Phase 7: new candidates get `Status: Suggested`, `Radar Date` = today. Check existing rows (by `Research Candidate`/`Research Question` text) before adding — update an existing `Suggested` row rather than creating a near-duplicate.

## The seven research dimensions — one table each, all linked back to `Universities`

Per the ChatGPT strategy session (2026-09-20), every university deep dive researches across these dimensions. Each has its own table; **read-only except where a genuinely new, verifiable record needs adding** — search by the table's primary field first, never fabricate a node:

| Dimension | Table | Primary field | Notes |
|---|---|---|---|
| Capital | `Funding & Programs` (`tblUbdoYVgIEy7tZo`) | `Funding / Program` | Grants, awards, sponsored research, corporate partnerships. `Funder`, `Funding Type`, `Amount`, `Award / Start Date`, `Program Purpose`, `Technical Domains`, `Demand Signal` (what this funding implies is now in demand), `Source URL` — never write an `Amount` you can't source. |
| Research | `Departments & Labs` (`tbldKPqqwOK3cvBaT`) | `Department / Lab` | Schools, departments, institutes, centers, labs. `Type`, `Technical Domains`, `Research Focus`, `Why Relevant`. |
| People | `People` (`tbl7EPZ0i2PXzciGR`) | `Name` | Professors, PIs, program directors, student leaders, industry partners — see the commercial-funnel mapping below, this table is also the top of the outreach funnel. |
| Technology | `Technologies & Domains` (`tblxWYM30pJbyjiVk`) | `Technology / Domain` | Flat ontology, not linked to a specific university — agentic AI, ML, robotics, cybersecurity, bioinformatics, etc. Mostly read-only reference; only add a new domain if the research genuinely surfaces one missing from the ontology. |
| Education | `Courses` (`tbl8khM5kTSdeWgI4`) | `Course` | Maps classroom concepts to funded research/technologies. `Concepts`, `Practical Relevance`. |
| Economic Network | `Companies & Startups` (`tblYlGVCmpU42rbtR`) | `Company` | Spinouts, frontier labs, recruiters, industry partners. `University Connection`, `Hiring Signal`, `Funding / Growth Signal`. |
| Opportunity | `Jobs & Careers` (`tblbpRgrJROkoceyD`), `GitHub & Open Source` (`tblDZfHyZMo5CVXJw`), `Events` (`tblj6guaxhJig7yj0`) | `Role / Career Signal`, `Repository / Project`, `Event` | Jobs/internships, open-source contribution surfaces, hackathons/conferences — the "what could a student do this week" layer. |

`Technologies & Domains` is the one table above with no `Universities` link (it's a cross-cutting ontology, not a per-university node) — reference it from `Research Questions`/`Funding & Programs`/`Departments & Labs`'s free-text domain fields, don't try to force a link.

## `People` / `Opportunities` / `Commercial Hypotheses` / `Interactions` / `Claims & Observations`

The relationship-and-monetization layer — see `commercial-funnel.md` in this same directory for the full funnel mapping and which skill is allowed to write which table. This skill only touches these in Phase 7, and only additively:

- **`People`** (`tbl7EPZ0i2PXzciGR`): a real, publicly-identifiable stakeholder the research surfaced (`Stakeholder Type`, `Relationship Stage` starts at whatever the live schema's first-stage choice is — check with `get_table_schema`). Never seed a person from a guess.
- **`Opportunities`** (`tblu0DaH54LSpBlWO`): off-limits to `daily-dossier` — that's `../commercial-outreach-brief/SKILL.md`'s job, gated on Nathan naming a target to pursue.
- **`Commercial Hypotheses`** (`tblVwq9P5bzEDGmyu`): Bot That Lyfe-specific — explicit monetization experiments (coaching, opportunity maps, build labs, university/employer partnerships, sponsorships — see the ChatGPT strategy session). Phase 7 may add a new hypothesis row when research genuinely surfaces evidence for or against one already listed, or a new one worth tracking — `Evidence For`/`Evidence Against`, never a fabricated data point.
- **`Interactions`** / **`Claims & Observations`**: populated by actual networking/outreach activity, not by this daily article-production skill. Leave alone here unless Nathan explicitly reports a real interaction to log.
