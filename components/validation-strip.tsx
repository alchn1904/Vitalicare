import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { validation } from "@/content/landing";

/**
 * 4.6 Validación. Solo se monta si `showValidation` (NEXT_PUBLIC_SHOW_VALIDATION=true).
 * Sin testimonios ni cifras externas; la nota del estudio es obligatoria.
 */
export function ValidationStrip() {
  const titleId = headingId(validation.id);

  return (
    <section id={validation.id} aria-labelledby={titleId} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading id={titleId} title={validation.title} intro={validation.intro} />
        </Reveal>

        <ul className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {validation.stats.map((stat, index) => (
            <Reveal as="li" key={stat.label} delay={index * 0.1} className="border-t border-line pt-6">
              <p className="text-[clamp(2.75rem,2rem+3vw,4rem)] font-bold leading-none text-brand">
                <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-base text-muted">{validation.note}</p>
      </div>
    </section>
  );
}
