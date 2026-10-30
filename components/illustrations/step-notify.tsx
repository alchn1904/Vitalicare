import { howItWorks } from "@/content/landing";

/** Paso 3: si nadie confirma a tiempo, llega un aviso al celular del familiar. */
export function StepNotify({ label, className = "" }: { label: string; className?: string }) {
  const t = howItWorks.illustrations;
  return (
    <svg role="img" aria-label={label} viewBox="0 0 320 240" className={className} fontFamily="inherit">
      {/* Reloj */}
      <circle cx="66" cy="138" r="36" fill="#ffffff" stroke="#1e3263" strokeWidth="5" />
      <path
        d="M66 116v22l14 9"
        fill="none"
        stroke="#1e3263"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="32" y="186" width="68" height="28" rx="14" fill="#1e3263" />
      <text x="66" y="205" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
        {t.notifyDelay}
      </text>
      {/* Celular */}
      <rect
        x="136"
        y="20"
        width="104"
        height="204"
        rx="20"
        fill="#ffffff"
        stroke="#0d1926"
        strokeWidth="7"
      />
      <rect x="170" y="28" width="36" height="7" rx="3.5" fill="#0d1926" />
      <rect x="152" y="152" width="72" height="8" rx="4" fill="#e3e9f0" />
      <rect x="152" y="168" width="52" height="8" rx="4" fill="#e3e9f0" />
      {/* Burbuja de aviso */}
      <rect
        x="114"
        y="64"
        width="196"
        height="62"
        rx="14"
        fill="#ffffff"
        stroke="#0963b5"
        strokeWidth="2.5"
      />
      <circle cx="134" cy="84" r="7" fill="#f3821d" />
      <text x="148" y="89" fontSize="13" fontWeight="700" fill="#0963b5">
        {t.notifySender}
      </text>
      <text x="126" y="112" fontSize="11.5" fill="#0d1926">
        {t.notifyMessage}
      </text>
    </svg>
  );
}
