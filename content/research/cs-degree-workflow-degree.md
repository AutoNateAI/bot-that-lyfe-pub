# Is the New CS Degree a Workflow Degree?

## Short Answer

Partly, and only at a small, named set of programs. GitHub's own product — the thing employers actually use to ship code — now has a governance layer built explicitly around orchestrating, evaluating, and securing AI agents: assigning agents to issues, comparing outputs across providers, and an enterprise "control plane" for which agents and models are allowed to touch a repo. That is a real, current, named job description hiding inside a product feature list. On the teaching side, exactly two Stanford courses (CS224V, CS329Z) and one HBCU degree track (N.C. A&T's B.S. in Artificial Intelligence) explicitly name agentic-AI primitives — tool use, agent loops, evaluation, orchestration — in their own public course descriptions. What we don't have, and won't pretend to have, is a reliable count of how many other CS programs are teaching this same material under a different name, or a solid labor-market dataset proving how many jobs actually require it today. That second gap is real enough that we're treating "which curricula are still teaching around it" as an open question, not a finding — see Methodology.

## Why the Question Changed Shape in 2026

A year ago, "agentic AI" in a syllabus would have meant a research seminar. That's no longer true because the employer side moved first. GitHub introduced Agent HQ at GitHub Universe on October 28, 2025 — a genuine product shift, not a demo — giving developers a "fleet of specialized agents" from multiple providers (Anthropic, OpenAI, Google, Cognition, xAI) that can be assigned to issues, compared against each other, and merged through normal pull-request review. By February 2026, GitHub had pushed agentic workflows directly into GitHub Actions, in public preview, letting teams automate issue triage, PR review, and CI-failure analysis with agents running natively in their existing repo. None of that is optional or experimental anymore inside a GitHub-based engineering org — and it comes bundled with an enterprise "control plane" for security policies, audit logging, and deciding which agents and models are even allowed to run. Orchestrate, evaluate, and secure is no longer an abstract phrase from a job posting; it's literally what the admin panel is for.

![A cartoon IT admin sits at a control panel with rows of glowing toggle switches labeled with different AI agent names, nervously deciding which ones get a badge](/assets/meme/cs-degree-workflow-degree-01.jpg)

## How This Connects

```graph
{
  "title": "How This Connects",
  "nodes": [
    { "id": "agenthq", "label": "GitHub Agent HQ\n(launched Oct 28, 2025)", "rank": 0, "detail": "Multi-provider agent fleet (Anthropic, OpenAI, Google, Cognition, xAI), issue assignment, PR-based review, and an enterprise control plane for security policy, audit logging, and which agents/models are allowed." },
    { "id": "actions", "label": "Agentic Workflows in\nGitHub Actions (Feb 2026)", "rank": 0, "detail": "Public preview: agents run natively inside CI/CD for issue triage, PR review, and failure analysis, written in plain Markdown instead of YAML." },
    { "id": "primitives", "label": "What the job now requires:\ntool use, evaluation, guardrails", "rank": 1, "evidence": "verified" },
    { "id": "cs329z", "label": "Stanford CS329Z:\nEngineering AI Agents", "rank": 2, "detail": "Tool use, agent loops, compound AI systems, DSPy, evaluation, design tradeoffs — students build agent components from scratch, Fall 2026." },
    { "id": "cs224v", "label": "Stanford CS224V:\nAgentic AI", "rank": 2, "detail": "RAG, hybrid knowledge reasoning, scientific knowledge curation, formal methods, Fall 2026." },
    { "id": "ncat", "label": "N.C. A&T B.S. AI:\nnames \"Agentic AI\" directly", "rank": 2, "detail": "Undergraduate degree track explicitly listing agentic AI alongside ML, deep learning, robotics, computer vision, and generative AI/LLMs as core topics." },
    { "id": "mst", "label": "Missouri S&T: industry-sponsored\nTeam Innovation Projects", "rank": 2, "detail": "A different model entirely — not a syllabus topic, but real sponsor problems assigned to student teams through the Kummer Center, learn-by-doing rather than learn-then-do." },
    { "id": "unknown", "label": "Everyone else:\nunconfirmed", "rank": 3, "detail": "No dataset exists yet showing how many other CS programs teach this content under a different course name — a real gap, not a finding." },
    { "id": "graduate", "label": "\"Workflow-ready\"\ngraduate", "rank": 4, "output": true }
  ],
  "edges": [
    { "from": "agenthq", "to": "primitives", "evidence": "verified", "label": "GitHub's own blog: assign/compare agents, review PRs, control-plane governance" },
    { "from": "actions", "to": "primitives", "evidence": "verified", "label": "GitHub Changelog, Feb 13, 2026: agentic workflows in Actions, public preview" },
    { "from": "primitives", "to": "cs329z", "evidence": "verified", "label": "CS329Z's own syllabus names tool use, agent loops, and evaluation directly" },
    { "from": "primitives", "to": "cs224v", "evidence": "estimated", "label": "RAG and hybrid reasoning are adjacent primitives, not the orchestration/governance layer specifically" },
    { "from": "primitives", "to": "ncat", "evidence": "verified", "label": "N.C. A&T's own program page names Agentic AI as a degree topic" },
    { "from": "primitives", "to": "mst", "evidence": "estimated", "label": "Sponsor-project exposure is a plausible but unconfirmed path to the same skills" },
    { "from": "cs329z", "to": "graduate", "evidence": "hypothesis", "label": "No placement data yet confirms CS329Z graduates land agent-orchestration roles specifically" },
    { "from": "unknown", "to": "graduate", "evidence": "hypothesis", "label": "This is the actual open question this piece can't yet close" }
  ],
  "sourceLabel": "'Verified' edges trace to GitHub's own blog/changelog or a university's own program page. The 'unknown' node and its edge are the honest limit of this research pass — see Methodology."
}
```

## The Skills Map Against the Syllabus — Where It Actually Lines Up

Line up GitHub's own description of what Agent HQ requires from a developer against what CS329Z's public syllabus says it teaches, and the overlap is almost exact. GitHub wants someone who can assign the right agent to the right task, compare outputs across providers, review agent-authored pull requests, and set policy on which agents are even allowed to run. CS329Z's syllabus: tool use, agent loops, compound AI systems, evaluation, and "design tradeoffs" — the class literally has students build the components, not just call an API. That's not a coincidence; it's the same skill under two names. CS224V is adjacent but not identical — RAG, hybrid knowledge reasoning, and scientific knowledge curation are closer to "building a smart research assistant" than "governing a fleet of coding agents in production." N.C. A&T's B.S. in Artificial Intelligence names "Agentic AI" directly as a topic inside a full undergraduate degree, not a single seminar — a meaningfully different bet: breadth across four years versus depth in one quarter.

Missouri S&T is the interesting outlier. Its Kummer Center runs "Team Innovation Projects" — real, industry-sponsored problems assigned to student teams, not a course unit on agent architecture. If the workflow-orchestration skill set can also be picked up by doing rather than being taught, that's a second legitimate path this piece can point to — and it's worth naming as a real alternative, not dismissing because it doesn't show up in a syllabus.

![A student stands between two doors, one labeled Take The Seminar and one labeled Join The Sponsor Project, both leading to the same glowing trophy labeled Can Actually Run An Agent](/assets/meme/cs-degree-workflow-degree-02.jpg)

## The Numbers So Far

```chart
{
  "type": "bar",
  "title": "Named technical primitives on each program's own public page",
  "labels": ["CS329Z (single course)", "CS224V (single course)", "N.C. A&T B.S. AI (full degree)"],
  "series": [
    { "name": "Primitives named", "data": [6, 4, 9], "color": "#c9a227" }
  ],
  "sourceLabel": "Counted directly from each program's own public course/degree description (Stanford CS329Z: tool use, agent loops, compound AI systems, DSPy, evaluation, design tradeoffs; CS224V: RAG, hybrid knowledge reasoning, scientific knowledge curation, formal methods; N.C. A&T B.S. AI: ML, deep learning, programming, robotics, decision making, computer vision, generative AI, LLMs, agentic AI). Not apples-to-apples — one is a single quarter-long seminar, one is a full four-year degree — shown together only to size what each page actually commits to teaching, not to rank the programs."
}
```

## Where This Is Happening

```map
{
  "title": "The programs and the platform, mapped",
  "center": [38, -95],
  "zoom": 4,
  "markers": [
    { "lat": 37.4275, "lng": -122.1697, "label": "Stanford University — CS224V (Agentic AI) and CS329Z (Engineering AI Agents), Fall 2026" },
    { "lat": 36.0726, "lng": -79.7920, "label": "North Carolina A&T State University (Greensboro, NC) — B.S. Artificial Intelligence, names Agentic AI directly" },
    { "lat": 37.9515, "lng": -91.7715, "label": "Missouri University of Science and Technology (Rolla, MO) — Kummer Center Team Innovation Projects, industry-sponsored" },
    { "lat": 37.7749, "lng": -122.4194, "label": "San Francisco, CA — GitHub Universe 2026 (Oct 28-29), where Agent HQ's governance layer keeps expanding" }
  ],
  "sourceLabel": "Main-campus/event-city coordinates — not the address of a specific building or venue."
}
```

![A cartoon United States map with four glowing pins connected by dotted lines forming a rough triangle, a tiny graduation cap icon floating in the middle](/assets/meme/cs-degree-workflow-degree-03.jpg)

## Ground Truth: The Control Plane Is a Real Screen, Not a Concept

Every claim in the "why now" section above is checkable against a real product, not a press quote. GitHub's own blog post on Agent HQ describes an actual admin screen where an enterprise sets "security policies, audit logging, and manage access all in one place" and decides "which agents are allowed" and "access to models" — that's the literal, current, shipping version of "secure AI agents" from the dossier's own framing of this question. It's not a hypothetical future job description. Someone, right now, at any company running GitHub Enterprise with Agent HQ turned on, is the person who configures that screen.

## Methodology

This piece draws on GitHub's own blog and changelog posts for Agent HQ and Agentic Workflows, Stanford's own public course pages for CS224V and CS329Z, N.C. A&T's own undergraduate program page, and Missouri S&T's own Kummer Center research-programs page (see the companion pieces on AI entering university labs and the $100M compute map for the underlying university-funding citations reused here). What's explicitly missing, and what keeps this piece's back half honestly hedged rather than confident: we do not have a dataset of CS program syllabi broad enough to say which schools are "still teaching around" this material — that would require pulling and coding hundreds of course catalogs, which this pass didn't do. We also don't have a verified, primary-source job-posting dataset (BLS or a specific job board's own data export) confirming the labor-market size of "agent orchestration" roles; the numbers circulating in secondhand coverage weren't independently confirmed against primary data this pass, so we're leaving them out rather than repeating an unverified figure. That's a real gap for a future research pass to close, not a finding we're willing to round up to.

![A researcher stands in front of a giant filing cabinet labeled Every CS Syllabus In America, holding a single folder, visibly overwhelmed](/assets/meme/cs-degree-workflow-degree-04.jpg)

## Moral of the Story

**If you're a student:** read CS329Z's public syllabus even if you don't go to Stanford — it's public, and the skill it's grading (build a tool-using agent, evaluate it, understand the cost/design tradeoffs) is the same skill GitHub's control plane assumes someone on the other end of it already has. Pair that with a real repo running Agent HQ or GitHub Actions' agentic workflows and you have a portfolio project that maps directly to a real admin screen, not a toy demo.

**If you're a professor or curriculum designer:** audit your own syllabus against GitHub's actual product surface, not against last year's assumption of what "AI in software engineering" means — assigning work to an agent, comparing agent output, and setting governance policy are now three separate, nameable skills, and a course that only covers "prompting" is teaching last year's version of this job.

![A professor stands at a chalkboard erasing the word PROMPTING and writing ORCHESTRATION, EVALUATION, GOVERNANCE in its place](/assets/meme/cs-degree-workflow-degree-05.jpg)

**If you're hiring:** don't assume a "used Copilot in class" line on a resume means someone can run GitHub's actual control plane. Ask directly whether they've configured agent permissions, compared multiple agents on the same task, or reviewed an agent-authored PR — three concrete, checkable things, not a vibe.

**If you're a founder or program builder:** Missouri S&T's Team Innovation Projects model is worth copying even if you're not a university — sponsoring a real, bounded problem for a student team to solve with agent tooling is a faster, cheaper way to find this skill set than waiting for a curriculum committee to catch up.

## Related Research
