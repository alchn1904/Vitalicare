/**
 * Public, build-time configuration read from NEXT_PUBLIC_* env vars.
 * Server-only secrets (RESEND_API_KEY, WAITLIST_NOTIFY_TO, WAITLIST_FROM)
 * are read directly by the Server Action, never here.
 */

function readString(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

function readFlag(value: string | undefined): boolean {
  return value?.trim().toLowerCase() === "true";
}

const whatsappNumber: string =
  readString(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, "51900000000").replace(/\D/g, "") ||
  "51900000000";

export const siteUrl: string = readString(
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://vitalicare.vercel.app",
).replace(/\/+$/, "");

export const pmvUrl: string = readString(
  process.env.NEXT_PUBLIC_PMV_URL,
  "https://vitali-care-pmv.lovable.app/",
);

/** noindex unless explicitly enabled. */
export const indexable: boolean = readFlag(process.env.NEXT_PUBLIC_INDEXABLE);

/** Validation strip hidden unless explicitly enabled (SPEC §4.6). */
export const showValidation: boolean = readFlag(process.env.NEXT_PUBLIC_SHOW_VALIDATION);

export const contactEmail: string = readString(
  process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  "hola@vitalicare.pe",
);

export { whatsappNumber };

export const whatsappUrl: string = `https://wa.me/${whatsappNumber}`;

export const social = {
  tiktok: "https://www.tiktok.com/@vitalicare_pe",
  instagram: "https://www.instagram.com/vitalicare_pe",
} as const;

export type SocialNetwork = keyof typeof social;
