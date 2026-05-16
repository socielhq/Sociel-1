import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { work } from "@/lib/content";
import Image from "next/image";

export function Work() {
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
