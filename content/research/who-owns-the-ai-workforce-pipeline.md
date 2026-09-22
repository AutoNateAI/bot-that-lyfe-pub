# Who Owns the AI Workforce Pipeline?

## Short Answer

Nobody does — and that's the actual finding, not a dodge. Three real programs are each building a piece of what gets called "the AI workforce pipeline" right now, and each one answers to a different boss. Purdue's SCALE program, now carrying more than $100 million in Department of War funding across 35 universities, is administered by the Navy's own microelectronics office and exists to feed defense contractors. The NSF's new $35 million National AI Research Resource Operations Center, co-led by UT Austin's TACC, exists to make AI compute and data open to any researcher, with no defense strings attached. Howard University's AI Network runs on Amazon's cloud and Amazon's curriculum, expanding AI readiness to other HBCUs on a private company's terms. All three call themselves workforce infrastructure. None of them report to the same authority, use the same curriculum-governance process, or train students for the same jobs. The place where "who's actually in charge" gets answered most concretely is a September 18 memorandum between Purdue and Illinois that puts a literal industry advisory board in the room — which is real, sourced, and probably the most honest single data point in this whole question.

## Why a Navy Office Runs the Country's Biggest University AI-Workforce Program

SCALE — Scalable Asymmetric Lifecycle Engagement — didn't start as an AI story. It started in 2020 as a $19.2 million Department of Defense response to a narrower problem: too few U.S. citizens with the security clearances and microelectronics training to work in the defense chip supply chain. The program is led by Purdue but managed day to day by the Naval Surface Warfare Center, Crane Division, under the Pentagon's Trusted and Assured Microelectronics effort. That federal-office detail matters more than it sounds: it means the country's largest university-based technical-workforce program isn't run out of an education agency or a university system at all. It's run out of a Navy weapons division.

![A small crate labeled $19.2 million 2020 is wheeled away by cheering students while a much larger crate labeled $100 million plus rolls in with a small anchor flag on top](/assets/meme/who-owns-the-ai-workforce-pipeline-01.jpg "SCALE just went Navy-size")

Six years later, SCALE is Purdue's single largest federally funded research effort of any kind, at any dollar amount, in any field — more than $100 million through fiscal year 2027, spread across 35 partner universities and more than 75 government and industry partners. That's not a rounding-error side program. It's the largest thing happening at one of the country's biggest engineering schools, and it exists because a defense agency decided the commercial chip industry alone wasn't going to produce cleared, trained workers fast enough on its own.

The reason this belongs in an "AI workforce" story at all, rather than staying a chips-and-defense story, is that the same skills shortage now sits underneath both. A joint SEMI Foundation, NSF, and McKinsey analysis released in mid-2026 put the projected U.S. semiconductor workforce gap at 127,000 to 157,000 workers by 2030 — with roughly three-quarters of that demand in manufacturing-adjacent roles, and 73% of surveyed chip employers already reporting real trouble filling engineering seats. AI data-center buildout and chip fabs are now openly competing for the same small pool of trained engineers. SCALE was built for the defense slice of that shortage specifically — not the general "AI workforce" the dossier language implies.

![A tug of war where a chip fab worker and an AI lab engineer both pull a rope tied around one exhausted graduate stuck in the middle, a scoreboard behind reads 157,000 short](/assets/meme/who-owns-the-ai-workforce-pipeline-02.jpg "Everyone wants the same engineer")

## How This Connects

```graph
{
  "title": "Three governance chains, one shared label: \"AI workforce\"",
  "nodes": [
    { "id": "dow", "label": "Dept. of War /\nNSWC Crane", "rank": 0, "detail": "SCALE is funded by the Department of Defense's Trusted and Assured Microelectronics effort and administered day-to-day by the Naval Surface Warfare Center, Crane Division — a Navy office, not an education agency." },
    { "id": "nsf", "label": "National Science\nFoundation", "rank": 0, "detail": "NSF funds the $35M NAIRR Operations Center as a 5-year cooperative award, co-led by UC San Diego's SDSC and UT Austin's TACC — an open-science compute-access mandate, no defense clearance requirement." },
    { "id": "aws", "label": "Amazon Web\nServices", "rank": 0, "detail": "AWS selected Howard as 1 of 5 regional lead institutions for AWS Machine Learning University, funding curriculum and cloud infrastructure on its own commercial terms." },
    { "id": "scale", "label": "SCALE\n>$100M, 35 universities", "rank": 1, "detail": "Purdue-led consortium, 75+ government/industry partners, 1,175 current students, 339 alumni already placed in defense microelectronics jobs, 64% of alumni working in defense or defense contracting." },
    { "id": "nairr", "label": "NAIRR Operations Center\n$35M, TACC + SDSC", "rank": 1, "detail": "Coordinates private-sector, federal and academic AI compute/data resource providers into one national portal — the NAIRR Pilot has already supported 800+ research projects since 2024." },
    { "id": "howardai", "label": "Howard AI Network\npowered by AWS", "rank": 1, "detail": "Advances AI research, infrastructure and workforce readiness across the D.C. metro area and other HBCUs, using Amazon's own bootcamp and grant-writing curriculum." },
    { "id": "mou", "label": "Purdue-Illinois MOU\n(Sept. 18, 2026)", "rank": 2, "detail": "Signed by the Purdue and Illinois engineering deans. Covers fabs, equipment/materials, chip design, verification/testing, and advanced packaging — 'governed in part by a shared industry advisory board.'" },
    { "id": "advisory", "label": "Shared industry\nadvisory board", "rank": 3, "detail": "The MOU's own language: employers get a formal seat setting workforce priorities and program direction for both universities' semiconductor curricula — not just an internship pipeline." },
    { "id": "curriculum", "label": "Industry-identified\nskills list → curriculum", "rank": 4, "detail": "SCALE's own program description: industry and government partners meet regularly through working groups and symposiums to update a knowledge/skills list, and partner universities then update coursework to match it." },
    { "id": "jobs", "label": "339 alumni placed,\n64% defense/contractors", "rank": 5, "output": true, "detail": "SCALE's own reported outcome data as of May 2026 — the clearest measurable endpoint of any of the three chains here." }
  ],
  "edges": [
    { "from": "dow", "to": "scale", "evidence": "verified", "label": "Purdue newsroom: DoD funding increase to >$100M, announced May 6, 2026" },
    { "from": "nsf", "to": "nairr", "evidence": "verified", "label": "NSF cooperative award, $35M over 5 years, announced Sept. 2026" },
    { "from": "aws", "to": "howardai", "evidence": "verified", "label": "Howard's own announcement: 1 of 5 AWS-MLU regional lead institutions" },
    { "from": "scale", "to": "mou", "evidence": "verified", "label": "Purdue College of Engineering: MOU signed by both engineering deans, Sept. 18, 2026" },
    { "from": "mou", "to": "advisory", "evidence": "verified", "label": "Purdue's own announcement language: 'governed in part by a shared industry advisory board'" },
    { "from": "advisory", "to": "curriculum", "evidence": "estimated", "label": "SCALE's existing model (working groups → skills list → curriculum update) is the precedent this new board is expected to follow; not yet confirmed for the Illinois side specifically" },
    { "from": "curriculum", "to": "jobs", "evidence": "verified", "label": "SCALE's own reported placement data, May 2026: 339 alumni in defense microelectronics jobs" },
    { "from": "nairr", "to": "jobs", "evidence": "hypothesis", "label": "NAIRR-OC has no reported workforce-placement metric of its own yet — its mandate is compute access, not job placement" },
    { "from": "howardai", "to": "jobs", "evidence": "hypothesis", "label": "Howard AI Network launched too recently (2026 bootcamps just beginning) to have reported placement outcomes" }
  ],
  "sourceLabel": "Every node is a real, currently operating program as of Sept. 22, 2026. The deliberately separate rank-0 owners (DoW, NSF, AWS) and the single measurable jobs outcome sitting only under the SCALE branch are the actual finding here, not an artifact of how the diagram is drawn — see Sources below."
}
```

## The Part Almost Nobody Says Out Loud: SCALE Isn't an "AI Workforce" Program

Say "AI workforce pipeline" to most people in September 2026 and they picture agentic coding tools, GitHub Agent HQ, prompt engineering. SCALE trains almost none of that. Its own outcome data is specific: 339 of its alumni are placed in defense microelectronics jobs, 161 more went into graduate study in microelectronics-relevant fields, and 64% of all SCALE alumni end up working in defense or for a defense contractor — nine of the program's ten most common employers are defense-sector. This is a chip-design-and-fabrication pipeline with a security-clearance requirement baked in, not a software-agent pipeline. Calling it "AI workforce" isn't wrong exactly — semiconductors are the physical substrate everything else runs on — but it quietly elides the difference between "trained to build the chips AI runs on" and "trained to build the AI itself," and those are different degrees, different employers, and increasingly different labor pools competing for the same undergraduates.

![A student stares in confusion at an open delivery box labeled AI workforce training that only contains a microchip and a padlock icon labeled defense clearance required](/assets/meme/who-owns-the-ai-workforce-pipeline-03.jpg "Not the AI you ordered")

That distinction is why the Purdue-Illinois MOU, signed September 18 by deans Mark Lundstrom and Rashid Bashir, is the most concrete governance artifact in this whole question. It doesn't just add course-sharing or a joint career fair — Purdue's own announcement states the partnership is "governed in part by a shared industry advisory board," covering fabs, equipment and materials, chip design, verification and testing, and advanced packaging. That's an employer body sitting inside the actual governance structure of two universities' curricula, not adjacent to it. SCALE's own program description describes the mechanism this likely follows: industry and government partners meet through working groups and technical symposiums to identify and prioritize the skills new hires need, and SCALE's partner universities then update coursework to match. Two deans signed the MOU. An industry board will help run what happens next.

![Two hard hat wearing engineering school mascot figures shake hands over a signed document while a businessman and a businesswoman in suits are already pulling up chairs at the head of the table](/assets/meme/who-owns-the-ai-workforce-pipeline-04.jpg "The board showed up early")

Meanwhile the NAIRR Operations Center answers to a structurally different mandate. NSF's $35 million, five-year cooperative award — co-led by UT Austin's TACC alongside UC San Diego's SDSC — exists to coordinate private-sector, federal, and academic AI compute and data resources into one national access portal, with no defense-clearance gate and no named industry advisory board in its own announcement. Its pilot phase already supported more than 800 research projects and thousands of students since 2024. It is, deliberately, the opposite governance model from SCALE: open access instead of vetted pipeline. And Howard's AI Network runs on a third model entirely — a private company, Amazon, choosing which five universities nationwide get to be regional leads, funding the bootcamps and curriculum on its own commercial terms, with no federal agency or industry board in the loop at all.

![Three cartoon parent figures, a Navy captain, a lab coat scientist, and a cheerful cloud shaped tech company mascot, each hold a different baby labeled AI workforce, none looking at each other](/assets/meme/who-owns-the-ai-workforce-pipeline-05.jpg "Same name, three different parents")

## The Numbers So Far

```chart
{
  "type": "bar",
  "title": "Federal dollars behind two of the three 2026 pipelines ($M)",
  "labels": ["SCALE (DoD/NSWC Crane)", "NAIRR Operations Center (NSF)"],
  "series": [
    { "name": "Amount ($M)", "data": [100, 35], "color": "#c9a227" }
  ],
  "sourceLabel": "SCALE: >$100M through FY2027, Purdue newsroom, May 6, 2026. NAIRR-OC: $35M cooperative award over 5 years, NSF/FedScoop, Sept. 2026. Howard's AWS-funded investment amount is not publicly disclosed, so it's excluded here rather than shown as zero — this chart only compares the two federally disclosed figures, not all three pipelines' total resourcing."
}
```

```chart
{
  "type": "bar",
  "title": "SCALE's total footprint vs. the national semiconductor workforce gap it's aimed at",
  "labels": ["SCALE students supported since 2020", "SCALE current students (2026)", "Projected 2030 U.S. worker shortfall (low est.)", "Projected 2030 U.S. worker shortfall (high est.)"],
  "series": [
    { "name": "People", "data": [1750, 1175, 127000, 157000], "color": "#5b8def" }
  ],
  "sourceLabel": "SCALE figures: Purdue newsroom, May 6, 2026. Shortfall figures: SEMI Foundation / NSF / McKinsey & Co., \"Analysis of the National Semiconductor Industry Workforce Landscape,\" July 2026. Six years of SCALE's total output is under 1% of the low-end 2030 gap estimate — this isn't a knock on the program, it's the honest scale mismatch between the biggest single university workforce pipeline in this space and the problem it's aimed at."
}
```

The second chart is the one that actually answers "who owns this." Nobody does, at the scale the shortfall requires — SCALE is real, well-funded relative to any single university program, and still two orders of magnitude smaller than the 2030 gap it's positioned against. That math is exactly why three separately governed pipelines (DoD, NSF, AWS) are running in parallel instead of one consolidated program: no single owner has the mandate or the budget to close this alone, so each is closing a different slice under a different authority.

## Where This Is Happening

```map
{
  "title": "The four institutions carrying today's workforce-pipeline governance question",
  "center": [38.5, -85.5],
  "zoom": 5,
  "markers": [
    { "lat": 40.4237, "lng": -86.9212, "label": "Purdue University (West Lafayette, IN) — SCALE lead institution, >$100M DoD/NSWC Crane funding" },
    { "lat": 40.1020, "lng": -88.2272, "label": "University of Illinois Urbana-Champaign (IL) — new Sept. 18, 2026 semiconductor MOU with Purdue, shared industry advisory board" },
    { "lat": 30.2849, "lng": -97.7341, "label": "UT Austin / TACC (Austin, TX) — co-leads the $35M NSF NAIRR Operations Center with UC San Diego's SDSC" },
    { "lat": 38.9219, "lng": -77.0190, "label": "Howard University (Washington, D.C.) — regional lead for the Howard AI Network powered by AWS" }
  ],
  "sourceLabel": "Four real, currently operating governance nodes as of Sept. 22, 2026 — not a claim that these are the only institutions in either pipeline (SCALE alone spans 35 universities)."
}
```

## Ground Truth: What the MOU Actually Committed To, in Writing

Most of what makes this question hard to answer is that "workforce pipeline" governance usually happens in meetings nobody publishes minutes from. The September 18 MOU is a rare exception: it's a dated, named, on-the-record commitment. Purdue's own announcement lists the concrete deliverables — joint industry-focused certificates, minors, and concentrations; expanded graduate programs; jointly held recruiting and research events across Indiana and Illinois; and a leadership structure with Shaloo Rakheja (Illinois) and David Janes (Purdue) as co-directors, with a third executive-director role still open as of the announcement. That's a specific, checkable structure, not a vague "partnership" press release — and it's the clearest place in this entire question where you can point to a real document and say "this is who's in the room."

![Two construction workers on ladders hang a giant banner reading joint certificate program between two campus buildings, cardboard boxes labeled minors concentrations and recruiting events stacked below](/assets/meme/who-owns-the-ai-workforce-pipeline-06.jpg "Signed, sealed, still being unpacked")

## Methodology

This piece draws on Purdue's own newsroom and College of Engineering announcements for the SCALE funding increase and the Purdue-Illinois MOU, Manufacturing Dive's reporting on the federal contract mechanics (confirming Naval Surface Warfare Center, Crane Division as the administering office), SCALE's own program description for its industry-feedback curriculum model, NSF's and FedScoop's reporting on the NAIRR Operations Center award, Howard University's own announcement of its AWS regional-lead designation, and the SEMI Foundation/NSF/McKinsey joint workforce-landscape report for national shortfall figures. What's missing: no public roster of the Purdue-Illinois shared industry advisory board's actual member companies; no confirmation of whether Illinois students gain any access to SCALE's federal funding pool specifically or only shared curriculum and events; and no placement or outcome data yet for either the NAIRR Operations Center or the Howard AI Network, both too new to have reported results.

![A detective in a trench coat holds a giant magnifying glass up to a mostly blank company org chart where every box that should have an employer name instead just reads three question marks](/assets/meme/who-owns-the-ai-workforce-pipeline-07.jpg "Advisory board guest list: classified")

## Moral of the Story

**If you're a student:** these are not the same major wearing different clothes. If you want a defense-cleared microelectronics career, SCALE's 35-university consortium is a real, funded, outcome-tracked path — go look at whether your school is one of the 35. If you want to build agentic AI software, none of the three pipelines in this piece is actually training for that; look at what your CS department teaches directly instead.

![A student stands scratching his head at a fork in a dirt road, one signpost reads 35 universities defense clearance pointing toward a glowing factory, the other reads agentic AI no clearance pointing toward a laptop](/assets/meme/who-owns-the-ai-workforce-pipeline-08.jpg "Pick a lane, literally")

**If you're a professor or department chair:** the Purdue-Illinois MOU is a usable template, not a one-off. If your program is trying to build closer employer ties, "a named shared industry advisory board with specific deliverables and co-directors" is a more concrete ask of your own dean than "more industry engagement."

**If you're an employer:** SCALE already has a seat-at-the-table mechanism built and running — 75+ partners are already inside it. The Purdue-Illinois advisory board is a second, newer door into the same kind of access. Neither requires you to build your own university relationship from scratch.

**If you're a policymaker:** the scale mismatch in the second chart above is the real policy problem — SCALE's total six-year output is under 1% of the low-end 2030 shortfall estimate. A single well-funded program, however well it works, isn't structurally capable of closing this gap by itself; the actual question worth asking is whether DoD, NSF, and private cloud vendors coordinating three separate pipelines is a feature or a gap in itself.

![A tiny ant proudly plants a victory flag on one grain of sand labeled 1,750 while an enormous mountain of sand labeled 157,000 needed looms behind it](/assets/meme/who-owns-the-ai-workforce-pipeline-09.jpg "Progress, technically")

## Related Research
