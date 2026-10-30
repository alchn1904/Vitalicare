import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Atkinson_Hyperlegible } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion/motion-provider";
import { nav, site } from "@/content/landing";
import { indexable, siteUrl } from "@/lib/config";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "es_PE",
    type: "website",
    siteName: site.name,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: indexable,
    follow: indexable,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-PE" className={atkinson.variable}>
      <body className="antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-brand focus:px-5 focus:py-3 focus:font-bold focus:text-brand-foreground"
        >
          {nav.skipLink}
        </a>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
