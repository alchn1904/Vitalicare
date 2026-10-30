import { StepAlarm } from "@/components/illustrations/step-alarm";
import { StepConfirm } from "@/components/illustrations/step-confirm";
import { StepNotify } from "@/components/illustrations/step-notify";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { howItWorks } from "@/content/landing";

const illustrations = [StepAlarm, StepConfirm, StepNotify] as const;

/** Círculo del número en el color de su compartimento (contrastes de SPEC §8). */
const numberStyles = [
  "bg-morning text-ink",
  "bg-afternoon text-ink",
  "bg-night text-white",
] as const;

/** 4.3 Cómo funciona: tres filas en Z con ilustración por paso. */
export function HowItWorks() {
  const titleId = headingId(howItWorks.id);

  return (
    <section id={howItWorks.id} aria-labelledby={titleId} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading id={titleId} title={howItWorks.title} intro={howItWorks.intro} />
        </Reveal>

        <ol className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          {howItWorks.steps.map((step, index) => {
            const Illustration = illustrations[index % illustrations.length];
            const reversed = index % 2 === 1;
            return (
              <li key={step.number} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
                <Reveal className={reversed ? "md:order-2" : ""}>
                  <span
                    aria-hidden="true"
                    className={`flex size-14 items-center justify-center rounded-full text-2xl font-bold ${
                      numberStyles[index % numberStyles.length]
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-ink md:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-[32rem] text-muted">{step.description}</p>
                </Reveal>
                <Reveal delay={0.1} className={reversed ? "md:order-1" : ""}>
                  <div className="flex aspect-[4/3] items-center justify-center rounded-card bg-accent p-6 md:p-8">
                    <Illustration label={step.imageAlt} className="h-full w-full" />
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
