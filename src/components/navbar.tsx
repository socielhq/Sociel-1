"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 90],
    ["rgba(17,17,15,0)", "rgba(17,17,15,0.86)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 90],
    ["rgba(244,239,229,0)", "rgba(244,239,229,0.12)"]
  );

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
    >
      <nav className="container-shell flex h-20 items-center justify-between">
        <Link href="#" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/[0.04] text-sm font-bold text-warm">
            sc
          </span>
          <span className="text-lg font-semibold tracking-normal">sociel</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-line bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-white/[0.06] hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://instagram.com/sociel.in"
            target="_blank"
            rel="noreferrer"
            aria-label="Sociel Instagram"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.04] text-muted transition hover:-translate-y-0.5 hover:border-warm/45 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="focus-ring rounded-full bg-surface px-4 py-2 text-sm font-semibold text-surface-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_35px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-warm"
          >
            start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.04] md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/96 md:hidden"
          >
            <div className="container-shell flex h-20 items-center justify-between">
              <span className="text-lg font-semibold">sociel</span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.04]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="container-shell pt-8"
            >
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-2xl border border-line bg-white/[0.035] px-5 py-4 text-xl font-semibold text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="focus-ring mt-5 flex min-h-12 items-center justify-center rounded-full bg-surface px-5 text-sm font-semibold text-surface-ink"
              >
                start a project
              </Link>
              <Link
                href="https://instagram.com/sociel.in"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="focus-ring mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white/[0.04] px-5 text-sm font-semibold text-foreground"
              >
                <Instagram className="h-4 w-4" />
                @sociel.in
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
