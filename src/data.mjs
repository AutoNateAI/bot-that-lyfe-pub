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

export const investigations = [];

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
