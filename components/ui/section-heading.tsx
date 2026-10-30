import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: string;
  intro?: string;
  /** `inverse`: para secciones con fondo de marca. */
  tone?: "default" | "inverse";
  className?: string;
  children?: ReactNode;
};

/** H2 de sección + párrafo de apertura (respuesta directa de 1-2 frases). */
export function SectionHeading({
  id,
  title,
  intro,
  tone = "default",
  className = "",
  children,
}: SectionHeadingProps) {
  const inverse = tone === "inverse";
  return (
    <div className={className}>
      <h2
        id={id}
        className={`text-balance text-[clamp(1.75rem,1.3rem+2vw,2.75rem)] font-bold ${
          inverse ? "text-brand-foreground" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 max-w-[40rem] text-pretty ${
            inverse ? "text-brand-foreground" : "text-muted"
          }`}
        >
          {intro}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/** Id del H2 de una sección, para `aria-labelledby`. */
export function headingId(sectionId: string): string {
  return `${sectionId}-titulo`;
}
