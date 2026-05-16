"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { work } from "@/lib/content";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

export function Work() {
  const [activeWork, setActiveWork] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const selectedWork = useMemo(
    () => work.find((item) => item.number === activeWork),
    [activeWork]
  );
  const slides = selectedWork?.carousel ?? [];
  const frameSize =
    selectedWork?.carouselAspect === "square"
      ? "aspect-square w-[min(82vw,520px)]"
      : "aspect-[4/5] w-[min(78vw,430px)]";

  function openCarousel(number: string) {
    setActiveWork(number);
    setActiveSlide(0);
  }

  function closeCarousel() {
    setActiveWork(null);
    setActiveSlide(0);
  }

  function showPreviousSlide() {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  }

  function showNextSlide() {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  }

  return (
    <section id="work" className="section-pad relative overflow-hidden bg-[#15140f]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm/20 to-transparent" />
      <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-accent-2/8 blur-3xl" />
      <div className="container-shell">
        <span className="signal-mark mx-auto mb-6" aria-hidden="true" />
        <SectionHeading
          eyebrow="Selected Work"
          title="Social Posts Shaped Like Strategic Assets"
          description="A look at content systems that turn simple ideas into polished, platform-ready moments with a clear point of view."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {work.map((item, index) => (
            <AnimatedSection
              key={item.number}
              delay={index * 0.06}
              className="signal-frame tactile-card group relative overflow-hidden rounded-[1.5rem] border border-line bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1.5 hover:border-warm/35 sm:p-5"
            >
              <div
                role={item.carousel ? "button" : undefined}
                tabIndex={item.carousel ? 0 : undefined}
                onClick={() => (item.carousel ? openCarousel(item.number) : null)}
                onKeyDown={(event) => {
                  if (!item.carousel) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openCarousel(item.number);
                  }
                }}
                className={item.carousel ? "cursor-pointer outline-none" : undefined}
                aria-label={item.carousel ? `Open ${item.title} carousel` : undefined}
              >
                <div className="relative overflow-hidden rounded-[1.15rem] border border-line bg-[#1e1d18] p-3 transition duration-500 group-hover:scale-[1.012]">
                  <div className="absolute inset-0 grid-texture opacity-20" />
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-warm/10 blur-2xl" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[0.95rem] border border-white/10 bg-[#eee8dd] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain transition duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-background/70 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">
                    {item.number}
                  </div>
                  {item.carousel ? (
                    <div className="absolute bottom-6 right-6 rounded-full border border-white/15 bg-background/75 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-warm backdrop-blur-sm">
                      View Carousel
                    </div>
                  ) : null}
                </div>
                <div className="relative z-10 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="signal-mark scale-75" aria-hidden="true" />
                    <span className="max-w-[12rem] text-right text-xs font-bold uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-normal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {selectedWork && slides.length > 0 ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/88 px-4 py-8 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedWork.title} carousel preview`}
        >
          <button
            type="button"
            aria-label="Close carousel preview"
            onClick={closeCarousel}
            className="focus-ring absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.06] text-foreground transition hover:border-warm/45 hover:bg-white/[0.1]"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid w-full max-w-4xl items-center gap-5">
            <div className="mx-auto text-center">
              <p className="eyebrow">Selected Work</p>
              <h3 className="mt-2 text-xl font-semibold tracking-normal sm:text-2xl">
                {selectedWork.title}
              </h3>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={showPreviousSlide}
                className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.06] text-foreground transition hover:border-warm/45 hover:bg-white/[0.1]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div
                className={`relative max-h-[72vh] overflow-hidden rounded-[1.25rem] border border-white/12 bg-[#eee8dd] shadow-[0_28px_100px_rgba(0,0,0,0.42)] ${frameSize}`}
              >
                <Image
                  src={slides[activeSlide]}
                  alt={`${selectedWork.title} slide ${activeSlide + 1}`}
                  fill
                  sizes="(min-width: 768px) 520px, 82vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                aria-label="Next slide"
                onClick={showNextSlide}
                className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.06] text-foreground transition hover:border-warm/45 hover:bg-white/[0.1]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition ${
                    activeSlide === index ? "w-8 bg-warm" : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
