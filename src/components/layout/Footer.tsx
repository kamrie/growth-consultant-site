import Link from "next/link";
import { Globe, Mail, MessageCircle, Send } from "lucide-react";

const serviceLinks = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/social-media-management", label: "Social Media" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/video-editing", label: "Video Editing" },
  { href: "/services/graphic-design", label: "Graphic Design" },
  { href: "/services/executive-assistant", label: "Executive Assistant" },
  { href: "/services/customer-support", label: "Customer Support" },
  { href: "/services/accounting-bookkeeping", label: "Accounting & Bookkeeping" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: Globe },
  { href: "#", label: "GitHub", icon: Send },
  { href: "#", label: "Instagram", icon: MessageCircle },
  { href: "#", label: "Twitter", icon: Mail },
];

export function Footer({ name = "Your Name" }: { name?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] px-6 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{name}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-400">
              Growth &amp; Operations Consultant
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
              Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              © {year} {name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="transition hover:text-accent">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-accent">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
