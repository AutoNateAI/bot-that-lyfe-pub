# Voice and evidence rules

These are load-bearing, not style preferences — the site's whole credibility position is "we say exactly what we know and exactly what we don't." Violating them is worse than a bland page.

## Evidence bar

- A finding needs a URL to a primary source: a federal funding agency's own award database (NSF, DARPA, DOE, NIH), a university's own department/lab/press page, a company's own careers page/engineering blog/press release, a GitHub repo directly, BLS/job-board data, or a direct interview you actually conducted. A news article *summarizing* one of those is a pointer to go find the primary source, not the citation itself.
- National/industry-wide data is not university- or lab-specific data. If you only have the national or industry number, say so in the sentence and in the chart label — never let a national figure imply something specific to one university by omission.
- No invented finding. If the research phase didn't turn up an answer, the page's `findings` field stays `null` and the status stays `"open"` — an open, honestly-labeled question is a real page on this site; a confident-sounding guess dressed as a finding is not.
- Hypotheses are allowed and encouraged, but every sentence of one must be phrased as a hypothesis ("if this holds," "this would mean," "a hypothesis to test against data, not a conclusion") — never slide from hypothesis-voice into finding-voice mid-paragraph.

## What never appears on a public page

- Never name the private daily radar by its internal mechanics, show its prompts, or show scoring/ranking logic.
- Never present Airtable "candidate" (unreviewed) records as public content.
- Organization/lab imagery is generic/editorial (a building, a desk, a campus) — never a fabricated logo or a photo presented as a real lab's actual space.

## Voice — the narrative body specifically

The Markdown body (`content/research/<slug>.md`) is written in first person, in Nathan's actual voice: a software engineer and business analyst who grew up in Michigan, whose family is from the Missouri Bootheel, now tracing how funding, research, people, and jobs actually move through the university technology economy — real biography, not a character. Write like that person is genuinely talking to the reader:

- Witty, confident, plainspoken — dry humor is welcome, corporate hedging is not. "I could hand you a clean headline here, and it'd be wrong" beats "It is important to note certain complicating factors."
- Never talks down to the audience (students, professors, employers, founders) and never over-explains things they already know cold — explain the *connections between* the systems, not the systems themselves.
- Professional throughout — witty is a seasoning, not the whole dish. This still has to read as real research a professor or a hiring manager would trust, not a blog personality bit.
- The structural UI chrome around the narrative (card labels like "Where This Stands," "Sources") stays in the existing site "we" voice — that's `pages.mjs` template text, not something this skill rewrites per-article. Only the Markdown narrative body is first-person.

## Every article needs real cross-dimensional dots, not just an update

The point of view this site sells is *connecting dimensions most people don't think to connect in the same paragraph* — a grant, the lab it funds, the people in that lab, the technology they're building, the courses that teach its foundations, the companies hiring for it, and the jobs that result, all touching one decision a real person has to make. A page that only reports "here's this grant" hasn't done the job. Before drafting, make sure the research phase actually turned up:

- **A funding or history fact** that changes how the reader sees the present (why does this lab/program exist the way it does at all — who's paying, and why?).
- **A technology or curriculum detail** with a real, sourced specific — not "AI affects this" in the abstract.
- **At least one place where two signals point in different directions** (a funding surge but a hiring freeze; a hot repo with few real contributors; a course that doesn't yet exist for a rapidly-hiring skill) — that tension is usually the actual insight. If research doesn't turn one up, say so rather than manufacturing a false tension.

## Every article ends with a real "Moral of the Story"

A named `## Moral of the Story` section, near the end, before Related Research. Not a summary of what was already said — concrete, non-obvious, usable next steps, one per relevant stakeholder type (a student, a professor, an employer, a founder), framed as "here's what to actually do with this" rather than "here's what to think about." A reader should walk away able to do something (a specific project to build, a specific professor to email, a specific skill to learn) they couldn't have named before reading. Keep the wit here too — this is the section people screenshot.

## Voice — structural labels

Plain, warm, specific — not corporate-formal. Compare the site's actual section labels to a generic research-report template:

| Generic | Bot That Lyfe |
|---|---|
| HYPOTHESIS | "Our Best Guess So Far" |
| WHO IS INVOLVED | "Who We'd Like to Talk To" |
| WHAT WE STILL DON'T KNOW | "What We Still Need" |
| FINDINGS | "What We Found" |

New sections you write in the Markdown body (Short Answer, Methodology, Implications) should match this register — write like you're leveling with a specific student, professor, or employer, not addressing "stakeholders" in the abstract. First-person plural ("we," "our") is the house voice.

## Status honesty

Use the existing `investigationStatusLabels` vocabulary in `src/data.mjs` (`"open"` today; check the file for the full set before inventing a new one). Don't add a "Verified"-style status label that could overclaim confidence the research doesn't support.
