import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-[#15140f]">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-warm/6 blur-3xl" />
      <div className="container-shell">
        <span className="signal-mark mx-auto mb-6" aria-hidden="true" />
        <SectionHeading
          eyebrow="Process"
          title="A Calm Workflow For Channels That Never Really Sleep"
          description="A simple operating rhythm keeps the creative work clear, approved, and published without turning social into chaos."
        />
        <div className="relative grid gap-4 lg:grid-cols-5">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedSection
                key={step.title}
                delay={index * 0.05}
                className="signal-frame tactile-card group relative rounded-[1.25rem] border border-line bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-warm/35 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-warm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-muted transition duration-300 group-hover:text-warm" />
                </div>
                <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
