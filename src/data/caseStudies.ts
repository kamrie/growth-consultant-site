import { projects } from "@/data/projects";

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  problem: string;
  approach: string;
  results: string[];
  techStack?: string[];
  image: string;
  liveUrl?: string;
}

const carlandProject = projects.find((project) => project.slug === "carland");
const kampayProject = projects.find((project) => project.slug === "kampay");

export const caseStudies: CaseStudy[] = [
  {
    slug: "carland",
    title: carlandProject?.title ?? "CarLand",
    category: carlandProject?.category ?? "Real Estate Platform",
    client: "CarLand",
    summary:
      "A modern property marketplace designed to help agents list faster and buyers browse with less friction.",
    problem:
      "The business needed a stronger digital presence for property discovery, while reducing the friction of listing management for agents and improving trust in the platform experience.",
    approach:
      "We built a polished, fast-loading experience around property discovery, agent workflows, and a clear content structure so buyers and agents could move through the journey with less confusion.",
    results: [
      "Improved the browsing experience for property seekers with a clearer, more responsive interface",
      "Streamlined property listing workflow for agents with a simpler publishing path",
      "Created a stronger foundation for future growth through a scalable, modern frontend",
    ],
    techStack: carlandProject?.techStack ?? ["React", "Vite", "Tailwind CSS"],
    image: "/projects/carland-placeholder.svg",
    liveUrl: carlandProject?.liveUrl,
  },
  {
    slug: "kampay",
    title: kampayProject?.title ?? "KamPay",
    category: kampayProject?.category ?? "Fintech / VTU Platform",
    client: "KamPay",
    summary:
      "A digital wallet and VTU platform experience built to support reliable transactions and clearer user journeys.",
    problem:
      "The product needed a cleaner user experience for transactions and wallet activity while keeping the platform reliable enough for real usage at scale.",
    approach:
      "We shaped the platform around dependable flows, simplified transaction steps, and a cleaner interface so users could complete actions with greater confidence and fewer bottlenecks.",
    results: [
      "Improved transaction clarity through a more structured and user-friendly experience",
      "Reduced friction in wallet-related actions with clearer flows and messaging",
      "Created a stronger base for future feature expansion and product reliability",
    ],
    techStack: kampayProject?.techStack ?? ["Node.js", "Express", "MySQL", "Tailwind CSS"],
    image: "/projects/kampay-placeholder.svg",
    liveUrl: kampayProject?.liveUrl,
  },
];
