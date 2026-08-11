import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured); // Filter the projects to only include those with featured: true

  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Featured Work
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Projects That Deliver Results
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => {
            const cardContent = (
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );

            return project.liveUrl ? ( // If the project has a liveUrl, wrap the card in a Link component
              <Link key={project.slug} href={project.liveUrl} className="block"> 
                {cardContent}
              </Link>
            ) : ( //
              <div key={project.slug}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
