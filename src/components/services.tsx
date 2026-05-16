import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="absolute left-6 top-24 hidden h-48 w-24 rounded-full border border-line opacity-50 lg:block" />
      <div className="container-shell">
        <span className="signal-mark mx-auto mb-6" aria-hidden="true" />
        <SectionHeading
          eyebrow="services"
          title="the operational layer behind a sharper social presence"
          description="Sociel supports the recurring work that keeps modern channels coherent, useful, and visually considered."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.title}
                delay={index * 0.04}
                className="signal-frame tactile-card group rounded-[1.35rem] border border-line bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-warm/35 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-[#20201b] text-warm transition duration-300 group-hover:scale-105 group-hover:border-warm/35">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-normal text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
