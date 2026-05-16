import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="section-pad relative overflow-hidden bg-[#15140f]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm/20 to-transparent" />
      <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-accent-2/8 blur-3xl" />
      <div className="container-shell">
        <span className="signal-mark mx-auto mb-6" aria-hidden="true" />
        <SectionHeading
          eyebrow="selected work"
          title="placeholder case studies with the right amount of signal"
          description="Elegant sample studies show how the studio thinks across platforms, visuals, and execution without relying on generic portfolio noise."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {work.map((item, index) => (
            <AnimatedSection
              key={item.number}
              delay={index * 0.06}
              className="signal-frame tactile-card group relative min-h-[430px] overflow-hidden rounded-[1.5rem] border border-line bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-warm/35"
            >
              <div className="absolute inset-x-5 top-5 h-56 overflow-hidden rounded-[1.15rem] border border-line bg-[#1e1d18] transition duration-500 group-hover:scale-[1.015]">
                <div className="absolute inset-0 grid-texture opacity-30" />
                <div className="absolute left-6 top-7 h-28 w-24 rounded-3xl bg-surface/90 shadow-[0_18px_50px_rgba(0,0,0,0.2)]" />
                <div className="absolute right-7 top-10 h-36 w-28 rounded-full border border-warm/30 bg-warm/8" />
                <span className="signal-mark absolute right-8 top-8 scale-75" aria-hidden="true" />
                <div className="absolute bottom-6 left-7 right-7 h-16 rounded-2xl bg-white/[0.08]" />
                <div className="absolute bottom-11 left-12 h-2 w-28 rounded-full bg-warm/50" />
                <div className="absolute bottom-7 left-12 h-2 w-44 rounded-full bg-white/14" />
              </div>
              <div className="relative z-10 mt-64">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-5xl font-semibold tracking-normal text-warm/80">
                    {item.number}
                  </span>
                  <span className="max-w-[12rem] text-right text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
