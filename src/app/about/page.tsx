import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Calculator,
  Code2,
  Globe2,
  Headset,
  Megaphone,
  MessageCircleMore,
  Palette,
  Sparkles,
  TrendingUp,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { CTABand } from "@/components/sections/CTABand";
import { services } from "@/data/services";

export function generateMetadata(): Metadata {
  return {
    title: "About",
    description:
      "Learn about Kamdra Digital Group, the solo founder behind the work, and the growth-focused consulting approach behind every service.",
  };
}

const serviceIcons: Record<string, LucideIcon> = {
  Code2,
  Megaphone,
  TrendingUp,
  Video,
  Palette,
  Briefcase,
  Headset,
  Calculator,
};

const principles = [
  {
    title: "Direct communication, no middlemen",
    description:
      "You get clear updates and direct access from the person doing the work.",
    icon: MessageCircleMore,
  },
  {
    title: "Systems-first thinking",
    description:
      "Every website, campaign, and process is built to make growth easier to manage.",
    icon: Workflow,
  },
  {
    title: "Built for African and global markets alike",
    description:
      "Solutions are shaped for real-world conditions, audiences, and business goals.",
    icon: Globe2,
  },
  {
    title: "Focused on one metric: growth",
    description:
      "Web development, marketing, content, operations, support, and accounting all support the same outcome.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              ABOUT
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              The Person Behind the Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              I’m a solo founder building under Kamdra Digital Group, helping businesses grow with a practical mix of technology, strategy, content, and operations.
            </p>
          </div>
        </div>
      </section>
  
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <Image
              src="/about-photo.svg"
              alt="Portrait illustration of the founder behind Kamdra Digital Group"
              width={960}
              height={1100}
              priority
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A builder with a growth and operations lens
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400">
              <p>
                I&apos;m a solo founder with a strong entrepreneurial background and a technical mindset, building services that help businesses move forward without unnecessary complexity.
              </p>
              <p>
                Under Kamdra Digital Group, I bring together web development, marketing, content, operations, support, and accounting into one connected offering for clients who want fewer handoffs and more momentum.
              </p>
              <p>
                Based in Nigeria, I work with founders and teams who need thoughtful execution that fits both local realities and global expectations.
              </p>
              <p>
                My positioning is simple: I&apos;m a Growth &amp; Operations Consultant. Everything I do — from websites and content to support and finance — exists to move one metric forward: business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Skills &amp; Expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A compact view of the work I offer
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] ?? Sparkles;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {service.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              How I Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Principles that shape every engagement
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
