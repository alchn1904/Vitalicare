import { howItWorks } from "@/content/landing";

/** Paso 1: el compartimento correcto se ilumina y suena la alarma. */
export function StepAlarm({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg role="img" aria-label={label} viewBox="0 0 320 240" className={className} fontFamily="inherit">
      {/* Ondas de sonido */}
      <g fill="none" stroke="#0963b5" strokeWidth="5" strokeLinecap="round">
        <path d="M84 118q-14 26 0 52" />
        <path d="M62 104q-24 40 0 80" opacity="0.55" />
        <path d="M236 118q14 26 0 52" />
        <path d="M258 104q24 40 0 80" opacity="0.55" />
      </g>
      {/* LED encendido */}
      <g className="led-pulse">
        <circle cx="160" cy="58" r="26" fill="#f6c835" opacity="0.3" />
        <circle cx="160" cy="58" r="11" fill="#f6c835" stroke="#e0ac12" strokeWidth="2" />
      </g>
      {/* Compartimento */}
      <rect
        x="100"
        y="92"
        width="120"
        height="104"
        rx="22"
        fill="#ffffff"
        stroke="#b6c6d7"
        strokeWidth="2.5"
      />
      <rect x="112" y="104" width="96" height="80" rx="16" fill="#f6c835" />
      <rect x="146" y="113" width="28" height="5" rx="2.5" fill="#ffffff" opacity="0.5" />
      <text x="160" y="152" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0d1926">
        {howItWorks.illustrations.alarmCompartment}
      </text>
    </svg>
  );
}
