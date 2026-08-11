export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "carland",
    title: "CarLand",
    category: "Real Estate Platform",
    description:
      "A modern real estate platform for the Nigerian market — property listings, agent dashboards, and posting tools built for speed and usability.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router"],
    image: "/projects/carland-placeholder.jpg",
    liveUrl: "https://carland.com",
    featured: true,
  },
  {
    slug: "kampay",
    title: "KamPay",
    category: "Fintech / VTU Platform",
    description:
      "A VTU fintech web platform with secure wallet funding, JWT authentication, and a dynamic pricing engine built for real transaction volume.",
    techStack: ["Node.js", "Express", "MySQL", "Tailwind CSS"],
    image: "/projects/kampay-placeholder.jpg",
    featured: true,
  },
];
