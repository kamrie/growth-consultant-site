import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="w-full bg-[#0A0A0A] px-6 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Ready to Grow Your Business?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Let&apos;s make your website, marketing, and operations work together more smoothly so growth feels easier to manage.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Get in Touch
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
