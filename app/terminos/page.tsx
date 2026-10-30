import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { terms } from "@/content/legal";
import { indexable } from "@/lib/config";

export const metadata: Metadata = {
  title: terms.metaTitle,
  description: terms.metaDescription,
  alternates: { canonical: "/terminos" },
  robots: { index: indexable, follow: indexable },
};

export default function TerminosPage() {
  return <LegalPage doc={terms} />;
}
