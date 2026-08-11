"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  name?: string;
  imageSrc?: string;
}

export function Hero({
  name = "[Your Name]",
  imageSrc = "/hero-photo.jpg",
}: HeroProps) {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#0A0A0A] px-6 py-24 text-center sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Growth &amp; Operations Consultant
            </div>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">Engineering</span>
              <span className="block text-accent">Business Growth</span>
            </h1>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-8 text-gray-400 sm:text-xl">
              I&apos;m {name}. I help businesses grow through websites, marketing,
              content, and operations — one partner instead of five freelancers.
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              View Services
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-[360px] lg:max-w-[420px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-white/5 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)] shadow-accent/20">
            <Image
              src={imageSrc}
              alt={name}
              width={640}
              height={760}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
