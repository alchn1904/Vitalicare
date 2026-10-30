"use client";

import { m } from "motion/react";
import { useState, type ReactNode } from "react";
import { EASE_OUT } from "./ease";

type RevealProps = {
  children: ReactNode;
  /** Retardo en segundos (stagger de 0.1 s entre tarjetas). */
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

function initialOffset(): number {
  if (typeof window === "undefined") return 16;
  return window.matchMedia("(max-width: 767px)").matches ? 12 : 16;
}

/**
 * Entrada fade + translateY (16px; 12px en <768px), 500 ms, una sola vez.
 * Con reduced motion, MotionConfig (reducedMotion="user") deja solo la opacidad.
 * El contenido existe en el HTML servido; <RevealNoscript /> lo muestra sin JS.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  // El desplazamiento se decide al montar; en SSR se sirve 16px (invisible: opacidad 0).
  const [y] = useState(initialOffset);
  const Component = as === "li" ? m.li : m.div;

  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
      suppressHydrationWarning
    >
      {children}
    </Component>
  );
}

/** Sin JS, muestra todo lo que Reveal oculta y el subrayado del hero completo. */
export function RevealNoscript() {
  return (
    <noscript>
      <style>
        {
          "[data-reveal]{opacity:1!important;transform:none!important}[data-drawn] path{stroke-dasharray:none!important;stroke-dashoffset:0!important;opacity:1!important}"
        }
      </style>
    </noscript>
  );
}
