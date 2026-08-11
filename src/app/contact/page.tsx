import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kamdra Digital Group — let's build something great.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">CONTACT</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Let's Build Something Great
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Share a few details about your project and I&apos;ll get back with a clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">ifedikeze@gmail.com</p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Location</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Nigeria</p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Typical response time</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">1–3 business days</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
