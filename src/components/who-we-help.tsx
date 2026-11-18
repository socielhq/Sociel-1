import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { whoWeHelp } from "@/lib/content";

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="section-pad relative overflow-hidden bg-[#15140f]">
      <div className="absolute right-6 top-20 hidden h-48 w-24 rounded-full border border-line opacity-50 lg:block" />
      <div className="container-shell">
        <span className="signal-mark mx-auto mb-6" aria-hidden="true" />
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built For People Whose Expertise Is The Brand."
          description="Sociel turns specialist knowledge into a steady, recognizable presence on the channels that matter."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {whoWeHelp.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <AnimatedSection
                key={audience.title}
                delay={index * 0.05}
                className="signal-frame tactile-card group rounded-[1.35rem] border border-line bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-warm/35 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-[#20201b] text-warm transition duration-300 group-hover:scale-105 group-hover:border-warm/35">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-normal text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{audience.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
