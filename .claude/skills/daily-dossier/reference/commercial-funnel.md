# Commercial funnel — how Bot That Lyfe's graph tracks monetization

The ChatGPT strategy session that scoped Bot That Lyfe (2026-09-20) was explicit that the business model isn't locked yet: "let the intelligence system discover the business model with us." This file is how that discovery gets tracked in the graph, not a claim that the model is already known — see `Commercial Hypotheses` below.

## The model

Same downstream-of-a-conversation breakdown the AutoNateAI lineage used: `$ = A × Q × R × D × O × K × V` (Attention → Qualification → Response → Discovery → Offer → Close → Value). Upstream, where the research engine actually sits: `Research → Artifact → A → Q → C → D → O → K → $`, where `C = A × Q × R` (conversations) is an *output* of engineering attention and qualification, not something you just decide to have.

For Bot That Lyfe specifically, the ChatGPT session named several candidate customers sitting inside the same university graph, not just students: students themselves (jobs/skills/experience), parents (career outcomes), student orgs (programming/events), professors/labs (capable students, visibility), departments (student outcomes), universities (recruitment/outcomes), employers (technical talent), AI/agentic-AI startups (developers/users), conference organizers (attendance), tool companies (adoption). Students are the attention/distribution wedge; the other rows are where commercial leverage more likely lives — don't assume the audience of an article is automatically the paying customer.

## Table mapping

| Funnel stage | Airtable table / field |
|---|---|
| **A** — attention / targets identified | `People` records seeded from a research pass's target list, `Relationship Stage` at its earliest live-schema value |
| **Q** — qualification | `People.Stakeholder Type` — professor/PI, student leader, employer/recruiter, event organizer, investor, etc. |
| **R / C** — response / conversation | `People.Relationship Stage` progression plus `Interactions` records (`Channel`, `Summary`, `Outcome`) once something real happens |
| **D** — problem discovered | `Claims & Observations` (`Evidence Class`, `Why It Matters`) — a real need surfacing in a real conversation |
| **O / K / $** — offer / close / value | `Opportunities` (`Stage`, `Estimated Value`) |
| **Hypothesis tracking** | `Commercial Hypotheses` — Bot That Lyfe's own explicit monetization-experiment table, not present in the AutoNateAI lineage this codebase forked from |

## Who writes what, and when

- **`daily-dossier` Phase 7** seeds `People` only (`A`), additively, from research passes — real, publicly verifiable targets only, never `Opportunities`, never a fabricated contact path. It may also add or update a `Commercial Hypotheses` row when a research pass genuinely surfaces evidence for/against one — `Evidence For`/`Evidence Against` fields only, never a fabricated data point, and always report it to Nathan rather than silently deciding the hypothesis is confirmed.
- **`commercial-outreach-brief`** turns one specific `People` target Nathan chooses to pursue into a real micro-brief + outreach draft, and is the only skill allowed to create an `Opportunities` record.
- Everything past that — `Interactions`, `Claims & Observations`, any `Opportunities.Stage` move — only gets written when Nathan reports something that actually happened.

## Diagnostic use

Don't ask "why isn't this making money" in the abstract — ask **which edge of `Research → A → Q → C → D → O → K → $` is losing probability**, using real counts pulled from these tables. Most will read as null or near-zero for a while after launch — a null is data too (nothing tried yet), not a zero to feel bad about. Never compute or report a conversion rate as observed fact when the underlying counts are this thin. One constrained variable, one experiment, one measurable outcome, update the model — don't try to fix multiple funnel edges in the same week.
