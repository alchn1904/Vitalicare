"use server";

import { Resend } from "resend";
import { z } from "zod";
import {
  normalizeContact,
  waitlistFields,
  waitlistSchema,
  type WaitlistState,
} from "@/lib/waitlist-schema";

const DEFAULT_FROM = "VitaliCare <onboarding@resend.dev>";
const SUBJECT = "Nuevo registro en la lista de espera";

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

/**
 * Server Action for the waitlist form (SPEC §4.9, §5).
 * Never logs personal data (name, contact) and never puts it in URLs.
 * Does not read headers()/cookies(), so it does not make `/` dynamic.
 */
export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Honeypot: bots fill the hidden "company" field. Pretend success, do nothing.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }

  const parsed = waitlistSchema.safeParse({
    name: formData.get("name") ?? undefined,
    contact: formData.get("contact") ?? undefined,
    role: formData.get("role") ?? undefined,
    consent: formData.get("consent") ?? undefined,
  });

  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    const errors: WaitlistState["errors"] = {};
    for (const field of waitlistFields) {
      const messages = fieldErrors[field];
      if (messages?.length) errors[field] = messages;
    }
    return { status: "idle", errors };
  }

  const { name, role } = parsed.data;
  const contact = normalizeContact(parsed.data.contact);

  // TODO: guardar en Supabase (tabla waitlist) cuando exista la base de datos.

  const apiKey = readEnv("RESEND_API_KEY");
  const notifyTo = readEnv("WAITLIST_NOTIFY_TO");

  if (!apiKey || !notifyTo) {
    console.info("[waitlist] nuevo registro (sin Resend)", {
      role,
      contactKind: contact.kind,
    });
    return { status: "success" };
  }

  const contactLabel = contact.kind === "phone" ? "WhatsApp" : "Correo";
  const text = [
    "Nuevo registro en la lista de espera de VitaliCare.",
    "",
    `Nombre: ${name}`,
    `${contactLabel}: ${contact.value}`,
    `Perfil: ${role}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: readEnv("WAITLIST_FROM") ?? DEFAULT_FROM,
      to: notifyTo
        .split(",")
        .map((address) => address.trim())
        .filter(Boolean),
      subject: SUBJECT,
      text,
    });
    if (error) {
      console.error("[waitlist] Resend rechazó el envío", { name: error.name });
      return { status: "error" };
    }
  } catch {
    console.error("[waitlist] fallo al contactar Resend");
    return { status: "error" };
  }

  return { status: "success" };
}
