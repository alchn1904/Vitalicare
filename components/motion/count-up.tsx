"use client";

import { animate, m, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { EASE_OUT } from "./ease";

type CountUpProps = {
  value: number;
  decimals: number;
  suffix: string;
};

function format(value: number, decimals: number): string {
  // SPEC §4.6 escribe "4.6 de 5" con punto decimal.
  return value.toFixed(decimals);
}

/**
 * Cuenta de 0 al valor (1.2 s) al entrar en viewport, una vez.
 * El HTML servido trae el valor final; la animación solo ocurre en cliente.
 * Con reduced motion se queda en el valor final.
 */
export function CountUp({ value, decimals, suffix }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const current = useMotionValue(value);
  const text = useTransform(current, (v) => format(v, decimals));
  const started = useRef(false);
  const primed = useRef(false);

  useEffect(() => {
    if (reduce || started.current || primed.current) return;
    // Tras hidratar y aún sin animar: parte de 0 (el SSR ya mostró el valor final).
    primed.current = true;
    current.set(0);
  }, [reduce, current]);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (reduce) {
      current.set(value);
      return;
    }
    const controls = animate(current, value, { duration: 1.2, ease: EASE_OUT });
    return () => controls.stop();
  }, [inView, reduce, current, value]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        <m.span>{text}</m.span>
        {suffix}
      </span>
      <span className="sr-only">
        {format(value, decimals)}
        {suffix}
      </span>
    </span>
  );
}
