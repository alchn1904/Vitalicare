import { Mail, MessageCircle } from "lucide-react";
import { cacheLife } from "next/cache";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand-mark";
import { common, footer } from "@/content/landing";
import { contactEmail, social, whatsappUrl } from "@/lib/config";

/** Año actual. Con cacheComponents, `new Date()` debe ir en un ámbito cacheado. */
async function CurrentYear() {
  "use cache";
  cacheLife("max");
  return <>{new Date().getFullYear()}</>;
}

/* Íconos propios simplificados (no son logos oficiales). */
function TikTokIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.4 4.6 5 5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const linkClass =
  "inline-flex min-h-12 items-center gap-2 text-white underline decoration-white/40 underline-offset-4 hover:decoration-white";

function ExternalLinkItem({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {icon}
        {label}
        <span className="sr-only">{common.newTab}</span>
      </a>
    </li>
  );
}

/** 4.10 Footer. `pb-28` en móvil para que la barra pegajosa no tape contenido. */
export function SiteFooter() {
  return (
    <footer className="focus-ring-light bg-night pb-28 pt-14 text-white md:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandMark tone="light" />
            <p className="mt-4 max-w-md text-sm text-white/85">{footer.academicNote}</p>
          </div>

          <nav aria-label={footer.legalNavLabel} className="md:col-span-3">
            <ul className="flex flex-col">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.contactNavLabel} className="md:col-span-4">
            <ul className="flex flex-col">
              <li>
                <a href={`mailto:${contactEmail}`} className={`${linkClass} break-all`}>
                  <Mail aria-hidden="true" className="size-5 shrink-0" />
                  <span className="sr-only">{footer.emailLabel}: </span>
                  {contactEmail}
                </a>
              </li>
              <ExternalLinkItem
                href={whatsappUrl}
                icon={<MessageCircle aria-hidden="true" className="size-5 shrink-0" />}
                label={footer.social.whatsapp}
              />
              <ExternalLinkItem href={social.tiktok} icon={<TikTokIcon />} label={footer.social.tiktok} />
              <ExternalLinkItem
                href={social.instagram}
                icon={<InstagramIcon />}
                label={footer.social.instagram}
              />
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 text-sm text-white/85">
          {footer.copyrightPrefix} <CurrentYear /> {footer.logo}
        </p>
      </div>
    </footer>
  );
}
