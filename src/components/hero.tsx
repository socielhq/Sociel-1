"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/button-link";

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
          <p className="eyebrow">social presence / managed with taste</p>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            your brand should feel alive where people actually pay attention.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            Sociel manages modern Instagram, LinkedIn, short-form, editing,
            design, and publishing systems for brands that need presence with
            consistency and cultural fluency.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">start a project</ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              view services
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative mx-auto aspect-[1.02] w-full max-w-[600px]"
        >
          <div className="signal-frame absolute inset-0 rounded-[2rem] border border-line bg-white/[0.04] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.38)]">
            <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-line bg-[#181713]">
              <div className="absolute inset-0 grid-texture opacity-25" />
              <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full border border-line bg-white/[0.05] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                <span className="h-2 w-2 rounded-full bg-warm" />
                live system
              </div>
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-8 top-24 h-40 w-36 rounded-[2rem] border border-warm/26 bg-warm/12"
              />
              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-10 top-14 h-56 w-40 rounded-full border border-accent-2/45 bg-accent-2/8"
              />
              <div className="absolute left-12 top-48 h-28 w-[58%] rounded-[1.35rem] border border-line bg-white/[0.055] p-4 shadow-2xl">
                <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  <span>content queue</span>
                  <span>12 assets</span>
                </div>
                <div className="mt-5 grid grid-cols-5 gap-2">
                  {[70, 44, 92, 58, 76].map((height, index) => (
                    <div key={index} className="flex h-12 items-end rounded-full bg-white/[0.08] p-1">
                      <motion.span
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.75, delay: 0.42 + index * 0.08 }}
                        className="block w-full rounded-full bg-warm/80"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 h-40 rounded-[1.35rem] border border-line bg-surface p-5 text-surface-ink shadow-[0_18px_70px_rgba(0,0,0,0.24)]">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-surface-ink/55">
                  <span>weekly cadence</span>
                  <span>04 / 12</span>
                </div>
                <div className="mt-5 grid grid-cols-[1.1fr_0.9fr] gap-3">
                  <div className="rounded-2xl bg-[#d9d0c0] p-3">
                    <div className="h-2 w-20 rounded-full bg-[#34342d]/75" />
                    <div className="mt-8 h-2 rounded-full bg-[#34342d]/25" />
                    <div className="mt-2 h-2 w-2/3 rounded-full bg-[#34342d]/20" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl bg-[#34342d] p-2">
                      <div className="h-full rounded-xl border border-warm/30" />
                    </div>
                    <div className="rounded-2xl bg-[#c4b494] p-2">
                      <div className="h-full rounded-full bg-[#34342d]/30" />
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-8 top-40 w-52 rounded-2xl border border-line bg-[#23221d] p-4 shadow-2xl"
              >
                <div className="h-2 w-16 rounded-full bg-warm/70" />
                <div className="mt-5 space-y-2">
                  <div className="h-2 rounded-full bg-white/18" />
                  <div className="h-2 w-2/3 rounded-full bg-white/12" />
                </div>
                <div className="mt-5 flex gap-2">
                  <div className="h-12 flex-1 rounded-xl bg-accent-2/35" />
                  <div className="h-12 flex-1 rounded-xl bg-warm/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
