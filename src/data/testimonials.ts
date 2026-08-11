export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mira Bella Jewelry",
    role: "Business Owner",
    company: "Women's Jewelry Store",
    quote:
      "Chibuzor built a responsive e-commerce website that met our requirements and was easy to manage. He communicated well throughout the project and delivered a professional result.",
  },
   {
    name: "Marketing Team",
    role: "Real Estate Marketing",
    company: "PX Property Hub",
    quote:
      "Chibuzor consistently delivered high-quality content and marketing support that contributed to significant growth in our online presence and website traffic. His creativity and reliability made him a valuable part of our team.",
  },
  {
    name: "Healthcare Content Lead",
    role: "Medical Brand Manager",
    company: "Neomerit Metrohealth",
    quote:
      "Working with Chibuzor was seamless. He produced engaging video content, maintained our brand quality, and was always responsive to feedback and deadlines.",
  },
];
