import type { AnchorHTMLAttributes, ReactNode } from "react";

type CtaButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  href: string;
  children: ReactNode;
  /** Franja de compartimentos (mañana · tarde · noche) en el borde inferior. */
  withStrip?: boolean;
  fullWidth?: boolean;
  /**
   * `primary`: verde CTA (solo acciones).
   * `secondary`: blanco con texto y borde de marca; pensado para fondos `bg-brand` (anillo de foco claro).
   */
  variant?: "primary" | "secondary";
  /** Versión compacta (min-h 48px) para el header. */
  size?: "default" | "compact";
};

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-card text-center font-bold leading-tight transition-colors duration-200 active:translate-y-px";

const variants = {
  primary: "bg-cta text-white hover:bg-cta-hover",
  secondary:
    "border-2 border-brand bg-white text-brand hover:bg-accent focus-ring-light",
} as const;

const sizes = {
  default: "min-h-14 px-7 py-3",
  compact: "min-h-12 px-4 py-2 text-sm md:px-5 md:text-base",
} as const;

export function CtaButton({
  href,
  children,
  withStrip = false,
  fullWidth = false,
  variant = "primary",
  size = "default",
  className = "",
  ...rest
}: CtaButtonProps) {
  const classes = [
    base,
    variants[variant],
    sizes[size],
    withStrip ? "pb-4" : "",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes} {...rest}>
      {children}
      {withStrip ? (
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-1">
          <span className="flex-1 bg-morning" />
          <span className="flex-1 bg-afternoon" />
          <span className="flex-1 bg-night" />
        </span>
      ) : null}
    </a>
  );
}
