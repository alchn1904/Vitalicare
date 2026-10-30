import { ArrowDown, Check, MapPin } from "lucide-react";
import { DrawnUnderline } from "@/components/motion/drawn-underline";
import { PillboxIllustration } from "@/components/pillbox-illustration";
import { CtaButton } from "@/components/ui/cta-button";
import { hero } from "@/content/landing";

const HERO_TITLE_ID = "inicio-titulo";

/** 4.1 Hero. El H1, el subtítulo y el CTA no se animan (LCP y HTML servido). */
export function Hero() {
  return (
    <section aria-labelledby={HERO_TITLE_ID} className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[55fr_45fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <span aria-hidden="true" className="flex gap-1">
              <span className="size-2 rounded-full bg-morning" />
              <span className="size-2 rounded-full bg-afternoon" />
              <span className="size-2 rounded-full bg-night" />
            </span>
            {hero.eyebrow}
          </p>

          <h1
            id={HERO_TITLE_ID}
            className="mt-5 text-[clamp(2.25rem,1.5rem+3.4vw,3.9rem)] font-bold text-ink"
            style={{ lineHeight: 1.08 }}
          >
            {hero.title.before}
            <span className="relative inline-block text-brand">
              {hero.title.highlight}
              <DrawnUnderline />
            </span>
          </h1>

          <p className="mt-6 max-w-[34rem] text-lg text-muted md:text-xl">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <CtaButton
              href={hero.primaryCta.href}
              withStrip
              data-hero-cta=""
              className="w-full sm:w-auto"
            >
              {hero.primaryCta.label}
            </CtaButton>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center gap-2 self-start font-bold text-brand decoration-2 underline-offset-[6px] hover:underline focus-visible:underline sm:self-auto"
            >
              {hero.secondaryCta.label}
              <ArrowDown aria-hidden="true" className="size-5" />
            </a>
          </div>

          <p className="mt-5 flex items-start gap-2 text-base text-muted">
            <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
            {hero.microcopy}
          </p>
          <p className="mt-2 flex items-start gap-2 text-base text-muted">
            <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
            {hero.trustLine}
          </p>
        </div>

        <div className="flex justify-center">
          <PillboxIllustration className="h-auto max-h-[260px] w-full max-w-[30rem] md:max-h-none" />
        </div>
      </div>
    </section>
  );
}
