// Bot That Lyfe is a university-centered technical opportunity intelligence
// network — funding, research, people, technology, courses, companies,
// jobs, GitHub/open-source, and events across a rotating network of U.S.
// universities at the intersection of computer science, agentic AI, and
// engineering. The daily radar (.claude/skills/daily-dossier) rotates
// through 7 universities/day, writes findings into the Bot That Lyfe
// Airtable base (appFfm0RkSVqPXQxS), and publishes 3 question-driven
// articles/day into content/research/.
//
// SECOND PASS (nav simplification, inherited from the Bot That Lyfe lineage
// this codebase forked from): Regions, Organizations, Systems, and The Lab
// are no longer primary-nav destinations — they're filters inside
// Research & Case Studies (/research-and-case-studies), which is where
// visitors are meant to browse and discover.
//
// FOURTH PASS (SEO path unification): every region/organization/system/
// investigation detail page lives at /research-and-case-studies/:slug
// instead of scattered under /regions/:slug, /organizations/:slug, etc. —
// see renderArticles and the shared card helpers in src/pages.mjs.
export const navItems = [
  { label: "Intelligence", href: "/", keys: ["home"] },
  { label: "Research & Case Studies", href: "/research-and-case-studies", keys: ["articles", "investigations", "regions", "organizations", "systems"] },
  { label: "Free Courses", href: "/courses", keys: ["tutorials"] },
  { label: "Work With Us", href: "/work-with-us", keys: ["work-with-us"] },
  { label: "About", href: "/about", keys: ["about"] },
];

// Tutorials, Consulting, Events, Community, For Organizations, and The Lab
// (the general research-methodology layer) are still real, working pages —
// reachable from the footer and in-page CTAs, not primary nav.

// ---------------------------------------------------------------------------
// THE LAB — current investigation, experiments, projects, open-source
// signals, research sources, and events. Emptied on fork from Bot That Lyfe's
// codebase (that content was sourced from Bot That Lyfe's own private
// "California Technical Network Radar" Airtable base, unrelated to Bot That
// Lyfe) — ready for the Bot That Lyfe daily-dossier skill to populate from
// the Universities graph. Never fabricate activity here; only real,
// sourced, verified records belong in these arrays.
// ---------------------------------------------------------------------------
export const currentInvestigation = null;

export const labProjects = [];

// Curated from the GitHub Open Source Radar (Sept 9) + Airtable Sources.
// Growth figures are the radar's own Trending-horizon counters, not lifetime
// totals. Stars/forks as captured on the run date. whatToStudy/whyItMatters/
// action are the radar's own per-repo fields, not paraphrased.
export const openSourceRepos = [];

// Research Paper Radar's "Experiment Queue // candidates only" (page 13) +
// GitHub Open Source Radar's "Experiment and publication concepts" (page 18)
// — explicitly not Airtable Experiments records until Nathan starts one.
export const labExperiments = [];

// Evidence-ladder reading list — real papers and mindfulness sources pulled
// from the Sept 9 Sources table (Airtable). evidenceClass keys map to
// data-evidence values in public/styles.css (.evidence-badge). `project`
// links a source to a Project detail page's "Related Sources" list.
export const evidenceLabels = {
  "peer-reviewed": "Peer Reviewed",
  "preprint": "Preprint",
  "technical": "Technical Source",
  "institute-claim": "Institute Claim",
  "practitioner": "Practitioner",
  "cultural": "Cultural / Spiritual",
};

export const labSources = [];

// Real events from the Airtable Events table (Sept 9 Events & Build +
// Mindfulness Tech radar runs) — every url/date/location below is a verified
// field value, not a guess. `status` mirrors Airtable's own Status field
// (Discovered / Considering) rather than claiming registration/attendance.
// `actionPlan`/`costNotes` are Airtable's own "Action / Networking Plan" and
// "Cost / Prize Notes" field values.
export const labEvents = [];

// ---------------------------------------------------------------------------
// AGRICULTURAL ECONOMIC SYSTEMS INTELLIGENCE — Regions, Organizations,
// Systems, and Investigations (Open Questions). This is the lab's primary
// content model: agriculture as the anchor for regional
// economic-development research. All four types are surfaced as filters on
// the Research & Case Studies hub (/research-and-case-studies, see renderArticles in
// src/pages.mjs) rather than as separate primary-nav destinations — see
// docs/marketplace/agricultural-intelligence-lab.md for the operating
// contract this narrows down from.
//
// Each array holds one fully-researched flagship entry (grounded in real,
// cited public sources — Farm Credit Southeast Missouri's own annual
// reports, the Farm Credit Administration public directory, and USDA NASS
// acreage reports) plus one honest "Coming Soon" placeholder proving the
// list/detail pattern before real research fills it in. No daily
// agricultural radar has landed in this repo yet — Radar_Reports/ still
// only has the Sept 9 general-lab desks — so nothing here claims a "live"
// automated pipeline. Every fact carries its source; every open question
// stays genuinely open (status: "open", not a fabricated finding).
// ---------------------------------------------------------------------------

export const regionStatusLabels = {};

// Emptied 2026-09-17 — the site had never published a real region profile
// (both entries were "Coming Soon" stubs); with 3 real investigation
// articles now live, a stub category page is worse than no category page.
// investigations[] no longer sets a `region` slug pointing here — repopulate
// this array (and re-link investigations to a real slug) once an actual
// region profile gets written.
export const regions = [];

export const organizationTypeLabels = {};

export const organizationStatusLabels = {};

// Emptied 2026-09-17 — same reason as regions[] above: both entries were
// "Coming Soon" stubs with no real profile written. Repopulate once a real
// organization profile exists.
export const organizations = [];

export const systemCategoryLabels = {};

export const systemStatusLabels = {};

// The Four Pillars applied consistently across every system deep dive —
// Business Analysis, Data Intelligence, Systems Mapping, AI & Automation.
export const pillarLabels = [];

// Emptied 2026-09-17 — same reason as regions[]/organizations[] above: both
// entries were "Coming Soon" stubs with no real deep dive written.
// Repopulate once a real system deep dive exists.
export const systems = [];

export const investigationStatusLabels = {
  open: "Open Question",
  investigating: "Investigating",
  published: "Answered",
};

export const investigations = [
  {
    slug: "ai-agents-lab-partner",
    icon: "biotech",
    status: "published",
    name: "Universities Just Handed AI Agents the Keys to the Lab. Nobody's Worked Out What It Costs.",
    question:
      "Are U.S. universities quietly turning software engineering students into scientific operators as agentic AI moves from coding assistants into autonomous research workflows?",
    tagline:
      "Four federally-backed labs and one Stanford curriculum all point the same direction — but Stanford's own cost research says the economics of running an AI 'co-scientist' aren't solved yet.",
    thumbnail: "/assets/og/ai-agents-lab-partner.jpg",
    region: "",
    publishedDate: "2026-09-21",
    commodity: "Agentic AI · University Research",
    evidence: [
      {
        label: "UT Knoxville: $9M + $20M NSF awards, July 2026",
        note: "One grant for national AI-driven scientific-data infrastructure, one for the ATHENA autonomous-materials-discovery hub.",
        url: "https://research.utk.edu/2026/07/29/taufer-leads-team-awarded-9m-by-nsf-to-enable-us-transition-to-ai-driven-discovery/",
      },
      {
        label: "Mizzou-led team selected for DOE's inaugural Genesis Mission",
        note: "A 6-institution AI-driven synthetic-cell-design project, led by a Mizzou mechanical/aerospace engineering professor.",
        url: "https://engineering.missouri.edu/2026/mizzou-led-team-selected-for-u-s-department-of-energys-inaugural-genesis-mission/",
      },
      {
        label: "Stanford Biomni: 150 tools, 105 packages, 59 databases, 10,000+ labs",
        note: "Published in Science, July 2026 — the most widely used AI co-scientist system in biomedicine per Stanford's own reporting.",
        url: "https://news.stanford.edu/stories/2026/07/biomni-ai-powered-biomedical-co-scientist",
      },
      {
        label: "Stanford Digital Economy Lab: agentic tasks burn ~1000x more tokens than chat",
        note: "May 2026 study of 8 frontier models on SWE-bench Verified — the tension this whole piece turns on.",
        url: "https://digitaleconomy.stanford.edu/publication/how-do-ai-agents-spend-your-money-analyzing-and-predicting-token-consumption-in-agentic-coding-tasks/",
      },
    ],
    stakeholders: [
      "University PIs running federally funded AI-for-science labs",
      "CS/AI grad students choosing a research specialization",
      "Hiring managers building AI-for-science or agent-evaluation teams",
      "University tech-transfer offices watching for the next spinout",
    ],
    hypothesis:
      "Our best guess: the technical pattern (tool registries, provenance, evaluation) is genuinely converging across biomedicine, materials science, synthetic biology, and genomics labs — but the labor-market side (a real job title, a real salary band, a real degree track called anything like 'scientific operator') hasn't caught up yet, and the cost side (what an AI-directed experiment actually costs in tokens) is an open, unsolved question even inside the lab that's best positioned to answer it.",
    graphLayers: {
      physical:
        "Federally-funded lab infrastructure at UT Knoxville (the ATHENA autonomous-materials hub) and DOE's multi-institution Genesis Mission compute/experimental stack led out of Missouri.",
      capital:
        "$29M in 2026 NSF awards to UT Knoxville alone, a DOE Genesis Mission slot for a Mizzou-led team, and a $450K UCSC seed fund — three different funding tiers, all pointed the same direction.",
      business:
        "PIs and grad researchers running closed-loop, AI-directed experiment cycles instead of hand-running every step — Biomni alone is already active in more than 10,000 labs.",
      information:
        "The technical pattern repeats everywhere it shows up: a registry of specialized tools, provenance tracking, and evaluation — exactly what Stanford's CS224V and CS329Z now teach as for-credit coursework.",
    },
    dataNeeds: [
      "Confirmed dollar figure for Mizzou's DOE Genesis Mission award",
      "CS224V/CS329Z enrollment and post-graduation placement data",
      "A lab-specific (not software-engineering-benchmark) replication of the Digital Economy Lab's token-cost study",
      "Direct interviews with PIs at UTK, Mizzou, and UCSC on how they're actually staffing these roles",
    ],
    artifacts: [
      "A tracked roster of every federally-funded 'AI-for-science' lab opening in 2026-27, cross-referenced against which universities teach agent-engineering coursework",
      "A cost-per-experiment model combining the Digital Economy Lab's token-cost findings with a real lab's grant budget",
    ],
    findings:
      "Four independent funders (NSF twice, DOE, and a university's own seed fund) backed AI-agent-driven lab infrastructure within roughly six months of each other in 2026, and the underlying technical pattern — tool registries, provenance, evaluation — is the same at every site and is now taught as Stanford coursework. But no university has created a formal 'scientific operator' job title or degree track, and Stanford's own Digital Economy Lab research shows the token-cost economics of this kind of agentic work are still highly unpredictable, undercutting how confidently any of these labs can currently budget for it.",
    sources: [
      { label: "UT Knoxville — $9M NSF AI-Driven Scientific Data Infrastructure Project", url: "https://research.utk.edu/2026/07/29/taufer-leads-team-awarded-9m-by-nsf-to-enable-us-transition-to-ai-driven-discovery/" },
      { label: "UT Knoxville — $20M NSF ATHENA Autonomous Materials Discovery Hub", url: "https://research.utk.edu/2026/07/23/ut-secures-20m-nsf-grant-to-pioneer-breakthroughs-in-automated-materials-discovery/" },
      { label: "Mizzou-led team selected for DOE's inaugural Genesis Mission", url: "https://engineering.missouri.edu/2026/mizzou-led-team-selected-for-u-s-department-of-energys-inaugural-genesis-mission/" },
      { label: "Mizzou launches AERI (AI Education, Research and Infrastructure Center)", url: "https://engineering.missouri.edu/2026/mizzou-launches-new-center-to-advance-study-and-application-of-ai/" },
      { label: "Missouri S&T — Kummer Research Ignition Grant Initiative (Center for AI and Autonomous Systems)", url: "https://research.mst.edu/funding/internalfundingopportunities/kummerresearchignitiongrantinitiativeigi/" },
      { label: "UC Santa Cruz Genomics Institute — 2026 seed funding", url: "https://news.ucsc.edu/2026/07/genomics-institute-seed-funding-2026/" },
      { label: "Open Culture Science (UCSC Genomics Institute spinout)", url: "https://news.ucsc.edu/open-culture-science/" },
      { label: "Stanford Report — Meet Biomni, an AI-powered biomedical co-scientist", url: "https://news.stanford.edu/stories/2026/07/biomni-ai-powered-biomedical-co-scientist" },
      { label: "Biomni GitHub repository", url: "https://github.com/snap-stanford/Biomni" },
      { label: "Stanford CS224V — Agentic AI, Fall 2026", url: "https://web.stanford.edu/class/cs224v/" },
      { label: "Stanford CS329Z — Engineering AI Agents, Fall 2026", url: "https://cs329z.stanford.edu/" },
      { label: "Stanford Digital Economy Lab — How Do AI Agents Spend Your Money?", url: "https://digitaleconomy.stanford.edu/publication/how-do-ai-agents-spend-your-money-analyzing-and-predicting-token-consumption-in-agentic-coding-tasks/" },
    ],
    sourcePath: "../content/research/ai-agents-lab-partner.md",
  },
  {
    slug: "hundred-million-compute-map",
    icon: "hub",
    status: "published",
    name: "NSF's $100M AI Hub Program Won't Fund the Computers. It'll Fund Whoever Can Already Work Together.",
    question:
      "Which university ecosystems are best positioned to capture the NSF's new $100 million State and Regional AI Infrastructure Hubs program — and what student, startup and workforce opportunities appear around those compute hubs before the awards are made?",
    tagline:
      "The application deadline is November 4, 2026, and the fine print rewards a region's coordination muscle over its supercomputer — which changes who's actually favored to win.",
    thumbnail: "/assets/og/hundred-million-compute-map.jpg",
    region: "",
    publishedDate: "2026-09-21",
    commodity: "AI Infrastructure · Federal Funding",
    evidence: [
      {
        label: "NSF State and Regional AI Infrastructure Hubs solicitation (NSF 26-513)",
        note: "Up to 10 awards, $4M-$12M each over 5 years, ~$100M total — NSF funds coordination/workforce, the consortium provides the compute via cost-share.",
        url: "https://www.nsf.gov/funding/opportunities/us-national-science-foundation-state-regional-artificial/nsf26-513/solicitation",
      },
      {
        label: "GVSU + Van Andel Institute: AIRII",
        note: "A university-philanthropy AI research consortium already operating on the exact model this NSF program wants, independent of it.",
        url: "https://www.gvsu.edu/computing/airii-gvsu-and-van-andel-institute-293",
      },
      {
        label: "GVSU College of Computing SURGE program",
        note: "A working, paid, Computing+X undergraduate research pipeline — proof-of-execution for the workforce-development piece NSF is funding.",
        url: "https://www.gvsu.edu/computing/college-of-computing-surge-255",
      },
    ],
    stakeholders: [
      "University research-development offices assembling a hub proposal",
      "State science/technology policy offices",
      "Regional philanthropies considering a university AI partnership",
      "Founders and investors watching for the next university-adjacent spinout",
    ],
    hypothesis:
      "Our best guess: because NSF structured this program around cost-share coordination rather than direct compute funding, regions that have already proven they can assemble a university-philanthropy-industry consortium (like GVSU/Van Andel) are better positioned to win than regions with larger raw federal research dollars but no standing multi-sector coalition (like UT Knoxville) — but this is untested until real proposals are scored, and we have no visibility into who is actually applying.",
    graphLayers: {
      physical:
        "No hub compute has been built yet — every existing node mapped here (GVSU/Van Andel, Missouri's two AI centers, UT Knoxville/ORNL, N.C. A&T) is pre-existing infrastructure, not hub-funded infrastructure.",
      capital:
        "Up to $100M across as many as 10 awards ($4M-$12M each over 5 years), structured as a cost-share — NSF's money funds coordination and workforce, not hardware.",
      business:
        "The real competitive skill this program tests is getting a university, a state or local government, a philanthropy, and industry partners to co-commit to a 5-year plan together — not simply having the most research grants.",
      information:
        "GVSU's SURGE program (paid Computing+X undergraduate research) is the clearest working example in this pass of the exact workforce-development deliverable this NSF program is funding more of.",
    },
    dataNeeds: [
      "A confirmed list of which states/regions are actually submitting proposals by the Nov. 4, 2026 deadline",
      "Consortium partner lists for any of the five ecosystems mapped here, specific to this NSF program",
      "Whether UT Knoxville or N.C. A&T are assembling a multi-sector regional bid beyond their existing federal research grants",
      "The actual award announcements, once NSF makes them (expected after the Nov. 4, 2026 deadline)",
    ],
    artifacts: [
      "A tracked roster of every publicly-announced NSF hub proposal or consortium-formation announcement between now and November 2026",
      "A side-by-side comparison of each winning consortium's cost-share structure once awards are announced",
    ],
    findings:
      "NSF's $100M State and Regional AI Infrastructure Hubs program (up to 10 awards, $4M-$12M each, proposals due Nov. 4, 2026) funds consortium coordination and workforce development, not compute itself — the actual hardware and operating cost is a cost-share obligation on the consortium. That structural detail means the strongest-positioned regions in this radar pass aren't necessarily the ones with the largest existing federal research grants (UT Knoxville's $29M in 2026 NSF awards), but the ones that have already proven they can build a multi-sector coalition, like Grand Valley State's philanthropy-backed AIRII partnership with the Van Andel Institute and its already-running SURGE workforce pipeline. No awards have been made as of this writing.",
    sources: [
      { label: "NSF State and Regional AI Infrastructure Hubs — program announcement", url: "https://www.nsf.gov/news/new-nsf-state-regional-ai-infrastructure-hubs-will-power-ai" },
      { label: "NSF 26-513 — full solicitation", url: "https://www.nsf.gov/funding/opportunities/us-national-science-foundation-state-regional-artificial/nsf26-513/solicitation" },
      { label: "GVSU College of Computing — AIRII (GVSU and Van Andel Institute)", url: "https://www.gvsu.edu/computing/airii-gvsu-and-van-andel-institute-293" },
      { label: "GVSU College of Computing — SURGE program", url: "https://www.gvsu.edu/computing/college-of-computing-surge-255" },
      { label: "UT Knoxville — $9M NSF AI-Driven Scientific Data Infrastructure Project", url: "https://research.utk.edu/2026/07/29/taufer-leads-team-awarded-9m-by-nsf-to-enable-us-transition-to-ai-driven-discovery/" },
      { label: "UT Knoxville — $20M NSF ATHENA Autonomous Materials Discovery Hub", url: "https://research.utk.edu/2026/07/23/ut-secures-20m-nsf-grant-to-pioneer-breakthroughs-in-automated-materials-discovery/" },
      { label: "North Carolina A&T — $10M Accelerate-DAQ award", url: "https://www.ncat.edu/news/2026/09/10-million-dow-grant.php" },
      { label: "Mizzou launches AERI (AI Education, Research and Infrastructure Center)", url: "https://engineering.missouri.edu/2026/mizzou-launches-new-center-to-advance-study-and-application-of-ai/" },
      { label: "Missouri S&T — Kummer Research Ignition Grant Initiative", url: "https://research.mst.edu/funding/internalfundingopportunities/kummerresearchignitiongrantinitiativeigi/" },
    ],
    sourcePath: "../content/research/hundred-million-compute-map.md",
  },
  {
    slug: "cs-degree-workflow-degree",
    icon: "school",
    status: "published",
    name: "GitHub Just Made Agent Orchestration a Normal Part of Shipping Code. Almost No CS Program Teaches It Yet.",
    question:
      "If employers increasingly hire engineers to orchestrate, evaluate and secure AI agents, which university curricula are already teaching the workflow skills that map to the emerging job — and which are still teaching around it?",
    tagline:
      "GitHub's own Agent HQ control plane is the real, shipping version of 'orchestrate, evaluate and secure' — and only a small, named set of programs teach it directly. We don't yet know how many don't.",
    thumbnail: "/assets/og/cs-degree-workflow-degree.jpg",
    region: "",
    publishedDate: "2026-09-21",
    commodity: "Agentic AI · Curriculum",
    evidence: [
      {
        label: "GitHub Agent HQ — launched Oct 28, 2025",
        note: "A real admin control plane for assigning, comparing, and governing multi-provider coding agents inside a repo.",
        url: "https://github.blog/news-insights/company-news/welcome-home-agents/",
      },
      {
        label: "GitHub Agentic Workflows in GitHub Actions — public preview, Feb 2026",
        note: "Agents now run natively in CI/CD for issue triage, PR review, and failure analysis.",
        url: "https://github.blog/changelog/2026-02-13-github-agentic-workflows-are-now-in-technical-preview/",
      },
      {
        label: "Stanford CS329Z — Engineering AI Agents",
        note: "Tool use, agent loops, compound AI systems, DSPy, evaluation — students build agent components from scratch.",
        url: "https://cs329z.stanford.edu/",
      },
      {
        label: "N.C. A&T B.S. Artificial Intelligence",
        note: "Names 'Agentic AI' directly as a core undergraduate degree topic.",
        url: "https://www.ncat.edu/coe/departments/cs/undergrad-programs/bs-ai-en.php",
      },
    ],
    stakeholders: [
      "CS students choosing electives or a specialization",
      "Curriculum designers and department chairs",
      "Engineering hiring managers writing job descriptions",
      "Program/workshop builders (bootcamps, corporate training)",
    ],
    hypothesis:
      "Our best guess: the specific, nameable skills GitHub's Agent HQ now requires (assigning/comparing agents, reviewing agent-authored PRs, setting agent/model governance policy) are currently taught explicitly at only a small, named set of programs — but we don't have the syllabus dataset needed to say confidently which other programs are or aren't covering the same material under a different name, so the 'who's teaching around it' half of this question stays genuinely open.",
    graphLayers: {
      physical:
        "No physical infrastructure claim here — this is a software-platform and curriculum question, not a lab-buildout one.",
      capital:
        "No new funding event drives this piece; the 'why now' is a product launch (GitHub Agent HQ, Oct 2025) and its Feb 2026 expansion into GitHub Actions, not a grant.",
      business:
        "The real job GitHub's own control plane implies: someone who assigns agents to tasks, compares their output, reviews agent-authored pull requests, and sets policy on which agents/models are allowed to run in a company's repos.",
      information:
        "Two Stanford courses and one HBCU degree track name these exact primitives on their own public pages; Missouri S&T offers a different, project-based path to the same skills through industry-sponsored Team Innovation Projects.",
    },
    dataNeeds: [
      "A broad, coded dataset of CS program syllabi to determine how many teach agent-orchestration primitives under a different course name",
      "A primary-source (BLS or specific job-board) dataset on agent-orchestration job-posting volume and salary — not a secondhand blog summary",
      "Placement data for CS224V/CS329Z graduates specifically into agent-orchestration-shaped roles",
      "Confirmation of how many other universities' project-based programs (like Missouri S&T's) function as an alternate path to these skills",
    ],
    artifacts: [
      "A syllabus-to-primitive coding tool that scores any CS program's public course catalog against GitHub Agent HQ's real feature set",
      "A tracked roster of universities that add explicit agent-orchestration/governance coursework over the next several terms",
    ],
    findings:
      "GitHub's own Agent HQ (launched Oct. 28, 2025) and its Feb. 2026 expansion into GitHub Actions turned 'orchestrate, evaluate and secure AI agents' into a real, shipping admin control plane — not a hypothetical job description. On the teaching side, only a small, named set of programs (Stanford's CS224V and CS329Z, N.C. A&T's B.S. in Artificial Intelligence) explicitly name these primitives on their own public pages, and Missouri S&T offers a project-based alternate path through industry-sponsored work. We do not have the broad syllabus or job-posting data needed to say confidently which other programs are or aren't covering this material — that half of the question stays open rather than answered.",
    sources: [
      { label: "GitHub — Introducing Agent HQ: Any agent, any way you work", url: "https://github.blog/news-insights/company-news/welcome-home-agents/" },
      { label: "GitHub Changelog — Agentic Workflows now in technical preview", url: "https://github.blog/changelog/2026-02-13-github-agentic-workflows-are-now-in-technical-preview/" },
      { label: "Stanford CS329Z — Engineering AI Agents, Fall 2026", url: "https://cs329z.stanford.edu/" },
      { label: "Stanford CS224V — Agentic AI, Fall 2026", url: "https://web.stanford.edu/class/cs224v/" },
      { label: "N.C. A&T — B.S. Artificial Intelligence, Engineering & Computing Track", url: "https://www.ncat.edu/coe/departments/cs/undergrad-programs/bs-ai-en.php" },
      { label: "Missouri S&T — Kummer Research Ignition Grant Initiative", url: "https://research.mst.edu/funding/internalfundingopportunities/kummerresearchignitiongrantinitiativeigi/" },
    ],
    sourcePath: "../content/research/cs-degree-workflow-degree.md",
  },
  {
    slug: "who-owns-the-ai-workforce-pipeline",
    icon: "precision_manufacturing",
    status: "published",
    name: "Purdue's $100 Million AI Workforce Program Answers to the Navy. Nobody Else's Does.",
    question:
      "As universities move from standalone AI courses to industry-governed pipelines, compute infrastructure, internships, and federally funded consortia, who is actually shaping the technical workforce: faculty, federal agencies, or the companies sitting on advisory boards?",
    tagline:
      "Three real programs each claim a piece of \"the AI workforce pipeline\" this year — one reports to the Navy, one to the NSF, and one to Amazon. None of them report to the same place.",
    thumbnail: "/assets/og/who-owns-the-ai-workforce-pipeline.jpg",
    region: "",
    publishedDate: "2026-09-22",
    featured: true,
    commodity: "Semiconductor Workforce · Federal Funding",
    evidence: [
      {
        label: "Purdue SCALE surpasses $100M, becomes Purdue's largest federally funded effort",
        note: "35 partner universities, 75+ government/industry partners, 1,175 current students, 339 alumni placed in defense microelectronics jobs, 64% of alumni in defense/defense contracting.",
        url: "https://www.purdue.edu/newsroom/2026/Q2/scale-expands-its-national-impact-becomes-purdues-largest-federally-funded-research-effort/",
      },
      {
        label: "Naval Surface Warfare Center, Crane Division administers the SCALE contract",
        note: "Confirms the federal office managing SCALE's day-to-day funding is a Navy weapons division, not an education agency.",
        url: "https://www.manufacturingdive.com/news/defense-purdue-scale-microelectronics-workforce-program-contract/819553/",
      },
      {
        label: "Purdue-Illinois semiconductor workforce MOU, signed Sept. 18, 2026",
        note: "Purdue's own announcement: the partnership is \"governed in part by a shared industry advisory board\" covering fabs, chip design, verification/testing, and advanced packaging.",
        url: "https://engineering.purdue.edu/Engr/AboutUs/News/Features/2026/2026-0910-purdue-uiuc-semiconductor-workforce-initiative",
      },
      {
        label: "NSF's $35M NAIRR Operations Center, co-led by UT Austin's TACC",
        note: "A 5-year cooperative award building open national AI compute/data access — no defense-clearance gate, no named industry advisory board.",
        url: "https://fedscoop.com/nsf-announces-35-million-stand-up-ai-research-resource-operations-center-nairr/",
      },
    ],
    stakeholders: [
      "Professors and department chairs running SCALE-affiliated microelectronics programs",
      "Employers seeking a seat on a university curriculum advisory board",
      "Students choosing between a defense-microelectronics track and an agentic-AI software track",
      "Workforce-policy staff at DoD, NSF, and state economic-development offices",
    ],
    hypothesis:
      "Our best guess: no single entity currently owns \"the AI workforce pipeline\" because at least three separately governed programs (SCALE under DoD/NSWC Crane, the NAIRR Operations Center under NSF, the Howard AI Network under AWS) are each building a different, non-overlapping slice of it under a different authority — and the Purdue-Illinois shared industry advisory board is the clearest evidence yet of employers gaining a formal governance seat inside at least one of those slices.",
    graphLayers: {
      physical:
        "SCALE's classroom/apprenticeship network across 35 campuses, TACC's compute infrastructure feeding the national NAIRR portal, and Howard's AWS-hosted cloud/bootcamp infrastructure — three physically separate build-outs.",
      capital:
        "More than $100M in Department of War funding (SCALE, through FY2027), $35M in NSF funding (NAIRR Operations Center, 5-year award), and an undisclosed AWS investment in Howard's regional-lead role.",
      business:
        "Day-to-day governance sits with a Navy office (NSWC Crane) for SCALE, an NSF cooperative-agreement structure for NAIRR-OC, and Amazon's own program terms for the Howard AI Network — plus a new named industry advisory board inside the Purdue-Illinois MOU specifically.",
      information:
        "SCALE's industry/government partners maintain a living skills list that partner universities update coursework against; NAIRR-OC's information layer is a national compute/data access portal, not a curriculum feed.",
    },
    dataNeeds: [
      "A public roster of the Purdue-Illinois shared industry advisory board's actual member companies",
      "Confirmation of whether Illinois students gain access to SCALE's federal funding pool specifically, or only shared curriculum and events",
      "Placement or outcome data for the NAIRR Operations Center and the Howard AI Network, both too new to have reported results",
      "A syllabus-level comparison of what SCALE's industry-identified skills list actually adds to coursework each year",
    ],
    artifacts: [
      "A tracked roster of AI/semiconductor workforce programs by funding source and governance model — Workforce Capital Graph",
      "A comparison table of which advisory boards are public, named, and seated vs. informal or undisclosed",
    ],
    findings:
      "Three real, currently operating programs each claim a piece of \"the AI workforce pipeline\" in 2026, and each answers to a different authority: Purdue's SCALE program (>$100M, 35 universities) is funded by the Department of War and administered by the Naval Surface Warfare Center, Crane Division, training almost exclusively for defense-cleared microelectronics jobs (64% of alumni land in defense or defense contracting) — not agentic AI software work, despite the \"AI workforce\" framing. The NSF's $35M NAIRR Operations Center, co-led by UT Austin's TACC, runs on an open-access mandate with no defense gate and no named industry board. Howard University's AI Network runs on Amazon's own commercial terms as one of five AWS-selected regional leads. The clearest evidence of employers gaining actual governance power is the Sept. 18, 2026 Purdue-Illinois MOU, explicitly \"governed in part by a shared industry advisory board\" — but even SCALE's full six-year output (1,750 students supported since 2020) is under 1% of the 127,000-157,000-worker national semiconductor shortfall projected for 2030, meaning no single one of these pipelines is close to sized for the problem it's aimed at.",
    sources: [
      { label: "Purdue — SCALE expands its national impact, becomes Purdue's largest federally funded research effort", url: "https://www.purdue.edu/newsroom/2026/Q2/scale-expands-its-national-impact-becomes-purdues-largest-federally-funded-research-effort/" },
      { label: "Manufacturing Dive — Defense Department increases microelectronics workforce program contract to $100M", url: "https://www.manufacturingdive.com/news/defense-purdue-scale-microelectronics-workforce-program-contract/819553/" },
      { label: "SCALE — About the program (industry/government-informed curriculum)", url: "https://www.scale4me.org/about/" },
      { label: "Purdue College of Engineering — Purdue and University of Illinois team up to strengthen semiconductor workforce", url: "https://engineering.purdue.edu/Engr/AboutUs/News/Features/2026/2026-0910-purdue-uiuc-semiconductor-workforce-initiative" },
      { label: "FedScoop — NSF announces up to $35 million to stand up AI research resource operations center", url: "https://fedscoop.com/nsf-announces-35-million-stand-up-ai-research-resource-operations-center-nairr/" },
      { label: "HPCwire — NAIRR Shifts from Pilot into Operations Mode", url: "https://www.hpcwire.com/2026/09/03/nairr-shifts-from-pilot-into-operations-mode/" },
      { label: "The Dig at Howard University — Howard University Launches Howard AI Network powered by AWS", url: "https://thedig.howard.edu/all-stories/howard-university-launches-howard-ai-network-powered-aws-accelerate-ai-research-infrastructure-and" },
      { label: "SEMI — SEMI Foundation and NSF launch first four Regional Nodes of the National Network for Microelectronics Education", url: "https://www.semi.org/en/semi-press-release/semi-foundation-and-the-us-national-science-foundation-launch-first-four-regional-nodes-of-the-national-network-for-microelectronics-education-nnme" },
    ],
    sourcePath: "../content/research/who-owns-the-ai-workforce-pipeline.md",
  },
  {
    slug: "university-becoming-ai-utility",
    icon: "hub",
    status: "published",
    name: "Florida Turned Its Supercomputer Into Plumbing. 30,800 People Now Just Use It.",
    question:
      "What changes when a university stops treating AI as a course or lab and starts operating it like shared infrastructure — compute, models, data, training, governance, and access for thousands of users?",
    tagline:
      "UF's own case study says the $85M in hardware wasn't the hard part — six years of faculty hiring and executive alignment was. That's the part actually worth copying.",
    thumbnail: "/assets/og/university-becoming-ai-utility.jpg",
    region: "",
    publishedDate: "2026-09-22",
    commodity: "AI Infrastructure · Campus Access",
    evidence: [
      {
        label: "UF AI Year in Review: 30,800+ NaviGator users, 200+ AI courses, $566M in HiPerGator-enabled research",
        note: "UF's own July 2026 report — NaviGator AI gateway offers 70 LLMs; HiPerGator directly enabled $566M in externally funded research in the last academic year.",
        url: "https://news.ufl.edu/2026/07/ai-year-in-review/",
      },
      {
        label: "Warrington Case Series: \"Building an AI University\" (May 2026)",
        note: "UF's own case study: the $85M funding stack was 'the catalyst,' but faculty hiring and executive alignment across all 16 colleges is what the case study credits as the actual driver.",
        url: "https://news.ufl.edu/2026/05/warrington-press-building-ai-university/",
      },
      {
        label: "NSF awards UF Water Institute $1.79M for HiPerGator-built environmental AI forecasting",
        note: "A hydrologist, an ECE professor, a CS professor, and an agronomist as co-PIs — a non-CS team winning a federal grant on shared AI infrastructure they didn't have to build.",
        url: "https://waterinstitute.ufl.edu/water-institute-team-awarded-1-79m-nsf-grant-for-ai-powered-environmental-forecasting/",
      },
    ],
    stakeholders: [
      "Non-CS faculty considering an AI-enabled grant proposal",
      "University administrators weighing a campus-wide AI infrastructure investment",
      "Students outside computer science deciding whether AI coursework applies to their major",
      "Vendors/founders building access-layer tools for university compute",
    ],
    hypothesis:
      "Our best guess: institutions that treat AI as shared infrastructure (broad faculty distribution across colleges, a direct-access gateway layer, executive sponsorship that survives multiple budget cycles) diffuse real capability faster than departments redesigning curricula on their own — but UF's own case study is a self-assessment, not independent evaluation, and we don't yet have a comparable cost/outcome breakdown from a university attempting this without a nine-figure alumni gift.",
    graphLayers: {
      physical:
        "HiPerGator 4's Blackwell SuperPOD compute layer at UF, plus UT Austin's TACC as a national-scale comparison point inside the $35M NSF NAIRR Operations Center.",
      capital:
        "$85M funding stack behind HiPerGator (a $25M NVIDIA co-founder gift, $25M from NVIDIA, $15M from UF, $20M recurring from the state of Florida), against $566M in externally funded research the university attributes to HiPerGator access in one year.",
      business:
        "106 AI-focused faculty hired across all 16 UF colleges (2020-22), not concentrated in engineering/CS — the staffing decision UF's own case study credits over the hardware itself.",
      information:
        "NaviGator AI, UF's direct-access gateway offering 70 LLMs to any student, faculty, or staff member — the layer that turns raw compute into something usable without a grant or a CS collaborator.",
    },
    dataNeeds: [
      "An independent (non-UF-authored) assessment of the Warrington Case Series' causal claims",
      "A course-level breakdown of what 'completed at least one AI course' actually covers for the 71%-of-graduates figure",
      "A comparable cost/outcome breakdown from a university attempting a similar model without a comparable alumni gift",
      "Confirmation of how much of the $566M HiPerGator-enabled research figure is AI research specifically vs. any HiPerGator-supported research broadly",
    ],
    artifacts: [
      "A University AI Infrastructure Scorecard comparing compute access, model gateway breadth, course diffusion, and governance model across institutions",
      "A tracked roster of non-CS-led federal grants built on shared university AI compute",
    ],
    findings:
      "The University of Florida's HiPerGator supercomputer and NaviGator AI gateway (30,800+ users, 200+ AI-designated courses, $566M in externally funded research UF attributes to HiPerGator access in the last academic year alone) is the clearest working example in this radar pass of a university operating AI as shared infrastructure rather than a departmental resource. UF's own case study argues the $85M funding stack that bought the hardware in 2020 was 'the catalyst,' not the cause — what the university credits with making it work is six years of faculty hiring distributed across all 16 colleges and sustained executive sponsorship, evidenced concretely by a Water Institute-led team of a hydrologist, an ECE professor, a CS professor, and an agronomist winning a $1.79M NSF grant built directly on HiPerGator compute. That staffing-and-governance lesson, unlike the nine-figure gift that started it, is the part plausibly replicable at a university without UF's specific funding history.",
    sources: [
      { label: "University of Florida — AI Year in Review, July 2026", url: "https://news.ufl.edu/2026/07/ai-year-in-review/" },
      { label: "University of Florida — Warrington Case Series: \"Building an AI University,\" May 2026", url: "https://news.ufl.edu/2026/05/warrington-press-building-ai-university/" },
      { label: "University of Florida — HiPerGator 4 unveiling, fastest supercomputer in higher education", url: "https://news.ufl.edu/2025/10/hipergator-4-unveiling/" },
      { label: "UF Water Institute — $1.79M NSF grant for AI-powered environmental forecasting", url: "https://waterinstitute.ufl.edu/water-institute-team-awarded-1-79m-nsf-grant-for-ai-powered-environmental-forecasting/" },
      { label: "FedScoop — NSF announces up to $35 million to stand up AI research resource operations center", url: "https://fedscoop.com/nsf-announces-35-million-stand-up-ai-research-resource-operations-center-nairr/" },
    ],
    sourcePath: "../content/research/university-becoming-ai-utility.md",
  },
  {
    slug: "agentic-ai-meets-physical-world",
    icon: "precision_manufacturing",
    status: "published",
    name: "An AI Agent Just Learned to Turn a Jammed Microscope Knob. MIT Spent Today Asking What Happens If One Gets Hacked.",
    question:
      "Are the most commercially important AI agents about to leave browsers and IDEs and enter laboratories, factories, robots, and supply chains — and what new verification, cybersecurity, and systems skills does that create?",
    tagline:
      "Same week, two campuses: UT Austin built a robot with the force-sensitivity for real lab dexterity, and MIT spent an invitation-only roundtable asking how you'd verify an agent like that before trusting it. Neither has the other's answer yet.",
    thumbnail: "/assets/og/agentic-ai-meets-physical-world.jpg",
    region: "",
    publishedDate: "2026-09-22",
    commodity: "Agentic AI · Robotics",
    evidence: [
      {
        label: "MIT CTL Supply Chain Cybersecurity Roundtable, Sept. 22-23, 2026 (today)",
        note: "Invitation-only; introduces a new Supply Chain Cybersecurity Lab; discusses agent privilege/autonomy trade-offs, prompt injection, model modification, and non-human identity risk.",
        url: "https://ctl.mit.edu/events/roundtable-supply-chains-under-cyberattack",
      },
      {
        label: "UT Austin wins DOE Genesis Mission award for SAFE-BOLT force-aware lab robotics",
        note: "PI Volkan Isler; one of 5 UT Austin awards out of 5,000+ national applicants to the $293M DOE Genesis Mission; builds force-aware bimanual robots for real lab dexterity tasks.",
        url: "https://www.cs.utexas.edu/news/2026/ut-computer-science-wins-doe-genesis-mission-award-bring-autonomous-robotics-scientific",
      },
      {
        label: "ASPIRE: Agentic Skill Discovery for Robotics (UT Austin RPL + NVIDIA GEAR)",
        note: "+77% on LIBERO-Pro perturbed manipulation, +72% on Robosuite bimanual handover, +32% on BEHAVIOR-1K long-horizon tasks — self-reported benchmark results.",
        url: "https://arxiv.org/abs/2607.00272",
      },
    ],
    stakeholders: [
      "Robotics/controls engineers considering a security specialization",
      "Enterprise AI-security teams whose threat model doesn't yet cover embodied agents",
      "PIs building agentic-robotics capability work",
      "Founders building agent-verification tooling",
    ],
    hypothesis:
      "Our best guess: agent capability research (like ASPIRE's skill-discovery gains) and agent risk research (like MIT's supply-chain cybersecurity roundtable) are advancing on separate tracks in 2026, with no public evidence yet that either community has built verification or cybersecurity tooling specific to physical/embodied agents rather than adapted from software-agent security practice — a real, currently unclaimed gap between the two.",
    graphLayers: {
      physical:
        "UT Austin's force-aware bimanual lab robot (SAFE-BOLT), built with the Materials Discovery Research Institute and Medra AI — real physical dexterity and sensory-perception engineering, not simulation-only.",
      capital:
        "UT Austin's SAFE-BOLT award is one of 5 UT Austin projects funded out of the $293M DOE Genesis Mission (5,000+ national applicants); MIT CTL's roundtable and new Supply Chain Cybersecurity Lab are internally funded center initiatives, not a new external grant.",
      business:
        "MIT's roundtable brings senior supply-chain, cybersecurity, and risk leaders into a room to debate agent-privilege trade-offs; UT Austin's ASPIRE work is a research-lab-to-benchmark pipeline (UT Austin RPL + NVIDIA GEAR), not an enterprise deployment yet.",
      information:
        "ASPIRE's expanding skill library (code-as-policy, evolutionary search) is the information layer letting a robot compound experience across tasks and embodiments — with no described cybersecurity verification layer on top of it in the published work.",
    },
    dataNeeds: [
      "Any public reporting connecting MIT's agent-cybersecurity work specifically to physical/embodied agents rather than enterprise software agents",
      "Independent (non-self-reported) evaluation of ASPIRE's benchmark claims",
      "What cybersecurity or adversarial-robustness testing, if any, is planned for SAFE-BOLT's robot once built",
      "A transcript or public readout from the invitation-only MIT roundtable, which this piece could not access directly",
    ],
    artifacts: [
      "An Agent Operations Lab concept: a small agent demo with permissions, evals, execution traces, latency/cost tracking, and one deliberately injected failure mode",
      "A tracked comparison of agent-verification tooling built specifically for embodied/physical agents vs. adapted from software-agent security practice",
    ],
    findings:
      "Two real, independently sourced 2026 developments sit on opposite sides of the same unresolved problem. MIT's Center for Transportation and Logistics is holding an invitation-only roundtable today and tomorrow (Sept. 22-23) specifically to debate AI-agent privilege, autonomy, and cybersecurity risk in physical supply chains, launching a new Supply Chain Cybersecurity Lab because its own leadership judged the browser-and-code threat model insufficient for what's coming. Meanwhile UT Austin's Robot Perception and Learning Lab, working with NVIDIA's GEAR team, published ASPIRE — an agentic skill-discovery system reporting up to 77% improvement in manipulation under perturbation — and separately won a DOE Genesis Mission award (SAFE-BOLT) to build force-aware robots for real lab dexterity work. Neither institution's public materials show the other's problem being solved: MIT's cybersecurity framing doesn't yet address embodied/physical agents specifically, and UT Austin's robotics work doesn't describe a cybersecurity verification layer. The frontier genuinely is moving from software into physical operations; the tooling to verify it safely is visibly still catching up.",
    sources: [
      { label: "MIT CTL — Roundtable: Supply Chains Under (Cyber)Attack", url: "https://ctl.mit.edu/events/roundtable-supply-chains-under-cyberattack" },
      { label: "UT Austin Computer Science — UT Computer Science Wins DOE Genesis Mission Award to Bring Autonomous Robotics to Scientific Research", url: "https://www.cs.utexas.edu/news/2026/ut-computer-science-wins-doe-genesis-mission-award-bring-autonomous-robotics-scientific" },
      { label: "UT News — Department of Energy's New AI-for-Science 'Genesis Mission' Awards Funding to 5 UT Research Projects", url: "https://news.utexas.edu/2026/07/22/department-of-energys-new-ai-for-science-genesis-mission-awards-funding-to-5-ut-research-projects/" },
      { label: "ASPIRE: Agentic Skill Discovery for Robotics (arXiv 2607.00272)", url: "https://arxiv.org/abs/2607.00272" },
      { label: "MimicDroid: In-Context Learning for Humanoid Robot Manipulation from Human Play Videos (arXiv 2509.09769)", url: "https://arxiv.org/pdf/2509.09769" },
      { label: "UT Austin Robot Perception and Learning Lab", url: "https://rpl.cs.utexas.edu/" },
    ],
    sourcePath: "../content/research/agentic-ai-meets-physical-world.md",
  },
];

// The nine regional industries Bot That Lyfe Consulting builds internal AI tooling
// for, and the weekly free live-build sessions organized around them (see
// buildLabSchedule below). Workflows are real patterns already in production
// elsewhere (Cox Automotive's FleetMate estimator, hospital administrative-agent
// deployments, construction takeoff/estimate agents, etc.) — the point on each
// live build is to reverse-engineer or reimagine one for a Southeast Missouri
// organization, live, in front of the audience.
export const industries = [];

// Bot That Lyfe Industry Build Labs: one industry "week" at a time. Three free, live,
// 60-minute sessions — Tuesday, Wednesday, Thursday, 11:30 AM CST — all building
// toward internal tools for that week's industry, then the spotlight rotates to the
// next industry. Real Google Calendar events on autonate.ai@gmail.com (public, each
// with its own Google Meet link). Week placement is chosen so each industry's spotlight
// week lands near a major trade event in that field — no need to say so on the site,
// it's just why these particular weeks were picked. Cycle repeats/extends over time;
// this is the first pass through all nine.
export const industryWeeks = [];

export const buildLabInfo = { format: "" };

// One-off standalone launch session, ahead of the industry rotation (which starts
// with Graphic Arts & Printing on 2026-09-15 — see industryWeeks). Not tied to any
// single industry: introduces the Build Lab format itself, live. Real Google
// Calendar event on autonate.ai@gmail.com (public, own Google Meet link).
export const kickoffSession = null;

// The nine-tool menu offered inside a requested business-training engagement (see
// businessTrainingCurriculum below). Generic on purpose — customized to the specific
// requesting business's real workflows during the engagement. Each business picks 3.
export const toolsMenu = [];

// The 4-day (Monday-Thursday, 4 hours/day) requested business-training curriculum.
// Days 1-2 are shared foundations; Days 3-4 are hands-on build time on the business's
// own chosen tools (see toolsMenu). Emphasis throughout is prompt/context engineering —
// participants become the people who can direct and judge an AI coding agent's output,
// not necessarily write the code by hand.
export const businessTrainingCurriculum = [];

// What a participant could build for their organizational project track, by org
// type. Used on the Program page ("What could you build for your organization?")
// and on the For Organizations page.
export const organizationExamples = [];

// Sponsorship pricing for employers/schools sending more than one seat. Flat
// $499/seat (SPONSORSHIP_UNIT_PRICE_CENTS in server.mjs / functions/index.js
// is the source of truth the payment endpoint actually charges — keep both
// in sync if this ever changes). Easy to edit — launch-pricing defaults, not
// fixed forever.
export const sponsorshipTiers = [];

// Consulting offerings for Bot That Lyfe's community/regional banking vertical.
// Each maps a real daily workflow stress inside a bank to what Bot That Lyfe does
// about it, priced as fixed-scope engagements (not hourly), sized for a bank's
// budget rather than an enterprise vendor contract.
export const bankingOfferings = [];

// Four-step engagement ladder shown above the offer grid on /consulting.
export const bankEngagementLadder = [];

// Limited-slot launch pricing on the Bank AI & Workflow Assessment. Update
// slotsFilled by hand as Founding Bank Pilot partners sign; once slotsFilled
// reaches slotsTotal, drop this section and the assessment card reverts to
// standard pricing everywhere on the page.
export const foundingBankPilot = { region: "", slotsTotal: 0, slotsFilled: 0, standardPrice: 0, pilotPrice: 0, offeringName: "" };

export const badgeProgression = [
  "Explorer",
  "Builder",
  "Developer",
  "Studio Member",
  "Lead Developer",
  "Certificate",
];

// Wide, dark, cinematic scene images generated with gpt-image-2 (see
// scripts/generate-scene-images.mjs). Used editorially wherever a pack or
// tutorial has no dedicated hero image, and as the background layer for
// every OG image sitewide (see scripts/generate-og-images.mjs).
export const sceneShots = [
  "/assets/scenes/scene-01.jpg",
  "/assets/scenes/scene-02.jpg",
  "/assets/scenes/scene-03.jpg",
  "/assets/scenes/scene-04.jpg",
  "/assets/scenes/scene-05.jpg",
  "/assets/scenes/scene-06.jpg",
  "/assets/scenes/scene-07.jpg",
  "/assets/scenes/scene-08.jpg",
];

export const tutorialPacks = [
  {
    handle: "intro-to-javascript-for-beginners",
    title: "Intro to JavaScript for Beginners",
    tagline: "How Nate and Kai Started Bot That Lyfe",
    summary:
      "Follow Nate and Kai — one self-taught builder, one civic-tech idea with nowhere to go — from a meetup back room to their first working JavaScript. Six chapters. Real code, real diagrams, real banter, no fluff.",
    icon: "code",
    status: "Active",
    heroImage: "/assets/landing/tutorial-pack-intro-to-javascript-for-beginners.jpg",
  },
  {
    handle: "prompt-and-context-engineering",
    title: "Prompt and Context Engineering",
    tagline: "Nate and Kai Learn to Talk to the Machine",
    summary:
      "Hand-coding everything doesn't scale for two people building a studio. Nate and Kai start directing an AI agent and both get burned in different ways, until they learn that prompting and context are real skills, not just typing a question.",
    icon: "psychology",
    status: "Active",
    heroImage: "/assets/landing/tutorial-pack-prompt-and-context-engineering.jpg",
  },
  {
    handle: "relational-databases-and-graphs",
    title: "Relational Databases and Graphs",
    tagline: "Nate and Kai Build the System of Record",
    summary:
      "Contacts, ideas, and feedback from every meetup are scattered across notes and memory. Nate and Kai build a real database to track them: tables, SQL, and a graph model for when the relationships get too tangled for rows and columns.",
    icon: "database",
    status: "Active",
    heroImage: "/assets/landing/tutorial-pack-relational-databases-and-graphs.jpg",
  },
  {
    handle: "civics-and-agentic-ai",
    title: "Civics and Agentic AI",
    tagline: "Nate and Kai Take Their First Real Ask",
    summary:
      "Prompting, context, and data — the studio has the skills now. This pack turns them outward: reading a real RFP, researching the organization behind it, and sketching a real system for the exact civic problem that started it all.",
    icon: "account_balance",
    status: "Active",
    heroImage: "/assets/landing/tutorial-pack-civics-and-agentic-ai.jpg",
  },
];

export const tutorials = [
  {
    handle: "setup-node-and-vscode",
    episode: "00",
    title: "The Deal: Installing Node.js and VS Code",
    track: "Chapter 0",
    pack: "intro-to-javascript-for-beginners",
    sourcePath: "../content/tutorials/intro-to-javascript-for-beginners/00-setup-node-and-vscode.md",
    summary:
      "Nate and Kai make the deal that becomes Bot That Lyfe at the Fairview Founders Table. Before either of them writes a line of code, they need their gear: Node.js to run JavaScript outside a browser, and VS Code to actually write it.",
    outcomes: ["Install Node.js", "Install VS Code", "Run your first script"],
  },
  {
    handle: "why-javascript",
    episode: "01",
    title: "The Vision: Why JavaScript (and Where It Runs)",
    track: "Chapter 1",
    pack: "intro-to-javascript-for-beginners",
    sourcePath: "../content/tutorials/intro-to-javascript-for-beginners/01-why-javascript.md",
    summary:
      "Kai has an idea and no way to build it. Nate can build things but has never had a reason that mattered. They pick a language and a deadline: next month's Founders Table Demo Night.",
    outcomes: ["Understand the language", "See where JS runs", "Set a real deadline"],
  },
  {
    handle: "variables-types-and-values",
    episode: "02",
    title: "Know Your Pockets: Variables, Types, and Values",
    track: "Chapter 2",
    pack: "intro-to-javascript-for-beginners",
    sourcePath: "../content/tutorials/intro-to-javascript-for-beginners/02-variables-types-and-values.md",
    summary:
      "Before you build anything, you check your pockets. Kai learns to hold onto information with variables — and catches Nate's own casual code assuming \"42\" and 42 are the same thing.",
    outcomes: ["Declare values", "Know the core types", "Catch a type bug before it ships"],
  },
  {
    handle: "control-flow",
    episode: "03",
    title: "Reading the Room: Conditionals and Loops",
    track: "Chapter 3",
    pack: "intro-to-javascript-for-beginners",
    sourcePath: "../content/tutorials/intro-to-javascript-for-beginners/03-control-flow.md",
    summary:
      "Their idea list from Founders Table is a mess of sticky notes. Nate and Kai learn to make decisions with if/else and drill the same move on repeat with loops, sorting the list for real.",
    outcomes: ["Branch with if/else", "Loop with for", "Avoid infinite loops"],
  },
  {
    handle: "functions-and-scope",
    episode: "04",
    title: "Signature Moves: Functions and Scope",
    track: "Chapter 4",
    pack: "intro-to-javascript-for-beginners",
    sourcePath: "../content/tutorials/intro-to-javascript-for-beginners/04-functions-and-scope.md",
    summary:
      "Nate keeps copy-pasting the same five lines. Kai's process instincts finally win the argument: package logic into a function you can reuse and trust, a signature move you can throw the same way every time.",
    outcomes: ["Write functions", "Pass parameters", "Understand scope"],
  },
  {
    handle: "objects-arrays-and-data-shapes",
    episode: "05",
    title: "The Playbook: Objects, Arrays, and Data Shapes",
    track: "Chapter 5",
    pack: "intro-to-javascript-for-beginners",
    sourcePath: "../content/tutorials/intro-to-javascript-for-beginners/05-objects-arrays-and-data-shapes.md",
    summary:
      "Before Demo Night, Nate and Kai need a playbook: a way to organize everything they've built. Objects, arrays, real data shapes — and the name their studio finally lands on.",
    outcomes: ["Shape objects", "Use array methods", "Build a real data-backed roster"],
  },
  {
    handle: "why-prompting-is-a-skill",
    episode: "00",
    title: "Garbage In, Garbage Out: Why Prompting Is a Skill",
    track: "Chapter 0",
    pack: "prompt-and-context-engineering",
    sourcePath: "../content/tutorials/prompt-and-context-engineering/00-why-prompting-is-a-skill.md",
    summary:
      "Hand-coding everything doesn't scale for two people building a studio. Kai over-trusts the first AI agent output; Nate refuses to use it out of pride. They both get burned before the real lesson lands.",
    outcomes: ["See why prompting is a skill", "Spot garbage-in, garbage-out", "Set real expectations for agents"],
  },
  {
    handle: "give-it-the-room-not-just-the-ask",
    episode: "01",
    title: "Give It the Room, Not Just the Ask: What Context Really Means",
    track: "Chapter 1",
    pack: "prompt-and-context-engineering",
    sourcePath: "../content/tutorials/prompt-and-context-engineering/01-give-it-the-room-not-just-the-ask.md",
    summary:
      "Context isn't infinite. Nate and Kai learn what an agent actually sees — instructions, history, files, tool output — the hard way, when it confidently answers about a file it was never shown.",
    outcomes: ["Understand agent context", "Know what's finite", "Avoid context overload"],
  },
  {
    handle: "structuring-the-ask",
    episode: "02",
    title: "Structuring the Ask: Role, Task, Constraints, Format",
    track: "Chapter 2",
    pack: "prompt-and-context-engineering",
    sourcePath: "../content/tutorials/prompt-and-context-engineering/02-structuring-the-ask.md",
    summary:
      "Turns out Kai's old memo-writing instincts transfer directly. She teaches Nate to structure a prompt with role, task, constraints, and format instead of throwing a vague question at the wall.",
    outcomes: ["Structure a real prompt", "Use constraints and examples", "Iterate instead of settling"],
  },
  {
    handle: "feeding-it-the-right-files",
    episode: "03",
    title: "Feeding It the Right Files: Practical Context Engineering",
    track: "Chapter 3",
    pack: "prompt-and-context-engineering",
    sourcePath: "../content/tutorials/prompt-and-context-engineering/03-feeding-it-the-right-files.md",
    summary:
      "More files isn't more help. Nate and Kai practice handing an agent only what it actually needs to get a real change right.",
    outcomes: ["Select relevant context", "Avoid overload", "Summarize instead of dumping"],
  },
  {
    handle: "when-it-gets-it-wrong",
    episode: "04",
    title: "When It Gets It Wrong: Hallucination, Ambiguity, and Trusting Nothing You Haven't Checked",
    track: "Chapter 4",
    pack: "prompt-and-context-engineering",
    sourcePath: "../content/tutorials/prompt-and-context-engineering/04-when-it-gets-it-wrong.md",
    summary:
      "Agents hallucinate. Nate almost ships a fix built on an API that doesn't exist — until Kai's \"where's that from?\" catches it. The habit that matters most: verify before you trust, every single time.",
    outcomes: ["Spot hallucinations", "Handle ambiguity", "Build a verify-first habit"],
  },
  {
    handle: "cheatsheet",
    episode: "05",
    title: "Cheatsheet",
    track: "Reference",
    pack: "prompt-and-context-engineering",
    sourcePath: "../content/tutorials/prompt-and-context-engineering/05-cheatsheet.md",
    summary: "The prompt patterns and context-engineering checklist Nate and Kai actually keep open in a tab.",
    outcomes: ["Reference prompt patterns", "Run the context checklist", "Catch common failures"],
  },
  {
    handle: "why-he-needs-a-scoreboard",
    episode: "00",
    title: "The Missing Ledger: Why They Need a Scoreboard",
    track: "Chapter 0",
    pack: "relational-databases-and-graphs",
    sourcePath: "../content/tutorials/relational-databases-and-graphs/00-why-he-needs-a-scoreboard.md",
    summary:
      "Contacts, ideas, and feedback from every Founders Table are scattered across notes, DMs, and memory. Nate and Kai learn why a real database beats another folder of notes.",
    outcomes: ["See why a database beats files", "Compare memory vs storage", "Frame the tracking problem"],
  },
  {
    handle: "tables-rows-and-relationships",
    episode: "01",
    title: "The Blueprint: Tables, Rows, and Relationships",
    track: "Chapter 1",
    pack: "relational-databases-and-graphs",
    sourcePath: "../content/tutorials/relational-databases-and-graphs/01-tables-rows-and-relationships.md",
    summary:
      "Primary keys, foreign keys, one-to-many. Nate and Kai model their contacts, ideas, and feedback as real relational tables.",
    outcomes: ["Design tables and keys", "Model one-to-many relationships", "Think in rows, not files"],
  },
  {
    handle: "asking-questions-with-sql",
    episode: "02",
    title: "Talking to the Data: Asking Questions with SQL",
    track: "Chapter 2",
    pack: "relational-databases-and-graphs",
    sourcePath: "../content/tutorials/relational-databases-and-graphs/02-asking-questions-with-sql.md",
    summary:
      "SELECT, WHERE, JOIN, GROUP BY. Nate and Kai learn to ask their own data a real question and get a real answer back.",
    outcomes: ["Write SELECT and WHERE", "Join related tables", "Group data into answers"],
  },
  {
    handle: "when-relationships-get-tangled",
    episode: "03",
    title: "The Web Under the Table: When Relationships Get Tangled",
    track: "Chapter 3",
    pack: "relational-databases-and-graphs",
    sourcePath: "../content/tutorials/relational-databases-and-graphs/03-when-relationships-get-tangled.md",
    summary:
      "Who-introduced-who at Founders Table doesn't fit neatly in rows. Nate and Kai meet graphs: nodes, edges, and when a graph beats a table.",
    outcomes: ["Understand nodes and edges", "Know when to reach for a graph", "Traverse a simple graph"],
  },
  {
    handle: "building-the-monitor",
    episode: "04",
    title: "The Scoreboard Comes Alive: Building the Monitor",
    track: "Chapter 4",
    pack: "relational-databases-and-graphs",
    sourcePath: "../content/tutorials/relational-databases-and-graphs/04-building-the-monitor.md",
    summary:
      "Queries become a real tracker. Nate and Kai turn raw rows into a small studio dashboard that actually tells them what's working.",
    outcomes: ["Aggregate real data", "Build a simple monitor", "Turn queries into insight"],
  },
  {
    handle: "cheatsheet",
    episode: "05",
    title: "Cheatsheet",
    track: "Reference",
    pack: "relational-databases-and-graphs",
    sourcePath: "../content/tutorials/relational-databases-and-graphs/05-cheatsheet.md",
    summary: "The SQL syntax and graph vocabulary Nate and Kai keep looking up until it finally sticks.",
    outcomes: ["Reference SQL syntax", "Know core graph terms", "Query with confidence"],
  },
  {
    handle: "zooming-out-to-the-city",
    episode: "00",
    title: "Past the Walls: Zooming Out to the City",
    track: "Chapter 0",
    pack: "civics-and-agentic-ai",
    sourcePath: "../content/tutorials/civics-and-agentic-ai/00-zooming-out-to-the-city.md",
    summary:
      "Kai finds a live Fairview RFP that's unmistakably the exact problem she couldn't build back at the very first Founders Table. Nate and Kai meet the RFP: a real problem a real city is asking someone to solve.",
    outcomes: ["Understand what an RFP is", "See where real problems get published", "Close the loop on where this started"],
  },
  {
    handle: "what-is-an-agentic-system",
    episode: "01",
    title: "Not Just a Chatbot: What Is an Agentic System",
    track: "Chapter 1",
    pack: "civics-and-agentic-ai",
    sourcePath: "../content/tutorials/civics-and-agentic-ai/01-what-is-an-agentic-system.md",
    summary:
      "An agent isn't a one-shot answer machine. Nate and Kai learn what makes a system agentic: planning, tool use, and taking real steps toward a goal, for something with real stakes for the first time.",
    outcomes: ["Define agentic vs single-shot", "Understand planning and tool use", "Recognize multi-step autonomy"],
  },
  {
    handle: "reading-an-rfp-with-ai",
    episode: "02",
    title: "The Fine Print: Reading an RFP with AI",
    track: "Chapter 2",
    pack: "civics-and-agentic-ai",
    sourcePath: "../content/tutorials/civics-and-agentic-ai/02-reading-an-rfp-with-ai.md",
    summary:
      "Kai is fluent in bureaucratic language and finally gets to translate for Nate, the way he once translated code for her. Together with an agent they pull out what actually matters: requirements, constraints, stakes.",
    outcomes: ["Summarize a real RFP", "Extract requirements", "Identify constraints"],
  },
  {
    handle: "researching-the-room",
    episode: "03",
    title: "Know Who You're Talking To: Researching the Room",
    track: "Chapter 3",
    pack: "civics-and-agentic-ai",
    sourcePath: "../content/tutorials/civics-and-agentic-ai/03-researching-the-room.md",
    summary:
      "Before you build for someone, you find out who they actually are. Nate and Kai use AI to research the organization behind the ask.",
    outcomes: ["Research a real organization", "Find who's behind an RFP", "Frame who the system serves"],
  },
  {
    handle: "from-insight-to-system",
    episode: "04",
    title: "The Sketch on the Napkin: From Insight to System",
    track: "Chapter 4",
    pack: "civics-and-agentic-ai",
    sourcePath: "../content/tutorials/civics-and-agentic-ai/04-from-insight-to-system.md",
    summary:
      "Research becomes architecture. Nate and Kai sketch a real system in response to a real civic problem, diagram and all — the studio's first real build.",
    outcomes: ["Sketch a system from research", "Diagram a real architecture", "Connect insight to design"],
  },
  {
    handle: "cheatsheet",
    episode: "05",
    title: "The Notes Before the Real Build: Cheatsheet",
    track: "Reference",
    pack: "civics-and-agentic-ai",
    sourcePath: "../content/tutorials/civics-and-agentic-ai/05-cheatsheet.md",
    summary: "Agentic-AI vocabulary and the RFP research checklist Nate and Kai use every time a new one drops — right before their first real system for a real organization.",
    outcomes: ["Reference agentic-AI terms", "Run the RFP checklist", "Get ready for the program"],
  },
];

export const articles = [];
