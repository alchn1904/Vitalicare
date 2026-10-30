"use client";

import { m, useReducedMotion } from "motion/react";
import { EASE_OUT } from "./ease";

/** Subrayado a mano alzada que se dibuja bajo "solo si importa" (gesto de firma). */
export function DrawnUnderline() {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-drawn=""
      viewBox="0 0 300 10"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full overflow-visible"
    >
      <m.path
        d="M3 6.5C48 3.2 96 2.6 148 3.6c52 1 104 2.6 149 1.2"
        fill="none"
        stroke="#f6c835"
        strokeWidth={7}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 0.9, delay: 0.3, ease: EASE_OUT }}
      />
    </svg>
  );
}
