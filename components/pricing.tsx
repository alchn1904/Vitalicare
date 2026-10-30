import { Reveal } from "@/components/motion/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { pricing } from "@/content/landing";

/** 4.7 Precio de referencia. Sin urgencia ni descuentos. */
export function Pricing() {
  const titleId = headingId(pricing.id);

  return (
    <section id={pricing.id} aria-labelledby={titleId} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading id={titleId} title={pricing.title} intro={pricing.intro} />
        </Reveal>

        <ul className="mt-12 grid max-w-4xl gap-4 md:mt-16 md:grid-cols-2">
          {pricing.cards.map((card, index) => (
            <Reveal
              as="li"
              key={card.label}
              delay={index * 0.1}
              className="rounded-card border border-line bg-card p-6 md:p-8"
            >
              <p className="inline-flex rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">
                {pricing.badge}
              </p>
              <h3 className="mt-5 text-xl font-bold text-ink">{card.label}</h3>
              <p className="mt-2 text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] font-bold leading-tight text-ink">
                {card.price}
              </p>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-base text-muted">{pricing.note}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <CtaButton href={pricing.cta.href} className="w-full sm:w-auto">
            {pricing.cta.label}
          </CtaButton>
          <p className="text-base text-muted">{pricing.ctaMicrocopy}</p>
        </div>
      </div>
    </section>
  );
}
