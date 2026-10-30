import { WaitlistPhone } from "@/components/illustrations/waitlist-phone";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading, headingId } from "@/components/ui/section-heading";
import { WaitlistForm } from "@/components/waitlist-form";
import { common, waitlist } from "@/content/landing";

/** 4.9 CTA final + formulario. El formulario no lleva Reveal: es interactivo desde el frame 0. */
export function WaitlistSection() {
  const titleId = headingId(waitlist.id);

  return (
    <section id={waitlist.id} aria-labelledby={titleId} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading id={titleId} title={waitlist.title} intro={waitlist.intro} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-[45fr_55fr] md:gap-8">
          <Reveal className="order-last flex flex-col items-center justify-center rounded-card bg-accent p-6 md:order-none md:p-8">
            <WaitlistPhone className="h-auto max-h-80 w-full max-w-[20rem]" />
            <p className="mt-4 text-sm text-accent-foreground">{common.illustrativeNote}</p>
          </Reveal>
          <div className="rounded-card border border-line bg-card p-6 md:p-8">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
