import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/ui/cta-button";
import { nav } from "@/content/landing";

/**
 * Header pegajoso. El borde inferior aparece al hacer scroll con CSS scroll-driven
 * (`.header-scroll-border` en globals.css); sin soporte, el borde queda fijo.
 * Las anclas se muestran desde `lg`: entre `md` y `lg` no caben junto al CTA.
 */
export function SiteHeader() {
  return (
    <header className="header-scroll-border sticky top-0 z-40 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[4.5rem]">
        <a
          href={nav.homeHref}
          aria-label={nav.homeLabel}
          className="inline-flex min-h-12 shrink-0 items-center rounded-card"
        >
          <BrandMark compact />
        </a>
        <nav aria-label={nav.ariaLabel} className="flex items-center gap-4 lg:gap-6">
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-12 items-center px-3 text-base text-ink decoration-2 underline-offset-[6px] hover:underline focus-visible:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaButton href={nav.cta.href} size="compact" className="max-sm:hidden">
            {nav.cta.label}
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
