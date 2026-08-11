export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  features: string[];
  techStack?: string[];
  externalLink?: string;
}
