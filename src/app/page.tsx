import { CTABand } from "@/components/sections/CTABand";
import { ContactForm } from "@/components/sections/ContactForm";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";

export default function Home() {
  return (
    <main>
      <Hero name="Chibuzor Ezeokoli" />
      <ServicesOverview />
      <WhyWorkWithMe />
      <FeaturedProjects />
      <Industries />
      <Testimonials />
      <CTABand />
      <ContactForm />
    </main>
  );
}
