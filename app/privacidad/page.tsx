import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacy } from "@/content/legal";
import { indexable } from "@/lib/config";

export const metadata: Metadata = {
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  alternates: { canonical: "/privacidad" },
  robots: { index: indexable, follow: indexable },
};

export default function PrivacidadPage() {
  return <LegalPage doc={privacy} />;
}
