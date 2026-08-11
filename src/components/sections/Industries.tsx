const industries = [
  "Real Estate",
  "Fintech",
  "Hospitality & Short-let",
  "Wellness",
  "Retail & SME",
];

export function Industries() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Industries
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Industries I&apos;ve Worked With
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
