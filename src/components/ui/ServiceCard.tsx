import Link from "next/link";
import {
  Briefcase,
  Calculator,
  Code2,
  Headset,
  Megaphone,
  Palette,
  TrendingUp,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types/service";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Calculator,
  Code2,
  Headset,
  Megaphone,
  Palette,
  TrendingUp,
  Video,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Briefcase; // Fallback to Briefcase icon if the specified icon is not found

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:group-hover:bg-slate-800">
        <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
      </div>

      <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {service.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {service.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}
