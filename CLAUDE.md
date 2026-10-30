# VitaliCare landing

Next.js 16 (App Router, SSG) · TypeScript strict · Tailwind v4 (`@theme` en `app/globals.css`, sin tailwind.config) · Motion (`motion/react`, `LazyMotion` + `m`) · RHF + Zod + Server Actions · Resend opcional.

## Comandos
- `npm run dev` · `npm run build` · `npm run lint` · `npx tsc --noEmit`

## Reglas no obvias
- TODO el copy vive en `content/landing.ts`; ningún texto visible suelto en componentes. El copy de `docs/SPEC.md` §4 es definitivo: no reescribirlo.
- El verde `cta` (#007f35 / hover #006b2c) solo en botones de acción. Nada más lleva ese color.
- Nada de testimonios, reseñas, logos, sellos ni cifras inventadas (SPEC §10). Precios siempre "de referencia" y "en preventa".
- La franja de validación solo se renderiza si `NEXT_PUBLIC_SHOW_VALIDATION=true` (flags en `lib/config.ts`).
- Contenido crítico (H1, copy, CTAs) en el HTML servido; la animación nunca es requisito para leer. Respetar `prefers-reduced-motion`.
- Un solo `<h1>`. Objetivos táctiles ≥ 48px. Sin datos personales en URLs ni logs.
- Español de Perú (`lang="es-PE"`), tuteo.

## Referencias
- `docs/SPEC.md` — brief completo (fuente de verdad; §13 prevalece)
- `docs/PLAN.md` — tareas y estado
- `filemap.md` — índice de archivos (actualízalo al crear o mover archivos)
