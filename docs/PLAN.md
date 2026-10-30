# PLAN — VitaliCare landing

Estado: ⏳ pendiente · 🔄 en curso · ✅ aceptado. Especificación: `docs/SPEC.md` (secciones 1-13).

1. ⏳ **Scaffold + base** (Medium). Next.js 16 + TS + Tailwind v4 + deps (SPEC §5, §9.1-9.3). `globals.css` con tokens, `layout.tsx` (fuente Atkinson, metadata §6, MotionConfig/LazyMotion provider, Analytics), `next.config.ts`, `.env.example`, `lib/config.ts`, `content/landing.ts` con TODO el copy §4, stubs de componentes. Verifica: build + lint.
2. ⏳ **Componentes de marca + secciones + movimiento** (Careful, tras 1). §4.1-4.8, 4.10, barra pegajosa, §2 dirección visual, §5 Motion. Verifica: tsc + lint (sin build en paralelo).
3. ⏳ **Formulario** (Medium, tras 1, paralelo a 2). §4.9, §5 Server Action, schema Zod compartido, honeypot, Resend opcional.
4. ⏳ **SEO + legal + README + CI** (Medium, tras 1, paralelo a 2 y 3). §6, §7, §12.1 (README, ci.yml), JSON-LD, sitemap, robots, OG image.
5. ⏳ **Revisión visual + auditoría** (orquestador). Build, preview 320/390/1280/1920, reduced motion, auditoría §8.
6. ⏳ **Commit + push** a `origin main`.
