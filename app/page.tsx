import { Benefits } from "@/components/benefits";
import { CompartmentDivider } from "@/components/compartment-divider";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { RevealNoscript } from "@/components/motion/reveal";
import { Pricing } from "@/components/pricing";
import { Problem } from "@/components/problem";
import { PrototypeShowcase } from "@/components/prototype-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { ValidationStrip } from "@/components/validation-strip";
import { WaitlistSection } from "@/components/waitlist-section";
import { showValidation } from "@/lib/config";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <CompartmentDivider className="pb-12 md:pb-16" />
        <Problem />
        <HowItWorks />
        <CompartmentDivider />
        <Benefits />
        <PrototypeShowcase />
        {showValidation ? <ValidationStrip /> : null}
        <Pricing />
        <CompartmentDivider />
        <Faq />
        <WaitlistSection />
      </main>
      <SiteFooter />
      <StickyCta />
      <RevealNoscript />
    </>
  );
}
