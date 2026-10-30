import { howItWorks } from "@/content/landing";

/** Paso 2: un dedo presiona el botón grande «YA TOMÉ». */
export function StepConfirm({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg role="img" aria-label={label} viewBox="0 0 320 240" className={className} fontFamily="inherit">
      {/* Pulsación */}
      <g fill="none" stroke="#f6c835" strokeWidth="5" strokeLinecap="round">
        <path d="M82 124a80 80 0 0 1 20-44" />
        <path d="M70 150a92 92 0 0 1 4-30" opacity="0.6" />
      </g>
      {/* Botón */}
      <circle cx="150" cy="140" r="72" fill="#ffffff" />
      <circle cx="150" cy="140" r="60" fill="#0963b5" />
      <text x="150" y="147" textAnchor="middle" fontSize="20" fontWeight="700" fill="#f9fcff">
        {howItWorks.illustrations.confirmButton}
      </text>
      {/* Mano estilizada (trazo): índice apoyado en el botón */}
      <g fill="#ffffff" stroke="#0d1926" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M176 132l46-50c6-7 17-7 23-1s6 16 0 23l-26 29" />
        <path d="M214 128c7-6 17-6 23 1l24 26c9 10 10 25 2 36l-20 28-66-24 22-34c4-6 11-8 17-5" />
        <path d="M228 150l9-9M243 163l9-9" fill="none" />
      </g>
    </svg>
  );
}
