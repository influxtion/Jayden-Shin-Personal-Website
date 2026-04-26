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
    copy: "Managed and maintained web and program-based algorithmic designs, overseeing over $65,000 of assets. Facilitated development of over 20% yearly returns, working with the Ivey AEO student executive team.",
    href: "https://paradymprivatecapital.com/portfolio",
  },
  {
    year: "apr 2025 / now",
    role: "Volunteer IT Director",
    org: "Adopt Our Community",
    location: "",
    copy: "Managed all web development for a non-profit spanning BC, Saskatchewan, Ontario, and Washington. Directed tech operations and administrative tasks for 10+ chapters, collaborating with 19+ partners including hospitals, First Nations, and city governments.",
    href: "https://www.adoptourcommunity.org/",
  },
  {
    year: "jun / oct 2024",
    role: "Software Development Intern",
    org: "RookBook Sports",
    location: "",
    copy: "Worked on the website for a football management agency in Southeast Asia under senior developers. Mentored in front-end and back-end development and Flutter programming.",
  },
];

export const projects: Project[] = [
  {
    title: "Newman Barbershop",
    meta: "Concept design · Barbershop · 2026",
    href: "https://newman-barbershop.vercel.app/",
    description:
      "concept design for a barbershop site. just a personal exploration — not a real client, no affiliation. wanted to play with a clean editorial layout.",
  },
  {
    title: "Oakridge Barbers",
    meta: "Concept design · Barbershop · 2026",
    href: "https://oakridge-barbers.vercel.app/",
    description:
      "another barbershop concept design. fictional brand, built to experiment with type, motion, and a different visual direction than newman.",
  },
  {
    title: "StatRift",
    meta: "League of Legends · Mini-games · 2026",
    href: "https://www.statrift.com/",
    description:
      "Was doomscrolling tiktok and saw a bunch of league games, so i made a website for it instead of pushing masters. i'm never leaving plat lol.",
    preview: "/statrift.webp",
    previewAlt: "StatRift homepage showing stat builder, fog of war, and higher or lower game modes.",
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

export const skills = ["Java", "JavaScript", "Dart", "Python"];

export const meta = {
  name: "Jayden Shin",
  bio: "Incoming CS student at Waterloo. I build things, really love food, and somehow ended up at the UN. Looking to get into the start-up and tech space.",
  year: "2026",
  email: "jaydenshin2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/jayden-shin/",
  github: "https://github.com/influxtion",
};
