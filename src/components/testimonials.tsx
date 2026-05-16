import { AnimatedSection } from "@/components/animated-section";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="container-shell">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <AnimatedSection className="signal-frame tactile-card rounded-[1.5rem] border border-line bg-surface p-8 text-surface-ink">
            <span className="signal-mark mb-6 opacity-70 [filter:invert(1)]" aria-hidden="true" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-surface-ink/55">
              Client Notes
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal sm:text-4xl">
              Trusted by brands that need social content to feel clear,
              consistent, and worth paying attention to.
            </h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.name}
                delay={index * 0.05}
                className="signal-frame tactile-card rounded-[1.5rem] border border-line bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-warm/35 hover:bg-white/[0.06]"
              >
                <p className="text-lg leading-8 text-foreground">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-8 text-sm font-semibold text-warm">{testimonial.name}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
