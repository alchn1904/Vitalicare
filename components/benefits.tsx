import {
  BellRing,
  Hand,
  Lightbulb,
  Minimize2,
  ShieldCheck,
  WifiOff,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { capitalizeFirst } from "@/components/ui/text";
import { benefits } from "@/content/landing";

type Tone = "white" | "brand" | "night";

type Tile = {
  icon: LucideIcon;
  tone: Tone;
  /** Posición en el bento (md+). 2+1 / 1+1+(1) / 1+2: sin huecos en 3 columnas. */
  span: string;
  extra?: ReactNode;
};

const toneStyles: Record<Tone, { card: string; icon: string; text: string }> = {
  white: {
    card: "border border-line bg-card text-ink",
    icon: "bg-accent text-accent-foreground",
    text: "text-muted",
  },
  brand: {
    card: "bg-brand text-brand-foreground",
    icon: "bg-brand-foreground/15 text-brand-foreground",
    text: "text-brand-foreground",
  },
  night: {
    card: "bg-night text-white",
    icon: "bg-white/15 text-white",
    text: "text-white",
  },
};

function LedStrip() {
  return (
    <div aria-hidden="true" className="flex gap-3">
      <span className="size-4 rounded-full bg-morning ring-4 ring-morning/30" />
      <span className="size-4 rounded-full bg-afternoon ring-4 ring-afternoon/30" />
      <span className="size-4 rounded-full bg-night ring-4 ring-night/20" />
    </div>
  );
}

function BigButton() {
  return (
    <div aria-hidden="true" className="flex justify-center pt-6 md:mt-auto">
      <span className="flex size-36 items-center justify-center rounded-full bg-brand text-center text-xl font-bold text-brand-foreground ring-[10px] ring-accent md:size-40">
        {benefits.buttonLabel}
      </span>
    </div>
  );
}

const tiles: readonly Tile[] = [
  { icon: Lightbulb, tone: "white", span: "md:col-span-2", extra: <LedStrip /> },
  { icon: Hand, tone: "white", span: "md:row-span-2", extra: <BigButton /> },
  { icon: BellRing, tone: "brand", span: "" },
  { icon: Minimize2, tone: "white", span: "" },
  { icon: WifiOff, tone: "night", span: "" },
  { icon: ShieldCheck, tone: "white", span: "md:col-span-2" },
];

/** 4.4 Beneficios en bento de 6 tarjetas. */
export function Benefits() {
  const titleId = headingId(benefits.id);

  return (
    <section id={benefits.id} aria-labelledby={titleId} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading id={titleId} title={benefits.title} intro={benefits.intro} />
        </Reveal>

        <ul className="mt-12 grid gap-4 md:mt-16 md:auto-rows-[minmax(12rem,auto)] md:grid-cols-3">
          {benefits.items.map((item, index) => {
            const tile = tiles[index];
            const tone = toneStyles[tile.tone];
            const Icon = tile.icon;
            const ledFirst = index === 0;
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 3) * 0.1}
                className={`flex flex-col rounded-card p-6 md:p-7 ${tone.card} ${tile.span}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}
                  >
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  {ledFirst ? tile.extra : null}
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className={`mt-1 ${tone.text}`}>{capitalizeFirst(item.description)}</p>
                {!ledFirst ? tile.extra : null}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
