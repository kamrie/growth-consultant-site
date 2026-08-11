import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/sections/CTABand";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Browse recent case studies that show how digital products, marketing systems, and operations support helped businesses grow.",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              CASE STUDIES
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Real Projects, Real Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              A closer look at how practical product and operations work can create smoother experiences and stronger growth outcomes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width={900}
                    height={560}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {caseStudy.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                    {caseStudy.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                    {caseStudy.summary}
                  </p>
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-accent dark:text-white"
                  >
                    Read Case Study
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
