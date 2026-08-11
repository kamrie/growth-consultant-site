import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Monitor, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import type { Metadata } from 'next';

const iconMap: Record<string, LucideIcon> = {
  Code2: Monitor,
  Megaphone: Sparkles,
  TrendingUp: Sparkles,
  Video: Sparkles,
  Palette: Sparkles,
  Briefcase: Sparkles,
  Headset: Sparkles,
  Calculator: Sparkles,
};

const steps = [
  'Discovery Call',
  'Proposal & Planning',
  'Execution',
  'Delivery & Support',
];

const getLinkLabel = (linkType: string) => {
  switch (linkType) {
    case 'drive':
      return 'View on Drive';
    case 'website':
      return 'Visit Website';
    case 'social':
      return 'View Post';
    default:
      return 'View Project';
  }
};

export async function generateStaticParams() { // Generate static params for all service pages
  return services.map((service) => ({ slug: service.slug })); // Return an array of objects with the slug for each service
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}
// -----------------------------------------------
interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params; // Get the slug from the params
  const service = services.find((item) => item.slug === slug); // Find the service that matches the slug

  if (!service) {
    notFound();
  }

  const relatedWork = portfolioItems.filter((item) => item.category === service.slug); // Filter portfolio items to find those that match the service category
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                <Icon size={18} aria-hidden="true" className="text-accent" />
                {service.title}
              </div>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                {service.shortDescription}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Quick summary
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <p>
                  Expert support for businesses that want growth, quality execution, and simplified operations.
                </p>
                <p>
                  Personalized work designed to move your revenue, audience, or systems ahead with fewer handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              What&apos;s Included
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              What you get with this service
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Check size={18} aria-hidden="true" />
                </span>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.techStack ? (
        <section className="bg-white py-24 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Tech Stack
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Tools and frameworks used
              </h2>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {service.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              How It Works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              A clear process from start to finish
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent font-semibold">
                  {index + 1} 
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{step}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  A simple phase to keep the project moving forward with clarity and accountability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedWork.length > 0 ? (
        <section className="bg-white py-24 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Related Work
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Relevant portfolio examples
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {relatedWork.map((item) => (
                <article key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
                  >
                    {getLinkLabel(item.linkType)}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Ready to get started?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Let&apos;s turn your next project into a result.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {service.externalLink ? (
                <a
                  href={service.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
                >
                  View My Developer Portfolio
                </a>
              ) : null}
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
