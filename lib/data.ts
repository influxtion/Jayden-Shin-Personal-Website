export type Experience = {
  year: string;
  role: string;
  org: string;
  location: string;
  copy: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectPreview = {
  src: string;
  alt: string;
  /** where clicking the preview goes — the live demo or store page */
  href: string;
  /** animated webp: skipped by the image optimizer and swapped for `poster` under prefers-reduced-motion */
  animated?: boolean;
  poster?: string;
  /** css aspect-ratio for the frame; defaults to 16 / 9 */
  aspect?: string;
};

export type Project = {
  title: string;
  meta: string;
  /** canonical project link, used by the title */
  href: string;
  bullets: string[];
  links: ProjectLink[];
  preview?: ProjectPreview;
};

export type FunFact = {
  id: string;
  headline: string;
  detail: string;
  image?: string;
  imageAlt?: string;
  tag?: string;
  /** pixel icon for the dex sprite window */
  icon?: "book" | "bowl";
};

export const experience: Experience[] = [
  {
    year: "sep 2026 / now",
    role: "Operations Intern",
    org: "Marble Investments",
    location: "",
    copy: "Build Python screening tooling for a Waterloo campus-based startup, ingesting SEC XBRL and vendor-API fundamentals into a cached pandas store. Rank the universe on sector-neutral z-scores across valuation, quality, and leverage, with Piotroski F-Score filters cutting hundreds of tickers to a shortlist. Support day-to-day investment operations behind a $3M AUM portfolio compounding at a 63.5% CAGR since 2022.",
    href: "https://www.linkedin.com/company/marble-investment",
  },
  {
    year: "sep 2026 / now",
    role: "Software Engineer",
    org: "UW CUBE",
    location: "",
    copy: "Serve on the executive team of a University of Waterloo design incubator that pairs student project teams with mentors and workshops to ship digital products each term. Own the club's web presence end to end, translating Figma prototypes into responsive React/Next.js components across the site, application intake, and showcase pages. Run technical workshops and code reviews for project teams, unblocking designers on front-end implementation ahead of the end-of-term showcase.",
    href: "https://ca.linkedin.com/company/uwcube",
  },
  {
    year: "jun / oct 2024",
    role: "Software Engineer Intern",
    org: "RookBook Sports",
    location: "",
    copy: "Built and maintained the production site for a Southeast Asian football management agency in Flutter (Dart) under two engineers' mentorship. Composed a custom widget tree with LayoutBuilder breakpoints and reactive state over async roster and inquiry data.",
  },
];

export const leadership: Experience[] = [
  {
    year: "apr 2025 / jun 2026",
    role: "Volunteer IT Director",
    org: "Adopt Our Community",
    location: "",
    copy: "Built internal web platforms and automated data-routing systems across 10+ chapters. Coordinated with 19+ external partners, including hospitals, First Nations, and city governments, to streamline logistics and drive $10K+ in fundraising outcomes.",
    href: "https://www.adoptourcommunity.org/",
  },
  {
    year: "mar 2025",
    role: "Youth Representative & Speaker",
    org: "United Nations",
    location: "",
    copy: "One of ~100 under-18 delegates at the 2025 UN ECOSOC Youth Forum in New York City, among university students, PhD candidates, and ministers. Delivered a live, televised speech on the role of youth to 1,000+ attendees, including Council President Bob Rae. Attended invite-only side events hosted by the ILO, UNDP, and the Permanent Missions of China and Canada.",
    image: "/un.webp",
    imageAlt: "Jayden Shin speaking at the UN ECOSOC Youth Forum, 2025",
  },
];

// Casual version of project copy — keep this around so we can swap back later.
// To revert: rename `projects` below to `projectsProfessional`, and rename
// `projectsCasual` to `projects`.
export const projectsCasual: Project[] = [
  {
    title: "Laplace",
    meta: "Competitive Pokémon Bot · Python · 2026",
    href: "https://github.com/influxtion/Laplace-Pokemon-Showdown-AI",
    bullets: [
      "hit a peak 2137 elo — #447 in the world, top 1% of hundreds of thousands of human players. 200k+ views across social media.",
      "guesses what team you're running, simulates ~250k playouts every 120ms on a rust engine, and picks a mixed strategy so you can't read it.",
      "reads your hidden items and stats off your move patterns and turn order, which is honestly rude of it, and breaks near-ties with a pytorch value net.",
      "every change had to beat the old version in a/b self-play before it shipped, benchmarked against the strongest open-source bot.",
    ],
    links: [
      { label: "watch a battle", href: "https://replay.pokemonshowdown.com/gen9randombattle-2658612840" },
      { label: "github", href: "https://github.com/influxtion/Laplace-Pokemon-Showdown-AI" },
    ],
    preview: {
      src: "/laplace-replay.webp",
      alt: "Laplace playing a ranked Pokémon Showdown battle, turn 2 of a Gen 9 Random Battle",
      href: "https://replay.pokemonshowdown.com/gen9randombattle-2658612840",
      animated: true,
      poster: "/laplace-replay-poster.webp",
    },
  },
  {
    title: "Calmpost",
    meta: "Smart compost bin + Android app · Flutter · Python · 2026",
    href: "https://github.com/henryc08/Calmpost",
    bullets: [
      "won the city of schools track at hack the valley (uoft). it's a compost bin with sensors in it and an android app that tells you what it needs. and yes, it gamifies composting.",
      "an arduino streams moisture at two depths, temperature and co₂ about once a second into a fastapi backend on tiger data, which powers the live charts and the friend leaderboards.",
      "a webcam watches what you drop in and gemini figures out what it is. a fixed rules engine makes every call, so if you ask trunc (the assistant) 'should i add apples?', the answer depends on how your bin looks right now.",
      "xp, streaks, crates and collectible seeds for looking after it, plus a toronto sorting guide built on the city's waste wizard open data.",
    ],
    links: [{ label: "github", href: "https://github.com/henryc08/Calmpost" }],
    preview: {
      src: "/calmpost-app.webp",
      alt: "Calmpost app screens: live two-probe moisture sensors, Trunc's advice for the bin right now, and the confirmed compost inventory",
      href: "https://github.com/henryc08/Calmpost",
      aspect: "16 / 10",
    },
  },
  {
    title: "Last Tour",
    meta: "Chrome extension · JavaScript · 2026",
    href: "https://github.com/influxtion/Girls-Last-Tour-New-Tab-Extension",
    bullets: [
      "a new tab page that's just a tiny pixel city, generated fresh every time, with parallax layers and snow. 200 impressions on the web store.",
      "all the ambience — wind, engine hum — is synthesized live in the browser, so there's not a single copyrighted asset in it. little journal built in too.",
    ],
    links: [
      {
        label: "chrome web store",
        href: "https://chromewebstore.google.com/detail/last-tour-shoujo-shuumats/fpfajepgnbicdpfddfjdicneoombjgmp",
      },
      { label: "github", href: "https://github.com/influxtion/Girls-Last-Tour-New-Tab-Extension" },
    ],
    preview: {
      src: "/lasttour-newtab.webp",
      alt: "The Last Tour new tab page: a procedural pixel-art city at night, with a clock and the Kettenkrad",
      href: "https://chromewebstore.google.com/detail/last-tour-shoujo-shuumats/fpfajepgnbicdpfddfjdicneoombjgmp",
      aspect: "16 / 10",
    },
  },
];

export const projects: Project[] = [
  {
    title: "Laplace",
    meta: "Pokémon Showdown battle AI · Python · 2026",
    href: "https://github.com/influxtion/Laplace-Pokemon-Showdown-AI",
    bullets: [
      "Reached a peak 2231 Elo — ranked #150 in the world on the competitive ladder, top 1% among hundreds of thousands of human players; drew 200K+ views across social media.",
      "Drives each turn with determinized Monte Carlo Tree Search to reason under hidden information and simultaneous moves: samples plausible opponent teams, simulates ~250K playouts per 120ms on a multithreaded Rust engine, and plays a mixed, unexploitable strategy.",
      "Deduces concealed opponent items and stats from in-game tells like move patterns and turn order, and trained a PyTorch value network (368 features, self-play labels, ~70% accuracy) to resolve near-ties.",
      "Validated every change through a loss-mining → root-cause → A/B self-play harness with Wilson confidence intervals, benchmarked against the strongest open-source bot.",
    ],
    links: [
      { label: "watch a battle", href: "https://replay.pokemonshowdown.com/gen9randombattle-2658612840" },
      { label: "github", href: "https://github.com/influxtion/Laplace-Pokemon-Showdown-AI" },
    ],
    preview: {
      src: "/laplace-replay.webp",
      alt: "Laplace playing a ranked Pokémon Showdown battle, turn 2 of a Gen 9 Random Battle",
      href: "https://replay.pokemonshowdown.com/gen9randombattle-2658612840",
      animated: true,
      poster: "/laplace-replay-poster.webp",
    },
  },
  {
    title: "Calmpost (Hack the Valley Winner)",
    meta: "Smart compost bin + Android app · Flutter · Python · 2026",
    href: "https://github.com/henryc08/Calmpost",
    bullets: [
      "Won the City of Schools track at Hack the Valley (UofT) with a sensor-instrumented home compost bin and a gamified Flutter app that turns live bin telemetry into plain-language care advice.",
      "Engineered the full telemetry pipeline: an Arduino UNO R4 streams two-layer moisture, compost temperature and CO₂ at ~1 Hz through a serial bridge into a FastAPI backend on a Tiger Data (TimescaleDB) hypertable, with continuous aggregates driving charts and time-window leaderboards computed over an append-only XP ledger.",
      "Paired OpenCV drop detection with Gemini vision to identify scraps as they go in, behind a deterministic rules engine that owns every verdict, so the same scrap gets a different answer depending on the bin's current readings and every AI response has a rule-based fallback.",
      "Kept users coming back with XP, streaks, loot crates, collectible seeds and private leagues, and shipped an offline Toronto sorting guide curated from the City's 2,206-record Waste Wizard open dataset to target the city's Green Bin diversion gap.",
    ],
    links: [{ label: "github", href: "https://github.com/henryc08/Calmpost" }],
    preview: {
      src: "/calmpost-app.webp",
      alt: "Calmpost app screens: live two-probe moisture sensors, Trunc's advice for the bin right now, and the confirmed compost inventory",
      href: "https://github.com/henryc08/Calmpost",
      aspect: "16 / 10",
    },
  },
  {
    title: "Last Tour",
    meta: "Chrome extension · JavaScript · 2026",
    href: "https://github.com/influxtion/Girls-Last-Tour-New-Tab-Extension",
    bullets: [
      "Shipped a Manifest V3 Chrome extension (200 impressions) that overrides the new-tab page with a procedural pixel-art city, rendered to a low-res offscreen canvas and nearest-neighbour upscaled, with parallax layers and runtime snowfall.",
      "Synthesized all ambience through the WebAudio API — filtered-noise wind, oscillator engine idle — and added a chrome.storage journal and topSites integration, shipping zero copyrighted assets.",
    ],
    links: [
      {
        label: "chrome web store",
        href: "https://chromewebstore.google.com/detail/last-tour-shoujo-shuumats/fpfajepgnbicdpfddfjdicneoombjgmp",
      },
      { label: "github", href: "https://github.com/influxtion/Girls-Last-Tour-New-Tab-Extension" },
    ],
    preview: {
      src: "/lasttour-newtab.webp",
      alt: "The Last Tour new tab page: a procedural pixel-art city at night, with a clock and the Kettenkrad",
      href: "https://chromewebstore.google.com/detail/last-tour-shoujo-shuumats/fpfajepgnbicdpfddfjdicneoombjgmp",
      aspect: "16 / 10",
    },
  },
];

export const funFacts: FunFact[] = [
  {
    id: "01",
    icon: "book",
    tag: "scholastic writing awards · flash fiction",
    headline: "i write sometimes.",
    detail:
      "gold at the scholastic writing and art awards for fiction. 1 of 100 nationally, and 1 of 7 gold recipients for flash fiction in all of canada. i had one of my short stories published in an anthology too.",
  },
  {
    id: "02",
    icon: "bowl",
    tag: "food",
    headline: "i really like food.",
    detail:
      "if you got a dish to share with me, hit me up. i cook in my spare time too! i'm starving just thinking about it ngl.",
  },
];

/** each language gets a battle type for its badge colour */
export const skills: { name: string; type: string }[] = [
  { name: "Java", type: "fire" },
  { name: "JavaScript", type: "electric" },
  { name: "TypeScript", type: "water" },
  { name: "Dart", type: "ice" },
  { name: "Python", type: "grass" },
  { name: "C++", type: "steel" },
];

export const meta = {
  name: "Jayden Shin",
  bio: "Software Engineering student at Waterloo. I build things, really love food, and somehow ended up at the UN. Looking to get into the start-up and tech space.",
  year: "2026",
  email: "j86shin@uwaterloo.ca",
  linkedin: "https://www.linkedin.com/in/jayden-shin/",
  github: "https://github.com/influxtion",
};
