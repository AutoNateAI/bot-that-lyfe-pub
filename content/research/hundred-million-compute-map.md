# The $100M Compute Map

## Short Answer

The NSF's new hub program isn't actually buying computers — read the solicitation closely and it funds "connective tissue": consortium coordination, workforce development, and faculty training, while the consortium itself (universities plus state/local government plus philanthropy plus industry) is on the hook for building and operating the actual compute through cost-share. That single structural fact changes who's actually favored to win. It's not simply "whichever university already has the biggest federal grants" — UT Knoxville's $29M in 2026 NSF awards is real, but those are individual-PI research grants, not a standing multi-institution, multi-sector consortium. The places that look genuinely well-positioned right now are the ones that have already practiced the harder skill this program is actually testing: getting a university, a philanthropy, and regional employers to co-fund something together before the federal money shows up. Grand Valley State's AIRII partnership with the Van Andel Institute is the clearest example in this radar pass. Awards haven't been made yet — full proposals are due November 4, 2026 — so everything below is positioning, not outcome.

## Why This Program, Why Now

The NSF announced the State and Regional AI Infrastructure Hubs program on August 4, 2026, with a straightforward diagnosis behind it: AI-enabled science is concentrating at a handful of frontier universities, and researchers, students, and educators everywhere else are being left outside it. The fix on paper is up to 10 regional consortium awards, one per state or multi-state region, each worth $4 million to $12 million over five years — roughly $100 million total in this first round. NVIDIA, AMD, Intel, and Dell Technologies are lined up as private-sector partners. But the money itself is narrower than the headline number suggests: NSF's contribution funds coordination, workforce training, and faculty development, not the hardware. The consortium — a mix of universities, state and local government, philanthropy, and industry — has to bring the actual compute and operating cost to the table as a cost-share. Full proposals are due November 4, 2026, with the same deadline repeating annually. As of today, no state has been awarded anything.

## How This Connects

```graph
{
  "title": "How This Connects",
  "nodes": [
    { "id": "nsf_program", "label": "NSF State & Regional AI\nInfrastructure Hubs ($100M)", "rank": 0, "detail": "Announced Aug. 4, 2026. Up to 10 awards, $4M-$12M each over 5 years. One award per state or multi-state region. Full proposals due Nov. 4, 2026 — no awards made as of this writing." },
    { "id": "structure", "label": "Structure: NSF funds coordination\n+ workforce, NOT compute", "rank": 1, "detail": "The consortium itself — universities, state/local government, philanthropy, industry — provides the actual compute and operating cost as cost-share. NSF's money is the connective tissue." },
    { "id": "gvsu", "label": "GVSU + Van Andel Institute:\nAIRII (LOI, Mar 2026)", "rank": 2, "detail": "Targets 15-25 fully funded PhD students, 30+ faculty, $25M+ external funding in 3-5 years — a university/philanthropy consortium already built and operating before this NSF program even existed." },
    { "id": "missouri", "label": "Missouri: AERI (Mizzou) +\nKummer Center (Missouri S&T)", "rank": 2, "detail": "Two public universities in one state already running parallel AI centers — Mizzou's AERI (interdisciplinary, launched May 2026) and Missouri S&T's Kummer Center for AI and Autonomous Systems, both with active industry-project pipelines." },
    { "id": "utk", "label": "UT Knoxville: $29M in\nindividual NSF research grants", "rank": 2, "detail": "$9M scientific-data infrastructure + $20M ATHENA hub — large, real, federally funded, and tied to ORNL. But these are individual-PI research awards, not a standing multi-sector regional consortium." },
    { "id": "ncat", "label": "N.C. A&T: $10M DoW\nAccelerate-DAQ (HBCU capacity)", "rank": 2, "detail": "A five-year federal award building trustworthy-AI and cyber-defense research capacity at an HBCU — different funder (Dept. of War, not NSF), but real evidence this region already absorbs large federal AI awards." },
    { "id": "surge", "label": "GVSU SURGE:\npaid Computing+X undergrad research", "rank": 3, "detail": "$6,000 stipend, summer 2026 cohort, Computing+X interdisciplinary focus — a workforce-development pipeline already running, exactly the kind of program this NSF hub funds more of." },
    { "id": "readiness", "label": "Consortium-readiness\n(not raw R&D size) is the filter", "rank": 4, "output": true }
  ],
  "edges": [
    { "from": "nsf_program", "to": "structure", "evidence": "verified", "label": "NSF solicitation NSF 26-513" },
    { "from": "structure", "to": "gvsu", "evidence": "verified", "label": "AIRII is a university-philanthropy consortium already operating on this exact model" },
    { "from": "structure", "to": "missouri", "evidence": "estimated", "label": "Two in-state public universities with active AI centers are a plausible single-state consortium base" },
    { "from": "structure", "to": "utk", "evidence": "estimated", "label": "Large federal research grants don't by themselves constitute the multi-sector consortium this program requires" },
    { "from": "structure", "to": "ncat", "evidence": "estimated", "label": "Federal-capacity track record from a different agency; consortium partners for an NSF-specific bid not yet confirmed" },
    { "from": "gvsu", "to": "surge", "evidence": "verified", "label": "SURGE is GVSU's own existing paid-research workforce pipeline, already running before this NSF program" },
    { "from": "surge", "to": "readiness", "evidence": "estimated", "label": "A working workforce-development program is closer to what NSF is funding than a research grant alone" },
    { "from": "utk", "to": "readiness", "evidence": "hypothesis", "label": "Whether UTK's research strength converts into a winning regional-consortium bid is untested and unconfirmed" }
  ],
  "sourceLabel": "Awards for this program have not been made as of Sept. 21, 2026 (proposals due Nov. 4, 2026) — every node here is positioning evidence, not a confirmed outcome. See Sources below."
}
```

![A cartoon contractor stands in front of a half-built regional data center holding blueprints while three different mascots labeled university, philanthropy, and industry argue over who brings the cement truck](/assets/meme/hundred-million-compute-map-01.jpg)

## The Part of the Program Nobody's Headline Mentions

Most coverage of this program leads with "$100 million for AI infrastructure," which makes it sound like a supercomputer-shopping spree. It isn't. NSF's own solicitation structures this as a public-private cost-share: the federal award covers consortium coordination, workforce development, and faculty training, while the actual compute — the GPUs, the data center space, the operating budget — has to come from the consortium's own state, local, philanthropic, and industry partners. That's a meaningfully different bar than "does your university have a supercomputer." It's closer to "can your state get a university, a foundation, and a couple of employers to co-sign a five-year commitment together." Grand Valley State's AIRII partnership with the Van Andel Institute — a philanthropy-funded research institute, not a federal agency — already cleared exactly that bar in March 2026, targeting $25M+ in external funding and 15-25 fully funded PhD students over three to five years, entirely independent of this NSF program. That's a real-world proof that the model works locally; it's also the single strongest piece of evidence in this radar pass for which kind of regional ecosystem is actually built for what NSF is now funding.

The tension: UT Knoxville is, by dollar amount, the most federally funded AI-research node in this entire radar pass — $29 million across two 2026 NSF awards, tied directly into Oak Ridge National Lab's HPC ecosystem. On raw research firepower, it looks like the obvious favorite. But neither of those two grants is a multi-sector regional consortium; they're individual-PI research awards. Whether that research depth converts into the specific kind of state-or-regional coalition this new program requires is genuinely untested — and it's exactly the kind of place where a "clearly the strongest university" read and a "clearly the strongest bid" read can point in different directions.

![A scoreboard cartoon shows one team with a giant trophy labeled Research Dollars towering in the lead, while a much smaller team labeled Consortium Paperwork quietly holds the actual game ball](/assets/meme/hundred-million-compute-map-02.jpg)

## The Numbers So Far

```chart
{
  "type": "bar",
  "title": "NSF hub award range vs. what candidate ecosystems have already secured (2026, $M)",
  "labels": ["NSF hub award (min)", "NSF hub award (max)", "GVSU/Van Andel AIRII target", "UT Knoxville 2026 NSF grants", "N.C. A&T Accelerate-DAQ"],
  "series": [
    { "name": "Amount ($M)", "data": [4, 12, 25, 29, 10], "color": "#c9a227" }
  ],
  "sourceLabel": "NSF 26-513 solicitation (award range, per consortium, over 5 years); GVSU College of Computing (AIRII's own 3-5 year external-funding target, not NSF money); UT Knoxville and N.C. A&T figures are separate, already-awarded federal grants, not related to this NSF hub program — shown side by side only to size the range, not to imply any of these entities has won or applied for a hub award."
}
```

This is the honest reading of that chart: even the maximum possible single hub award ($12M) is smaller than what GVSU's AIRII is already independently targeting, and smaller than what UT Knoxville already has in hand from unrelated NSF grants. The hub program's real value isn't the dollar figure — it's the workforce-development and coordination money layered on top of whatever a region can already put together.

## Where This Is Happening

```map
{
  "title": "Candidate regional ecosystems in this radar pass",
  "center": [39.5, -89],
  "zoom": 4,
  "markers": [
    { "lat": 42.9634, "lng": -85.6681, "label": "Grand Valley State University (Allendale/Grand Rapids, MI) — AIRII with the Van Andel Institute, SURGE paid undergrad research" },
    { "lat": 38.9404, "lng": -92.3277, "label": "University of Missouri (Columbia, MO) — AERI center" },
    { "lat": 37.9515, "lng": -91.7715, "label": "Missouri University of Science and Technology (Rolla, MO) — Kummer Center for AI and Autonomous Systems" },
    { "lat": 35.9550, "lng": -83.9300, "label": "University of Tennessee, Knoxville — $29M in 2026 NSF research awards, ORNL-adjacent HPC ecosystem" },
    { "lat": 36.0726, "lng": -79.7920, "label": "North Carolina A&T State University (Greensboro, NC) — $10M Dept. of War Accelerate-DAQ HBCU capacity award" }
  ],
  "sourceLabel": "None of these institutions has been awarded an NSF State and Regional AI Infrastructure Hub — this map shows where this radar pass found existing regional AI-infrastructure activity, ahead of the Nov. 4, 2026 proposal deadline."
}
```

![A cartoon map of the United States with five glowing pins, each pin holding up a tiny scorecard, while a nervous NSF reviewer archetype squints at all of them at once through binoculars](/assets/meme/hundred-million-compute-map-03.jpg)

## Ground Truth: SURGE Is Already a Working Workforce Pipeline, Not a Proposal

Most of what this program will eventually fund — paid student research, faculty training, regional coordination — is described in the abstract in NSF's solicitation. GVSU's SURGE program is the one piece of concrete, already-operating evidence in this radar pass that a version of it works: a $6,000-stipend, Computing+X-focused summer research program that ran June 8 through August 14, 2026, giving undergraduates real course credit for interdisciplinary computing research. It's small next to a $100M federal program, but it's a working model, not a pitch deck — exactly the kind of thing a hub proposal would want to point to as evidence its region can actually execute workforce development, not just promise it.

![A student in a lab coat proudly holds a paycheck stub labeled six thousand dollars next to a whiteboard covered in Computing plus X equations](/assets/meme/hundred-million-compute-map-04.jpg)

## What Appears Around a Hub Before the Awards Land

Even before any state wins an award, three kinds of near-term opportunity already exist around the ecosystems above, and they don't require waiting for November: paid undergraduate research pipelines modeled on SURGE are a concrete thing a computing student can look for right now at any university trying to build a competitive bid; startup formation surfaces exist anywhere a philanthropy-funded institute (like Van Andel) is already co-funding applied AI research with a university, since that's the exact funding structure that produced UC Santa Cruz's Open Culture Science spinout in a different domain; and workforce/faculty-training roles are likely to open at any institution actually assembling a multi-sector consortium bid before November 4, since that coordination work itself is a real, fundable job under this program's own structure — not a volunteer committee.

## Methodology

This piece draws on NSF's own solicitation and program announcement pages for the State and Regional AI Infrastructure Hubs program, GVSU College of Computing's own AIRII and SURGE program pages, and previously-sourced federal award pages for UT Knoxville and N.C. A&T (see the companion piece on AI entering university labs for those citations in full). What's missing: no confirmed list of which states or institutions are actually assembling proposals for the November 4, 2026 deadline (that information isn't public pre-submission); no consortium partner list for any of the five ecosystems mapped above specific to this NSF program; and no comparable multi-state consortium evidence for UT Knoxville or N.C. A&T beyond their existing federal research grants.

![A cartoon calendar hangs on a wall with November 4 circled in red marker while five tiny university mascots scramble in the background assembling a proposal binder](/assets/meme/hundred-million-compute-map-05.jpg)

## Moral of the Story

**If you're a student:** don't wait for your university to win a hub award to go build the relevant experience. GVSU's SURGE program is proof that a paid, interdisciplinary Computing+X research pipeline is a real, fundable thing right now — look for the equivalent at your own school, or ask your department if one's being planned.

**If you're a PI or administrator building a bid:** the fine print matters more than the headline number. NSF is funding coordination and workforce development, not your compute budget — if your pitch leads with "we have a big supercomputer" instead of "we already have a university-philanthropy-industry consortium that works," you're answering the wrong question.

![A frustrated grant-writer archetype crosses out a giant sentence reading We Have The Biggest Supercomputer and rewrites it as We Already Work Together, with a lightbulb popping overhead](/assets/meme/hundred-million-compute-map-06.jpg)

**If you're a founder or investor:** watch the philanthropy-university pairings specifically, not just the R1 research powerhouses — AIRII's Van Andel partnership and UCSC's Genomics Institute-to-Open-Culture-Science pipeline are both examples of exactly the funding structure that produces spinouts, and neither is a household-name research university.

**If you're a policymaker:** the November 4, 2026 deadline is close. If your state doesn't already have a university-philanthropy-industry coalition talking to each other, that conversation needs to start now, not after a competing state's proposal is already drafted.

## Related Research
