"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/button-link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden pt-28 sm:min-h-[720px] lg:min-h-[760px]">
      <div className="absolute inset-0 grid-texture opacity-35" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-warm/20 to-transparent" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-2/14 blur-3xl" />
      <div className="container-shell relative z-10 grid items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="signal-mark mb-6" aria-hidden="true" />
          <p className="eyebrow">Social Presence / Managed With Taste</p>
          <h1 className="hero-display mt-5 text-balance text-5xl leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            Your brand should feel alive where people actually pay attention.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            Sociel manages modern Instagram, LinkedIn, short-form, editing,
            design, and publishing systems for brands that need presence with
            consistency and cultural fluency.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">Start A Project</ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative mx-auto aspect-[1.02] w-full max-w-[600px]"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-line bg-white/[0.04] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.38)]">
            <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-line bg-[#181713]">
              <div className="absolute inset-0 grid-texture opacity-25" />
              <div className="absolute left-7 top-7 z-20 flex items-center gap-2 rounded-full border border-line bg-background/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-warm" />
                Selected Work
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-8 top-24 z-10 aspect-[4/5] w-[43%] overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#eee8dd] p-2 shadow-[0_26px_90px_rgba(0,0,0,0.36)]"
              >
                <div className="relative h-full overflow-hidden rounded-[1rem]">
                  <Image
                    src="/work/marketing-101.webp"
                    alt="Marketing strategy carousel design"
                    fill
                    sizes="260px"
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-8 top-16 z-0 aspect-[4/5] w-[38%] overflow-hidden rounded-[1.2rem] border border-white/12 bg-[#eee8dd] p-2 opacity-95 shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              >
                <div className="relative h-full overflow-hidden rounded-[0.9rem]">
                  <Image
                    src="/work/positioning-reset.webp"
                    alt="Positioning content post design"
                    fill
                    sizes="230px"
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0], y: [0, -5, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-14 z-20 aspect-square w-[42%] overflow-hidden rounded-[1.25rem] border border-white/14 bg-[#eee8dd] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.34)]"
              >
                <div className="relative h-full overflow-hidden rounded-[0.95rem]">
                  <Image
                    src="/work/clarity-direction.webp"
                    alt="Clarity-led social post design"
                    fill
                    sizes="250px"
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <div className="absolute bottom-8 left-8 z-30 hidden max-w-[15rem] rounded-[1.2rem] border border-line bg-background/75 p-4 backdrop-blur-md sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-warm">
                  Strategy / Design / Publishing
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Editorial posts built to look sharp, read clearly, and feel consistent across the feed.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
