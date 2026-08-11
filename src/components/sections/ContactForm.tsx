'use client';

import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitted(true);
        setValues(initialValues);
      }
    } catch (error) {
      console.error('Form submission failed', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-6 py-24 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10 lg:p-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            GET IN TOUCH
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Share a few details about your goals and I&apos;ll get back to you with a thoughtful next step.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900/60 dark:bg-emerald-950/40">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Thanks for reaching out.
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-400">
              Your message is on its way. I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form className="mt-10 grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="mb-2 block">Name</span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="mb-2 block">Company</span>
              <input
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="mb-2 block">Message</span>
              <textarea
                name="message"
                rows={6}
                value={values.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </label>

            <div className="flex items-center justify-start">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
