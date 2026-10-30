import { BellOff, CircleQuestionMark, Shuffle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { capitalizeFirst, splitFirstSentence } from "@/components/ui/text";
import { problem } from "@/content/landing";

const icons = [BellOff, CircleQuestionMark, Shuffle] as const;

/** 4.2 Problema: H2 en 5 columnas, tarjetas apiladas en 7, cierre + CTA de mitad. */
export function Problem() {
  const titleId = headingId(problem.id);
  const [closingFirst, closingSecond] = splitFirstSentence(problem.closing);

  return (
    <section
      id={problem.id}
      aria-labelledby={titleId}
      className="scroll-mt-24 bg-cream-deep py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <SectionHeading id={titleId} title={problem.title} intro={problem.intro} />
          </Reveal>

          <ul className="grid gap-4 md:col-span-7">
            {problem.cards.map((card, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Reveal
                  as="li"
                  key={card.title}
                  delay={index * 0.1}
                  className="flex gap-4 rounded-card border border-line bg-card p-5 md:gap-5 md:p-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{card.title}</h3>
                    <p className="mt-1 text-muted">{capitalizeFirst(card.description)}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal className="mt-14 md:mt-20">
          <p className="max-w-3xl text-2xl font-bold text-ink md:text-3xl" style={{ lineHeight: 1.25 }}>
            {closingFirst}
            {closingSecond ? (
              <>
                {" "}
                <span className="text-brand">{closingSecond}</span>
              </>
            ) : null}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <CtaButton href={problem.cta.href} className="w-full sm:w-auto">
              {problem.cta.label}
            </CtaButton>
            <p className="text-base text-muted">{problem.ctaMicrocopy}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
