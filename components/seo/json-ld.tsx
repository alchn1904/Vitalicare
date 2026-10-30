import { site } from "@/content/landing";
import { contactEmail, siteUrl, social } from "@/lib/config";

/**
 * Structured data (SPEC §6): Organization + WebSite only.
 * No Product/Offer/AggregateRating/Review/FAQPage: nothing is sold yet and
 * there are no real reviews.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        email: contactEmail,
        sameAs: [social.tiktok, social.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: site.name,
        url: siteUrl,
        inLanguage: "es-PE",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
