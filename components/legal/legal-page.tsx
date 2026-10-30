import Link from "next/link";
import type { ReactNode } from "react";
import { footer } from "@/content/landing";
import { legalChrome, type LegalDocument, type LegalInline } from "@/content/legal";

const linkClass =
  "text-brand underline underline-offset-4 hover:decoration-2 break-words";

function Inline({ parts }: { parts: readonly LegalInline[] }): ReactNode {
  return parts.map((part, index) => {
    if (typeof part === "string") return part;
    const key = `${part.href}-${index}`;
    return part.href.startsWith("/") ? (
      <Link key={key} href={part.href} className={linkClass}>
        {part.label}
      </Link>
    ) : (
      <a key={key} href={part.href} className={linkClass}>
        {part.label}
      </a>
    );
  });
}

export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <Link
            href={legalChrome.backHref}
            className="inline-flex min-h-12 items-center font-bold text-brand underline underline-offset-4"
          >
            {legalChrome.backLink}
          </Link>
          <span className="text-xl font-bold text-brand">{legalChrome.brand}</span>
        </div>
      </header>

      <main id="contenido" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-[clamp(2rem,1.5rem+2vw,2.75rem)] text-ink">{doc.title}</h1>
        <p className="mt-3 text-base text-muted">{doc.updated}</p>
        <p className="mt-8 text-lg leading-[1.6] text-ink">
          <Inline parts={doc.intro} />
        </p>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-2xl text-ink">{section.heading}</h2>
            {section.blocks.map((block, index) =>
              block.type === "paragraph" ? (
                <p key={index} className="mt-4 text-lg leading-[1.6] text-ink">
                  <Inline parts={block.content} />
                </p>
              ) : (
                <ul
                  key={index}
                  className="mt-4 list-disc space-y-2 pl-6 text-lg leading-[1.6] text-ink marker:text-brand"
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Inline parts={item} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}

        <p className="mt-14 rounded-card border border-line bg-cream-deep px-5 py-4 text-lg font-bold text-ink">
          {doc.draftNote}
        </p>
      </main>

      <footer className="border-t border-line">
        <p className="mx-auto max-w-3xl px-4 py-8 text-base text-muted sm:px-6">
          {footer.academicNote}
        </p>
      </footer>
    </>
  );
}
