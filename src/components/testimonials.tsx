import { AnimatedSection } from "@/components/animated-section";
import { clientLogos, testimonials } from "@/lib/content";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="container-shell">
        <div className="relative mb-10 overflow-hidden border-y border-line py-4">
          <div className="logo-marquee flex w-max gap-4">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`flex h-24 w-48 shrink-0 items-center justify-center border px-5 shadow-[0_14px_36px_rgba(0,0,0,0.14)] ${
                  client.tone === "dark"
                    ? "border-white/10 bg-[#14130f]"
                    : "border-[#d9cfbe] bg-[#f4efe5]"
                }`}
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={720}
                  height={360}
                  className="h-16 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
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
          <div className="grid gap-5 sm:grid-cols-2">
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
