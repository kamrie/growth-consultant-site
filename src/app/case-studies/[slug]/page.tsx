import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, TrendingUp, type LucideIcon } from "lucide-react";
import { CTABand } from "@/components/sections/CTABand";
import { caseStudies } from "@/data/caseStudies";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const iconMap: Record<string, LucideIcon> = {
  CheckCircle2,
  TrendingUp,
};

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {caseStudy.category}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {caseStudy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                {caseStudy.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Client: {caseStudy.client}
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={900}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Problem
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
              The business challenge
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              {caseStudy.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Approach
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
              What was built and why
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              {caseStudy.approach}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-accent/10 to-white p-8 shadow-sm dark:border-slate-800 dark:from-accent/20 dark:to-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Results
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
              Directionally strong outcomes that support growth
            </h2>
            <ul className="mt-8 space-y-4">
              {caseStudy.results.map((result) => {
                const Icon = iconMap.CheckCircle2 ?? CheckCircle2;

                return (
                  <li key={result} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {result}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {caseStudy.techStack && caseStudy.techStack.length > 0 ? (
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Tech Stack
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {caseStudy.techStack.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <CTABand />
    </main>
  );
}
