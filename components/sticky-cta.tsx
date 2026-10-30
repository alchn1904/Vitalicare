"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/ui/cta-button";
import { stickyCta } from "@/content/landing";

/**
 * Barra CTA pegajosa (solo < md). Aparece cuando el CTA del hero (`[data-hero-cta]`)
 * sale del viewport y se oculta al llegar a la sección del formulario (o pasarla).
 * Oculta: `aria-hidden` + `inert`, no es enfocable ni clicable.
 */
export function StickyCta() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [atWaitlist, setAtWaitlist] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector("[data-hero-cta]");
    const waitlist = document.getElementById(stickyCta.href.slice(1));
    if (!heroCta && !waitlist) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroCta) {
          setHeroVisible(entry.isIntersecting);
        } else if (entry.target === waitlist) {
          // Visible o ya por encima del viewport (el usuario está en el formulario o en el footer).
          setAtWaitlist(entry.isIntersecting || entry.boundingClientRect.top < 0);
        }
      }
    });

    if (heroCta) observer.observe(heroCta);
    if (waitlist) observer.observe(waitlist);
    return () => observer.disconnect();
  }, []);

  const visible = !heroVisible && !atWaitlist;

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 px-4 pt-3 backdrop-blur transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-opacity md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 motion-reduce:translate-y-0"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CtaButton href={stickyCta.href} fullWidth>
        {stickyCta.label}
      </CtaButton>
    </div>
  );
}
