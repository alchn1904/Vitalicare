import { ExternalLink, MessageSquareText } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { common, prototype } from "@/content/landing";
import { pmvUrl } from "@/lib/config";

/* Colores del PMV (SPEC §2): las pantallas conservan los colores originales del prototipo. */
const PMV_BLUE = "bg-[#315ea9]";
const PMV_BG = "bg-[#eff6fd]";

type PhoneFrameProps = {
  label: string;
  screenClassName: string;
  className?: string;
  children: ReactNode;
};

/** Marco de celular en CSS. Se lee como una imagen; el texto interno no se duplica. */
function PhoneFrame({ label, screenClassName, className = "", children }: PhoneFrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative aspect-[9/19.5] w-[13.5rem] max-w-full shrink-0 snap-start overflow-hidden rounded-[2.5rem] border-[10px] border-ink lg:w-60 ${screenClassName} ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-ink"
      />
      <div aria-hidden="true" className="flex h-full flex-col px-4 pb-6 pt-10">
        {children}
      </div>
    </div>
  );
}

function HomeScreen() {
  const s = prototype.screens.home;
  return (
    <>
      <p className="text-lg font-bold text-[#315ea9]">{s.greeting}</p>
      <div className="mt-4 rounded-xl border border-line bg-white p-3">
        <p className="text-xs text-muted">{s.nextDoseLabel}</p>
        <p className="mt-1 flex items-center gap-2 text-sm font-bold text-ink">
          <span className="size-2.5 shrink-0 rounded-full bg-morning" />
          {s.nextDose}
        </p>
      </div>
      <div className="mt-3 flex gap-1.5">
        <span className="h-2 flex-1 rounded-full bg-morning" />
        <span className="h-2 flex-1 rounded-full bg-afternoon" />
        <span className="h-2 flex-1 rounded-full bg-night" />
      </div>
      <div className="mt-auto flex justify-center">
        <span
          className={`flex size-28 items-center justify-center rounded-full ${PMV_BLUE} text-center text-lg font-bold text-white ring-8 ring-[#d6e4f6]`}
        >
          {s.button}
        </span>
      </div>
    </>
  );
}

function AlarmScreen() {
  const s = prototype.screens.alarm;
  return (
    <div className="flex h-full flex-col items-center text-center">
      <p className="text-lg font-bold text-[#315ea9]">{s.title}</p>
      <div className="mt-6 w-full rounded-2xl bg-morning px-3 py-6 ring-8 ring-morning/30">
        <p className="text-xs text-ink">{s.compartmentLabel}</p>
        <p className="mt-1 text-2xl font-bold text-ink">{s.compartment}</p>
      </div>
      <div className="mt-4 flex w-full gap-1.5 opacity-60">
        <span className="h-2 flex-1 rounded-full bg-afternoon" />
        <span className="h-2 flex-1 rounded-full bg-night" />
      </div>
      <p className="mt-auto text-3xl font-bold text-ink">{s.time}</p>
    </div>
  );
}

function NoticeScreen() {
  const s = prototype.screens.notice;
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="rounded-2xl bg-white p-3">
        <p className="flex items-center gap-2 text-xs font-bold text-[#315ea9]">
          <span className="size-2.5 rounded-full bg-afternoon" />
          {s.sender}
        </p>
        <p className="mt-2 text-[0.8125rem] leading-snug text-ink">{s.message}</p>
      </div>
    </div>
  );
}

/** 4.5 Prototipo: tres pantallas de la app del familiar en marcos de celular. */
export function PrototypeShowcase() {
  const titleId = headingId(prototype.id);
  const { screens } = prototype;

  return (
    <section
      id={prototype.id}
      aria-labelledby={titleId}
      className="focus-ring-light scroll-mt-24 overflow-hidden bg-brand py-20 text-brand-foreground md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading id={titleId} title={prototype.title} intro={prototype.intro} tone="inverse" />
        </Reveal>

        <Reveal>
          <div
            role="region"
            aria-label={prototype.screensLabel}
            tabIndex={0}
            className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-6 pt-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:items-end md:justify-center md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-12"
          >
            <PhoneFrame label={screens.home.alt} screenClassName={PMV_BG}>
              <HomeScreen />
            </PhoneFrame>
            <PhoneFrame label={screens.alarm.alt} screenClassName={PMV_BG} className="md:-translate-y-10">
              <AlarmScreen />
            </PhoneFrame>
            <PhoneFrame label={screens.notice.alt} screenClassName={PMV_BLUE}>
              <NoticeScreen />
            </PhoneFrame>
          </div>
        </Reveal>

        <p className="mx-auto mt-10 flex max-w-xl items-start gap-3 rounded-card border border-brand-foreground/40 p-5 text-brand-foreground">
          <MessageSquareText aria-hidden="true" className="mt-1 size-5 shrink-0" />
          <span>{prototype.exampleNotice}</span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <CtaButton
            href={pmvUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {prototype.cta.label}
            <ExternalLink aria-hidden="true" className="size-5" />
            <span className="sr-only">{common.newTab}</span>
          </CtaButton>
          <p className="max-w-xl text-sm text-brand-foreground/90">{prototype.note}</p>
        </div>
      </div>
    </section>
  );
}
