export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  linkType: "drive" | "website" | "social";
  linkUrl: string;
};

export const portfolioItems: PortfolioItem[] = [ //
  {
    id: "web-development",
    title: "Growth-Focused Web Experience",
    category: "web-development",
    description: "A polished web build designed to clarify offerings and improve conversion paths.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "drive",
    linkUrl: "#",
  },
  {
    id: "social-media-management",
    title: "Community Growth Content System",
    category: "social-media-management",
    description: "A repeatable social setup that keeps content flowing and audience engagement steady.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "website",
    linkUrl: "#",
  },
  {
    id: "digital-marketing",
    title: "Conversion-Driven Campaign Launch",
    category: "digital-marketing",
    description: "A targeted marketing rollout built to create more qualified leads and stronger follow-up.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "social",
    linkUrl: "#",
  },
  {
    id: "video-editing",
    title: "Short-Form Video Content Pack",
    category: "video-editing",
    description: "A clean video series tailored for social platforms and fast-paced audience attention.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "drive",
    linkUrl: "#",
  },
  {
    id: "graphic-design",
    title: "Brand Visual Refresh",
    category: "graphic-design",
    description: "A consistent set of visual assets designed to strengthen brand recognition across channels.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "website",
    linkUrl: "#",
  },
  {
    id: "executive-assistant",
    title: "Operational Support Workflow",
    category: "executive-assistant",
    description: "An organized support system that helps leaders stay focused on high-impact priorities.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "social",
    linkUrl: "#",
  },
  {
    id: "customer-support",
    title: "Reliable Customer Care Experience",
    category: "customer-support",
    description: "A thoughtful support setup built to keep customer communication clear and responsive.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "drive",
    linkUrl: "#",
  },
  {
    id: "accounting-bookkeeping",
    title: "Financial Reporting Simplified",
    category: "accounting-bookkeeping",
    description: "A practical bookkeeping approach that brings clarity to reporting and decision-making.",
    thumbnail: "/portfolio/placeholder.jpg",
    linkType: "website",
    linkUrl: "#",
  },
];
