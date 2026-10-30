import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { faq } from "@/content/landing";

/**
 * 4.8 Preguntas frecuentes con <details>/<summary> nativos:
 * accesible sin JS y con las respuestas en el HTML servido.
 */
export function Faq() {
  const titleId = headingId(faq.id);

  return (
    <section id={faq.id} aria-labelledby={titleId} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <SectionHeading id={titleId} title={faq.title} />
            </Reveal>
          </div>
        </div>

        <div className="border-t border-line md:col-span-8">
          {faq.items.map((item, index) => (
            <details key={item.question} open={index === 0} className="group border-b border-line">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <Plus
                  aria-hidden="true"
                  className="size-6 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-[44rem] pb-6 pr-10 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
