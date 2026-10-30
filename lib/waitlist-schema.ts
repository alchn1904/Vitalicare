/**
 * Shared waitlist schema (client + server). No server-only imports here.
 * Error messages come from content/landing.ts (SPEC §4.9).
 */
import { z } from "zod";
import { waitlist, waitlistRoles } from "@/content/landing";

const { errors } = waitlist;

const EMAIL_MAX = 120;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** After removing spaces/hyphens: optional +51 / 51 prefix, then 9 digits starting with 9. */
const PHONE_PATTERN = /^(?:\+?51)?(9\d{8})$/;

function stripPhoneSeparators(value: string): string {
  return value.replace(/[\s-]/g, "");
}

function matchPhone(value: string): string | null {
  const match = PHONE_PATTERN.exec(stripPhoneSeparators(value.trim()));
  return match ? match[1] : null;
}

function isEmail(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.length <= EMAIL_MAX && EMAIL_PATTERN.test(trimmed);
}

export type NormalizedContact = { kind: "phone" | "email"; value: string };

/**
 * Normalizes a contact already accepted by `waitlistSchema`:
 * phone -> 9 digits (no prefix/separators), email -> lowercase.
 */
export function normalizeContact(contact: string): NormalizedContact {
  const phone = matchPhone(contact);
  if (phone) return { kind: "phone", value: phone };
  return { kind: "email", value: contact.trim().toLowerCase() };
}

export const waitlistSchema = z.object({
  name: z
    .string({ error: errors.name })
    .trim()
    .min(1, { error: errors.name })
    .max(80, { error: errors.name }),
  contact: z
    .string({ error: errors.contact })
    .trim()
    .refine((value) => matchPhone(value) !== null || isEmail(value), {
      error: errors.contact,
    }),
  role: z.enum(waitlistRoles, { error: errors.role }),
  // Checkbox: RHF gives a boolean; native FormData gives "on" (or "true").
  consent: z
    .union([z.boolean(), z.string()], { error: errors.consent })
    .refine((value) => value === true || value === "on" || value === "true", {
      error: errors.consent,
    })
    .transform((): true => true),
});

/** Form values (schema input). */
export type WaitlistInput = z.input<typeof waitlistSchema>;
/** Parsed, validated data (schema output). */
export type WaitlistData = z.output<typeof waitlistSchema>;

export const waitlistFields = ["name", "contact", "role", "consent"] as const;
export type WaitlistField = (typeof waitlistFields)[number];

export type WaitlistState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<WaitlistField, string[]>>;
};

export const initialWaitlistState: WaitlistState = { status: "idle" };
