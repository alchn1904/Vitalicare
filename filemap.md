# filemap

- `CLAUDE.md` — reglas para agentes
- `docs/SPEC.md` — brief FORST completo (fuente de verdad)
- `docs/PLAN.md` — plan de tareas y estado
- `package.json` / `package-lock.json` — dependencias y scripts (dev, build, lint)
- `next.config.ts` — imágenes AVIF/WebP, sin `x-powered-by`, cabeceras de seguridad, Cache Components
- `tsconfig.json` — TypeScript estricto, alias `@/*`
- `eslint.config.mjs` — ESLint (next core-web-vitals + typescript)
- `.env.example` — variables de entorno de ejemplo (SPEC §5)
- `app/globals.css` — tokens Tailwind v4 (`@theme`), base, foco, selección, `.led-pulse`
- `app/layout.tsx` — fuente Atkinson, metadata §6, robots condicional, skip link, MotionProvider, Analytics
- `app/page.tsx` — página principal (`<main id="contenido">`, compone las secciones)
- `app/icon.svg` — favicon (corazón de marca con punto LED)
- `components/motion/motion-provider.tsx` — MotionConfig (reduced motion) + LazyMotion domAnimation
- `components/waitlist-form.tsx` — formulario de lista de espera (stub hasta la tarea 3)
- `content/landing.ts` — TODO el copy tipado (site, nav, hero…footer, stickyCta)
- `lib/config.ts` — constantes públicas desde env (URLs, flags, contacto, WhatsApp, redes)
