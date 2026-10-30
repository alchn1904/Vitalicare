import { hero } from "@/content/landing";

const INK = "#0d1926";
const LINE = "#b6c6d7";
const BRAND = "#0963b5";
const ON_BRAND = "#f9fcff";

const compartments = [
  { x: 62, fill: "#f6c835", text: INK, label: hero.illustration.morning },
  { x: 156, fill: "#f3821d", text: INK, label: hero.illustration.afternoon },
  { x: 250, fill: "#1e3263", text: "#ffffff", label: hero.illustration.night },
] as const;

/** Pastillero VitaliCare (SVG propio). El LED de "Mañana" pulsa con `.led-pulse`. */
export function PillboxIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label={hero.illustrationAlt}
      viewBox="0 0 400 330"
      className={className}
      fontFamily="inherit"
    >
      <path
        fill="#f4eee0"
        d="M200 16c98 0 180 42 186 132s-48 170-178 174S12 282 14 168 102 16 200 16Z"
      />
      {/* Chapa de hora junto a Mañana */}
      <rect x="58" y="18" width="96" height="30" rx="15" fill="#ffffff" stroke={LINE} strokeWidth="2" />
      <text x="106" y="38" textAnchor="middle" fontSize="14" fontWeight="700" fill={INK}>
        {hero.illustration.time}
      </text>
      <path d="M100 48h12l-6 7Z" fill={LINE} />
      {/* Cuerpo */}
      <rect
        x="40"
        y="70"
        width="320"
        height="236"
        rx="32"
        fill="#ffffff"
        stroke={LINE}
        strokeWidth="2.5"
      />
      {/* LEDs: Mañana encendido, el resto apagado */}
      <g className="led-pulse">
        <circle cx="106" cy="91" r="15" fill="#f6c835" opacity="0.35" />
        <circle cx="106" cy="91" r="7" fill="#f6c835" stroke="#e0ac12" strokeWidth="1.5" />
      </g>
      <circle cx="200" cy="91" r="6" fill="#e3e9f0" />
      <circle cx="294" cy="91" r="6" fill="#e3e9f0" />
      {/* Compartimentos */}
      {compartments.map((c) => (
        <g key={c.label}>
          <rect x={c.x} y="110" width="88" height="74" rx="16" fill={c.fill} />
          <rect x={c.x + 30} y="118" width="28" height="5" rx="2.5" fill="#ffffff" opacity="0.45" />
          <text
            x={c.x + 44}
            y="158"
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
            fill={c.text}
          >
            {c.label}
          </text>
        </g>
      ))}
      {/* Botón «YA TOMÉ» */}
      <circle cx="200" cy="246" r="50" fill="#d7eaff" />
      <circle cx="200" cy="246" r="42" fill={BRAND} />
      <text x="200" y="251" textAnchor="middle" fontSize="15" fontWeight="700" fill={ON_BRAND}>
        {hero.illustration.button}
      </text>
    </svg>
  );
}
