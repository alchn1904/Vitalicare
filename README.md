# VitaliCare · landing

Landing de lista de espera de **VitaliCare**, un pastillero inteligente con alarma y luz LED que avisa a la familia solo si una toma no se confirma. Es un proyecto académico (USIL · Oportunidad de Negocios · Grupo 7) en etapa de validación: la página explica el producto, muestra precios de referencia y recoge interesados en la lista de espera. No vende nada.

> **Los textos legales (/privacidad y /terminos) son un borrador técnico pendiente de revisión legal.**
> No son asesoría legal. El equipo debe hacerlos revisar antes de publicar en producción.

## Stack

- Next.js 16 (App Router, páginas estáticas, `cacheComponents`)
- React 19 y TypeScript estricto
- Tailwind CSS v4 (tokens en `app/globals.css`, sin `tailwind.config`)
- Motion (`motion/react`) para animaciones, respetando `prefers-reduced-motion`
- React Hook Form + Zod + Server Actions para el formulario
- Resend (opcional) para el correo de aviso al equipo
- Vercel Analytics y despliegue en Vercel

## Requisitos

- Node.js LTS (la misma versión que usa la CI: `lts/*`)
- npm

## Cómo correrlo

```bash
npm install
cp .env.example .env.local   # y ajusta los valores
npm run dev                  # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # build de producción
npm run lint       # ESLint
npx tsc --noEmit   # chequeo de tipos
```

## Variables de entorno

Están en `.env.example`. **Los valores actuales son marcadores**: el equipo debe reemplazarlos por los reales antes de producción.

| Variable | Qué hace | Valor en `.env.example` |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base del sitio (metadata, sitemap, robots, JSON-LD) | `https://vitalicare.vercel.app` |
| `NEXT_PUBLIC_PMV_URL` | Enlace al prototipo de la app | `https://vitali-care-pmv.lovable.app/` |
| `NEXT_PUBLIC_INDEXABLE` | `true` permite indexar en buscadores; cualquier otro valor pone `noindex` y bloquea en `robots.txt` | `false` |
| `NEXT_PUBLIC_SHOW_VALIDATION` | `true` muestra la franja "Lo que aprendimos en 10 entrevistas" | `false` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Correo de contacto (footer, páginas legales, JSON-LD) | `hola@vitalicare.pe` (marcador) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp con código de país, solo dígitos | `51900000000` (marcador) |
| `RESEND_API_KEY` | Clave de Resend para enviar el aviso al equipo. **Secreto.** Vacía = no se envía correo | vacía |
| `WAITLIST_NOTIFY_TO` | Correo del equipo que recibe cada registro. Solo servidor | vacía |
| `WAITLIST_FROM` | Remitente del correo de aviso. Solo servidor | `VitaliCare <onboarding@resend.dev>` |

Las variables `NEXT_PUBLIC_*` se leen en `lib/config.ts` y se fijan en el build: si las cambias en Vercel, hay que volver a desplegar.

### Flags

- **`NEXT_PUBLIC_INDEXABLE`**: déjalo en `false` hasta que el equipo decida publicar. En Preview y Development debe quedar siempre en `false`.
- **`NEXT_PUBLIC_SHOW_VALIDATION`**: actívalo **solo después de confirmar que las 10 entrevistas son reales**. Nunca se muestran cifras ni testimonios inventados.

## Despliegue en Vercel

El repositorio es `https://github.com/alchn1904/Vitalicare`. No se usa el CLI de Vercel: el despliegue se conecta desde el panel.

1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio `alchn1904/Vitalicare`.
2. Framework: **Next.js** (Vercel lo detecta solo). No cambies los comandos de build.
3. En **Settings → Environment Variables**, carga las variables de `.env.example` en **Production**, **Preview** y **Development** según corresponda.
4. En **Preview** y **Development**, `NEXT_PUBLIC_INDEXABLE=false`.
5. Cada push a `main` despliega a producción y cada rama genera una vista previa.
6. Activa **Vercel Analytics** en el proyecto.
7. Dominio propio (opcional): se agrega después en **Settings → Domains**, con los registros DNS que indique el panel.

**Los secretos (`RESEND_API_KEY` y similares) nunca se suben al repositorio** ni se pegan en issues o chats: se cargan solo en el panel de Vercel. `.env*` está en `.gitignore` (salvo `.env.example`).

## Guardas antes de producción

Si alguna falla, no se pasa a producción:

- `grep -rn "51900000000\|hola@vitalicare.pe\|vitalicare.vercel.app" app components content lib` no debe encontrar marcadores sin reemplazar (o el equipo confirma que son los definitivos).
- `grep -rni "lorem\|TODO" app components content` revisado (solo se permite el `TODO` de conexión a base de datos de la Server Action).
- `npm run build` muestra `/`, `/privacidad` y `/terminos` como estáticas.
- La auditoría de calidad (SPEC §8) tiene puntaje ≥ 75 y se entregó al equipo.
- `NEXT_PUBLIC_SHOW_VALIDATION=false` hasta que el equipo confirme que las 10 entrevistas son reales.
- Los textos legales fueron revisados por alguien con criterio legal.
- La CI de GitHub Actions está en verde en `main`.

Después de desplegar: probar el formulario de punta a punta en un celular real, confirmar que llega el correo (si Resend está configurado), verificar que el HTML servido contiene el H1 y que con `NEXT_PUBLIC_INDEXABLE=false` aparece `noindex`.

## Pendientes del equipo

| Pendiente | Valor actual | Quién |
|---|---|---|
| Enlace del prototipo | `https://vitali-care-pmv.lovable.app/` (versión sin los ajustes recientes) | Alvaro |
| Indexable o `noindex` | `noindex` | Equipo |
| Mostrar la franja de validación | oculta hasta confirmar que las 10 entrevistas son reales | Equipo |
| WhatsApp y correo de contacto reales | marcadores | Equipo |
| Dominio | `vitalicare.vercel.app` | Equipo |
| Fotos reales o generadas | ilustración SVG mientras tanto | Alvaro |
| Repositorio público o privado | privado | Equipo |
| Nombre del proyecto en Vercel | `vitalicare-landing` | Alvaro |
| Dominio propio (opcional) | el de `*.vercel.app` | Equipo |
| Revisión legal de privacidad y términos | pendiente | Equipo |

## CI

`.github/workflows/ci.yml` corre en cada push y pull request: `npm ci`, `npm run lint`, `npx tsc --noEmit` y `npm run build`, con valores de ejemplo de las variables públicas y sin secretos.

## Estructura

```
app/          rutas (landing, /privacidad, /terminos), layout, SEO (sitemap, robots, OG)
components/   componentes de la landing, legales y SEO
content/      todo el copy (landing.ts, legal.ts)
lib/          configuración pública (config.ts)
docs/         SPEC.md (brief, fuente de verdad) y PLAN.md (tareas)
```

El índice completo de archivos está en [`filemap.md`](./filemap.md).
