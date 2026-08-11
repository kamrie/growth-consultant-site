import {
  Layers,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Zap,
  ShieldCheck,
  TrendingUp,
};

const valuePropositions = [
  {
    icon: "Layers",
    title: "Full-Stack Capability",
    description:
      "Handle web, marketing, content, and operations under one roof instead of coordinating multiple vendors.",
  },
  {
    icon: "Zap",
    title: "Faster Execution",
    description:
      "Move faster without handoff delays or miscommunication between separate freelancers.",
  },
  {
    icon: "ShieldCheck",
    title: "Consistent Quality",
    description:
      "One person stays accountable for the full outcome, without passing responsibility between contractors.",
  },
  {
    icon: "TrendingUp",
    title: "Growth-Focused",
    description:
      "Every deliverable connects back to measurable business outcomes, not vanity metrics.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why Work With Me
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            One Partner, Not Five Freelancers
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {valuePropositions.map((proposition) => {
            const Icon = iconMap[proposition.icon];

            return (
              <article key={proposition.title} className="max-w-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {proposition.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-400">
                  {proposition.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
