export type Experience = {
  year: string;
  role: string;
  org: string;
  location: string;
  copy: string;
  href?: string;
};

export type Project = {
  title: string;
  meta: string;
  href: string;
  description: string;
  preview?: string;
  previewAlt?: string;
};

export type FunFact = {
  id: string;
  headline: string;
  detail: string;
  image?: string;
  imageAlt?: string;
  tag?: string;
};

export const experience: Experience[] = [
  {
    year: "apr 2026 / now",
    role: "Head of Technology Operations",
    org: "Paradym Private Capital",
    location: "",
    copy: "Operate end-to-end technology operations for a private capital firm managing $70K+ in assets. Engineered the algorithmic and web-based systems behind 20%+ annualized returns, working alongside an Ivey AEO and Queen's Commerce executive team.",
    href: "https://paradymprivatecapital.com/portfolio",
  },
  {
    year: "apr 2025 / jun 2026",
    role: "Volunteer IT Director",
    org: "Adopt Our Community",
    location: "",
    copy: "Built internal web platforms and automated data-routing systems across 10+ chapters. Coordinated with 19+ external partners — hospitals, First Nations, and city governments — to streamline logistics and drive $10K+ in fundraising outcomes.",
    href: "https://www.adoptourcommunity.org/",
  },
  {
    year: "mar / nov 2025",
    role: "Web Developer",
    org: "Free Your Mind Initiative",
    location: "",
    copy: "Designed and delivered a responsive CMS web platform within a 5-member team to modernize a non-profit's digital operations. Took over site administration after launch, maintaining continuous uptime and content accuracy.",
  },
  {
    year: "jun / oct 2024",
    role: "Software Development Intern",
    org: "RookBook Sports",
    location: "",
    copy: "Built and maintained the production website for a Southeast Asian football management agency. Mentored by senior engineers, developing hands-on proficiency in Flutter-based full-stack development across front-end and back-end systems.",
  },
];

// Casual version of project copy — keep this around so we can swap back later.
// To revert: rename `projects` below to `projectsProfessional`, and rename
// `projectsCasual` to `projects`.
export const projectsCasual: Project[] = [
  {
    title: "Laplace",
    meta: "Pokémon Showdown battle AI · Python · 2026",
    href: "https://github.com/influxtion/Laplace-Pokemon-Showdown-AI",
    description:
      "a pokémon showdown bot that hit 2137 elo — #447 in the world, top 1% of the ladder. it guesses what team you're running, simulates ~250k playouts every 120ms on a rust engine, and picks a mixed strategy so you can't read it. it also reads your hidden items and stats off your move patterns and turn order, which is honestly rude of it. 180k+ views across social media.",
  },
  {
    title: "Last Tour",
    meta: "Chrome extension · JavaScript · 2026",
    href: "https://github.com/influxtion/Girls-Last-Tour-New-Tab-Extension",
    description:
      "a new tab page that's just a tiny pixel city, generated fresh every time, with parallax layers and snow. all the ambience — wind, engine hum — is synthesized live in the browser, so there's not a single copyrighted asset in it. 100 users and a little journal built in.",
  },
  {
    title: "Progression Difficulty Scaler",
    meta: "Minecraft Fabric mod · Java · 2026",
    href: "https://github.com/influxtion/Progressive-Difficulty-Scaler",
    description:
      "a minecraft mod that quietly scores how far you've progressed — gear, dimensions, advancements, how much netherite you've dug up — and scales every mob's health and damage to match. ramps hard mid-game then eases off once you're geared. 200 downloads.",
  },
];

export const projects: Project[] = [
  {
    title: "Laplace",
    meta: "Pokémon Showdown battle AI · Python · 2026",
    href: "https://github.com/influxtion/Laplace-Pokemon-Showdown-AI",
    description:
      "A competitive Pokémon Showdown AI that reached a peak 2137 Elo — ranked #447 in the world and top 1% of hundreds of thousands of human players, with 180K+ views across social media. Each turn is driven by determinized Monte Carlo Tree Search to reason under hidden information and simultaneous moves: it samples plausible opponent teams, simulates ~250K playouts per 120ms on a multithreaded Rust engine, and plays a mixed, unexploitable strategy. It deduces concealed opponent items and stats from in-game tells like move patterns and turn order, and resolves near-ties with a PyTorch value network trained on self-play labels. Every change was validated through a loss-mining and A/B self-play harness, benchmarked against the strongest open-source bot.",
  },
  {
    title: "Last Tour",
    meta: "Chrome extension · JavaScript · 2026",
    href: "https://github.com/influxtion/Girls-Last-Tour-New-Tab-Extension",
    description:
      "A Manifest V3 Chrome extension (100 users) that overrides the new-tab page with a procedural pixel-art city, rendered to a low-res offscreen canvas and nearest-neighbour upscaled, with parallax layers and runtime snowfall. All ambience is synthesized through the WebAudio API — filtered-noise wind, oscillator engine idle — alongside a chrome.storage journal and topSites integration, shipping zero copyrighted assets.",
  },
  {
    title: "Progression Difficulty Scaler",
    meta: "Minecraft Fabric mod · Java · 2026",
    href: "https://github.com/influxtion/Progressive-Difficulty-Scaler",
    description:
      "A server-side Fabric mod (200 downloads, MC 1.21.1) that hooks entity-load events to rescale each mob's max-health and attack-damage attributes on spawn against a server-wide progression average. It derives a hidden 0–100 progression score per player from gear, dimensions, advancements, and log-scaled diamond/netherite mining, mapped through a normalized logistic S-curve so difficulty ramps mid-to-late game and eases off at the top.",
  },
];

export const funFacts: FunFact[] = [
  {
    id: "01",
    tag: "UN ECOSOC youth forum · 2025",
    headline: "i ended up as a youth rep and speaker at the UN.",
    detail:
      "picked as one of ~100 under-18 delegates to the 2025 UN ECOSOC youth forum in nyc, somehow alongside university students, phd candidates, and ministers. gave a live televised speech to 1,000+ people, including council president bob rae, on why youth voices actually matter in global policy. also went to closed-door side events by orgs like the permanent missions of china and canada and the ILO. i do volunteer work and advocacy for education inequity.",
    image: "/un.webp",
    imageAlt: "Jayden Shin speaking at the UN ECOSOC Youth Forum, 2025",
  },
  {
    id: "02",
    tag: "scholastic writing awards · flash fiction",
    headline: "i write sometimes.",
    detail:
      "gold at the scholastic writing and art awards for fiction. 1 of 100 nationally, and 1 of 7 gold recipients for flash fiction in all of canada. i had one of my short stories published in an anthology too.",
  },
  {
    id: "03",
    tag: "food",
    headline: "i really like food.",
    detail:
      "if you got a dish to share with me, hit me up. i cook in my spare time too! i'm starving just thinking about it ngl.",
  },
];

export const skills = ["Java", "JavaScript", "TypeScript", "Dart", "Python", "C++"];

export const meta = {
  name: "Jayden Shin",
  bio: "Incoming Software Engineering student at Waterloo. I build things, really love food, and somehow ended up at the UN. Looking to get into the start-up and tech space.",
  year: "2026",
  email: "jaydenshin2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/jayden-shin/",
  github: "https://github.com/influxtion",
};
