import { waitlist } from "@/content/landing";

/** Celular del familiar con el registro del día: la toma de la mañana confirmada. */
export function WaitlistPhone({ className = "" }: { className?: string }) {
  const t = waitlist.illustration;
  return (
    <svg
      role="img"
      aria-label={waitlist.imageAlt}
      viewBox="0 0 320 300"
      className={className}
      fontFamily="inherit"
    >
      <rect
        x="86"
        y="14"
        width="148"
        height="272"
        rx="24"
        fill="#ffffff"
        stroke="#0d1926"
        strokeWidth="8"
      />
      <rect x="138" y="24" width="44" height="8" rx="4" fill="#0d1926" />
      <text x="104" y="62" fontSize="14" fontWeight="700" fill="#0d1926">
        {t.heading}
      </text>
      {/* Toma confirmada */}
      <rect x="100" y="76" width="120" height="104" rx="14" fill="#ffffff" stroke="#b6c6d7" strokeWidth="2" />
      <rect x="110" y="88" width="64" height="22" rx="11" fill="#f6c835" />
      <text x="142" y="103" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0d1926">
        {t.compartment}
      </text>
      <text x="110" y="132" fontSize="14" fontWeight="700" fill="#0d1926">
        {t.person}
      </text>
      <text x="110" y="152" fontSize="13" fontWeight="700" fill="#0963b5">
        {t.status}
      </text>
      <text x="110" y="169" fontSize="11.5" fill="#424e5d">
        {t.time}
      </text>
      {/* Tomas pendientes */}
      <rect x="100" y="192" width="120" height="34" rx="12" fill="#f4f7fb" />
      <circle cx="118" cy="209" r="7" fill="#f3821d" />
      <rect x="132" y="205" width="64" height="8" rx="4" fill="#dbe3ec" />
      <rect x="100" y="234" width="120" height="34" rx="12" fill="#f4f7fb" />
      <circle cx="118" cy="251" r="7" fill="#1e3263" />
      <rect x="132" y="247" width="52" height="8" rx="4" fill="#dbe3ec" />
      {/* Check de confirmación (marca, no verde CTA) */}
      <circle cx="232" cy="96" r="30" fill="#0963b5" stroke="#d7eaff" strokeWidth="6" />
      <path
        d="M218 96l10 10 19-20"
        fill="none"
        stroke="#f9fcff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
