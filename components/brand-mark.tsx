import { nav } from "@/content/landing";

type BrandMarkProps = {
  /** `light`: versión clara para fondos oscuros (footer). */
  tone?: "default" | "light";
  /** Oculta la palabra en pantallas < 380px (el enlace conserva su nombre accesible). */
  compact?: boolean;
  className?: string;
};

/** Corazón de app/icon.svg + palabra "VitaliCare". */
export function BrandMark({ tone = "default", compact = false, className = "" }: BrandMarkProps) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0"
        focusable="false"
      >
        <path
          fill={light ? "#f9fcff" : "#0963b5"}
          d="M16 28.5 4.6 17.6C1.4 14.5 1.6 9.3 5 6.5c3-2.5 7.4-2 9.9 1L16 8.8l1.1-1.3c2.5-3 6.9-3.5 9.9-1 3.4 2.8 3.6 8 .4 11.1Z"
        />
        <circle
          cx="23.5"
          cy="9.5"
          r="3.6"
          fill="#f6c835"
          stroke={light ? "#1e3263" : "#f9fcff"}
          strokeWidth="1.4"
        />
      </svg>
      <span
        className={`text-xl font-bold tracking-tight ${light ? "text-white" : "text-brand"} ${
          compact ? "max-[379px]:sr-only" : ""
        }`}
      >
        {nav.logo}
      </span>
    </span>
  );
}
