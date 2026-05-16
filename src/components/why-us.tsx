import { AnimatedSection } from "@/components/animated-section";
import { reasons } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="approach" className="section-pad relative overflow-hidden">
      <div className="absolute bottom-16 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-2/30 to-transparent" />
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <AnimatedSection>
          <span className="signal-mark mb-6" aria-hidden="true" />
          <p className="eyebrow">why brands work with us</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
            management with taste, structure, and enough cultural awareness to matter.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            The goal is not to post more for the sake of volume. It is to build
            a presence that feels considered, repeatable, and recognizably yours.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection
                key={reason.title}
                delay={index * 0.05}
                className="signal-frame tactile-card group rounded-[1.35rem] border border-line bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-warm/35 hover:bg-white/[0.06]"
              >
                <Icon className="h-5 w-5 text-warm transition duration-300 group-hover:scale-110" />
                <h3 className="mt-6 text-xl font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{reason.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
