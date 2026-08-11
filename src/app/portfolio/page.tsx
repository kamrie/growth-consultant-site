'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { portfolioItems } from '@/data/portfolio';
import { services } from '@/data/services';

const serviceCategories = services.map((service) => service.slug);

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

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-white px-6 py-24 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            PORTFOLIO
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A curated collection of work across strategy, execution, and growth support.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === 'all'
                ? 'bg-accent text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>

          {serviceCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {category.replace(/-/g, ' ')}
            </button>
          ))}
        </div>

        {portfolioItems.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Portfolio entries will appear here once real work is added.
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.category.replace(/-/g, ' ')}
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <Link
                    href={item.linkUrl}
                    className="mt-6 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    {getLinkLabel(item.linkType)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
