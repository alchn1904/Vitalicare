# LANDING-VITALICARE.md — Brief de construcción para Claude Code

Metodología FORST (F-O-R-S-T), proyecto **VitaliCare** · Tipo: **Landing Page** · Stack: el mismo de las landings anteriores de FORST (decisión AyudemosMás, 19 set 2026) · Identidad visual: extraída del prototipo `memory-meds-pro.lovable.app` (colores y tipografía reales leídos de su CSS).

> **Cómo usarlo en Claude Code.** Crea una carpeta vacía `vitalicare-landing`, copia este archivo dentro como `LANDING-VITALICARE.md`, abre Claude Code ahí y pega:
>
> *"Lee `LANDING-VITALICARE.md` completo. Ejecuta la sección 9 (Plan de ejecución) fase por fase, en orden. Al terminar cada fase, corre `npm run build` y `npm run lint`, y no avances si fallan. Todo el copy, las cifras y las reglas de las secciones 4 y 10 son definitivos: no los cambies ni inventes contenido. Al final entrégame la auditoría de la sección 8 con puntaje. Después ejecuta la sección 12 (repositorio y despliegue); antes de `vercel --prod` detente y pídeme confirmación."*
>
> *Antes de empezar, el equipo debe haber hecho `gh auth login` y `vercel login` (una sola vez). Claude Code no escribe contraseñas ni tokens: si algún CLI pide iniciar sesión, se detiene y avisa.*

---

## 1. Foundations (F)

```
BRIEF INICIAL — VitaliCare

TIPO DE PROYECTO
- Tipo: Landing Page (una oferta, un objetivo)
- Indexabilidad: noindex por defecto (el tráfico será directo: enlace compartido,
  presentación, QR). Controlado por NEXT_PUBLIC_INDEXABLE=true para activar el SEO orgánico
  más adelante. [Supuesto: confirmar con el equipo]

NEGOCIO
- Nombre: VitaliCare
- Rubro: salud en el hogar / tecnología para el cuidado de adultos mayores
- Producto: pastillero inteligente (3 compartimentos con luz LED y alarma) + app para el familiar
- Problema: los adultos mayores con varios medicamentos olvidan o confunden tomas, y la
  familia vive con la duda "¿se la tomó?"
- Estado: en validación, aún no se vende. Proyecto académico (USIL, Oportunidad de Negocios, Grupo 7)

OBJETIVO DE CONVERSIÓN
- Acción principal: dejar datos para la lista de espera / preventa
- CTA principal: "Quiero unirme a la lista de espera"
- CTA secundario: "Probar el prototipo" (enlace externo)

PÚBLICO OBJETIVO
- Decide y paga (80% de las entrevistas): hijas, hijos y familiares de 30 a 55 años de Lima
  que cuidan a un adulto mayor
- Usuario final: adulto mayor (68+), 6.9 medicamentos al día en promedio en las entrevistas
- Objeciones: "¿y si no hay internet?", "¿y si se acaba la batería?", "¿es difícil de usar?",
  "¿qué hacen con los datos?", "¿cuánto cuesta?" (ver FAQ, sección 4.8)

SEO — KEYWORDS
- Principal: pastillero inteligente
- Secundarias: recordatorio de medicamentos para adultos mayores · alarma para pastillas con
  aviso a familiar · pastillero con alarma Lima · cómo ayudar a un adulto mayor a tomar sus medicinas
- Intención: comercial (principal) e informacional (secundarias)
```

---

## 2. Orientation (O) — Dirección visual

```
DIRECCIÓN VISUAL — VitaliCare

ESTILO GENERAL
- En una frase: cálido y sereno, como un producto de salud confiable pero cercano;
  tres compartimentos de color como firma visual.
- Mood: claro, cálido, sereno. Minimalismo 6/10 (aireado, no austero).

PALETA (valores reales del prototipo memory-meds-pro, leídos de su CSS)
- Primario (marca, titulares, links): azul #0963b5  (5.8:1 sobre el fondo crema)
- Texto sobre el primario: #f9fcff
- CTA (se usa SOLO en botones de acción): verde #007f35, hover #006b2c
  (blanco sobre #007f35 = 5.1:1; sobre #006b2c = 6.7:1)
- Acento claro / secundario: #d7eaff, con texto #0a2e54 (11.2:1)
- Fondo principal: crema #fffaf0 · Fondo apagado: #f4eee0 · Tarjetas: #ffffff
- Texto: #0d1926 (17:1 sobre el crema) · Texto secundario: #424e5d (8.1:1)
- Bordes: tarjetas #b6c6d7 · campos #a7bacd
- Estados: error #c50516 (blanco encima = 6.2:1, siempre con ícono y texto) ·
  advertencia #d46600 (solo con texto oscuro #0d1926 encima = 4.8:1; blanco encima NO pasa)
- Compartimentos (firma), tomados del PMV nuevo vitali-care-pmv, que es donde existen:
  Mañana #f6c835 · Tarde #f3821d · Noche #1e3263
- Nota: el PMV nuevo usa un azul un poco distinto (#315ea9) y un fondo azulado (#eff6fd).
  La landing sigue el prototipo memory-meds-pro (#0963b5 y crema); las capturas del PMV
  que se muestren en la maqueta conservan sus colores originales.

TIPOGRAFÍA (la misma del prototipo)
- Una sola familia: Atkinson Hyperlegible (diseñada para baja visión: muy coherente con adultos
  mayores). Titulares en peso 700, cuerpo en 400, nunca más ligero.
- Cuerpo base 18px en la landing (el prototipo usa 21px dentro de la app), interlineado 1.6;
  titulares con clamp(); la jerarquía se construye con tamaño, peso y espacio, no con una
  segunda tipografía.
- Radio de esquinas: 1rem (16px), igual que el prototipo.

LENGUAJE DE LAYOUT
- Simetría: asimétrico (hero 55/45, columnas alternadas en "Cómo funciona", bento en beneficios)
- Densidad: espacioso
- Elemento de firma: la "franja de tres compartimentos" (amarillo · naranja · azul oscuro,
  tres segmentos redondeados) como divisor entre secciones y detalle del botón del hero

ESTILO FOTOGRÁFICO/ILUSTRATIVO
- Fuente: fotografía generada y curada + ilustración SVG propia del pastillero
- Tratamiento de color: grading cálido natural, con una sutil capa azul #0963b5 en sombras
  (para que no se sienta foto de stock)
- Encuadre: planos medios y detalles (manos, pastillero, celular), nada de poses de catálogo
- Toda imagen o maqueta no real lleva la nota "Representación ilustrativa"

FIRMA DE MOVIMIENTO
- Tempo: sereno. Duración base 500ms, easing ease-out (cubic-bezier(0.22, 1, 0.36, 1))
- Entrada dominante: fade + translateY 16px (12px en móvil)
- Densidad: momentos puntuales (hero, pasos, contadores de validación); no animar todo
- Gesto de firma: el LED del pastillero que se enciende con un pulso suave, y un subrayado
  que se dibuja bajo "solo si importa"

ELEMENTOS A EVITAR
- Gradientes púrpura/azul, cards con sombra centradas por defecto, stock con apretones
  de mano o batas blancas, estetoscopios, montañas de pastillas, tono alarmista,
  hover como única señal en móvil
```

---

## 3. Resources (R)

**Formato:** AVIF primero y WebP como fallback (next/image lo resuelve con `images.formats`). Hero hasta 400 KB, resto hasta 200 KB. `width`/`height` explícitos. Hero con `priority` (fetchpriority alto, sin lazy). Nombres de archivo con keyword.

| Archivo en `public/images/` | Uso | Dimensiones | Alt text |
|---|---|---|---|
| `pastillero-inteligente-vitalicare.svg` (componente SVG) | Hero | vectorial | "Pastillero inteligente VitaliCare con tres compartimentos de mañana, tarde y noche" |
| `adulto-mayor-tomando-pastilla-lima.avif` | Beneficios o problema | 1200×900 | "Adulta mayor tomando su pastilla en la cocina de su casa" |
| `familiar-revisando-aviso-celular.avif` | CTA final | 1200×900 | "Hijo revisando en su celular que su mamá confirmó su pastilla" |
| `paso-1-alarma-luz.svg`, `paso-2-ya-tome.svg`, `paso-3-aviso-familia.svg` | Cómo funciona | 640×480 | descripción del paso |
| `app-inicio.avif`, `app-alarma.avif`, `app-aviso-familiar.avif` | Maqueta del prototipo | 780×1688 | descripción de la pantalla |
| `og-vitalicare.png` | Open Graph | 1200×630 | — |

**Cómo obtenerlas** (herramientas de la metodología): fotos con GPT Images o Midjourney; capturas de la app tomadas del prototipo en el celular.

Prompts para las fotos:
- *"Fotografía editorial natural, cocina latinoamericana con luz de ventana cálida, una mujer de 72 años sonriendo mientras toma una pastilla con un vaso de agua, un pastillero de tres compartimentos de colores sobre la mesa, plano medio, colores cálidos naturales, sin poses de catálogo, sin texto."*
- *"Fotografía editorial natural, un hombre de 40 años en una sala de casa revisando su celular con gesto de tranquilidad, luz cálida de tarde, plano medio, sin poses de catálogo, sin texto."*

Sin assets reales todavía: la landing debe verse completa con la ilustración SVG y las capturas de la app. Las fotos son una mejora, no un bloqueo (usar un bloque de color de marca con la ilustración mientras tanto, nunca un recuadro gris vacío).

---

## 4. Synthesis (S) — Estructura y copy final

Largo: **media (9 secciones)**. Razón: es una compra de salud para un tercero y la oferta (lista de espera) es gratuita, pero la familia necesita resolver objeciones antes de dejar datos. **Mínimo 3 CTAs** (hero, mitad, cierre) más barra pegajosa en móvil. Navegación mínima: logo + 4 anclas (Cómo funciona, Prototipo, Precio, Preguntas) + botón. Cada sección abre con una respuesta directa de 1 o 2 frases.

### 4.1 Hero
- Eyebrow: **Pastillero inteligente · Hecho en Lima**
- H1: **Pastillero inteligente que avisa a tu familia solo si importa**
- Subtítulo: *Que nunca olvide su pastilla, y que tú no tengas que preguntar. Alarma con luz LED, un botón «YA TOMÉ» y un aviso a tu celular únicamente si una toma no se confirma.*
- CTA primario: **Quiero unirme a la lista de espera** (ancla al formulario)
- CTA secundario (texto): Ver cómo funciona
- Microcopy bajo el CTA: *Sin pago ahora · Te escribimos cuando abramos cupos*
- Línea de confianza: *Proyecto en validación con familias de Lima*
- Visual: ilustración SVG del pastillero con el LED pulsando; en desktop a la derecha (55/45), en móvil debajo del CTA sin empujarlo fuera de la primera pantalla.
- Subrayado dibujado bajo "solo si importa".

### 4.2 Problema
- H2: **Cuando cuidas a un adulto mayor, recordar sus medicinas se vuelve una carga**
- Apertura: *Con varias pastillas al día, los olvidos y las confusiones son comunes, y la familia termina llamando a cada rato.*
- Tres tarjetas: **Se le olvida** (una toma se pasa y nadie lo nota hasta tarde) · **No sé si ya se la tomó** (preguntas, llamadas y la duda que no se va) · **Se confunde entre tantas pastillas** (¿es la de la mañana o la de la noche?)
- Cierre: *Tú no deberías ser el recordatorio de nadie. VitaliCare lo hace por ti.*
- CTA de mitad: **Quiero unirme a la lista de espera** · microcopy *Dejas tu nombre y un contacto, nada más*

### 4.3 Cómo funciona
- H2: **Cómo funciona el pastillero inteligente VitaliCare**
- Apertura: *En tres pasos: suena, confirma y la familia se entera solo si algo falla.*
- 1) **Suena y se enciende la luz** — A la hora de la toma, el compartimento correcto (mañana, tarde o noche) se ilumina y suena la alarma.
- 2) **Presiona «YA TOMÉ»** — Un solo botón grande. Si hay un olvido, la alarma sigue sonando aunque no haya internet.
- 3) **La familia se entera solo si algo falla** — Si pasan 15, 20 o 30 minutos (tú eliges) sin confirmar, te llega un aviso. Si todo va bien, no te llega nada.
- Layout: columnas alternadas (Z), ilustración por paso.

### 4.4 Beneficios
- H2: **Pensado para que haga una sola cosa: tomar y confirmar**
- Apertura: *Menos funciones a la vista y más claridad en la acción principal.*
- Bento de 6: **Alarma con luz LED** (cada compartimento, su color) · **Botón grande «YA TOMÉ»** (fácil de ver y de presionar) · **Aviso solo por excepción** (sin notificaciones a cada rato) · **Modo esencial** (la pantalla muestra lo mínimo) · **Funciona sin internet** (la alarma sigue sonando) · **Privacidad** (solo registra si tomó o no, sin diagnósticos).

### 4.5 Prototipo
- H2: **Mira cómo se ve la app del familiar**
- Apertura: *Así se ve el prototipo: la alarma, el botón y el aviso al familiar.*
- Maqueta de celular con 3 pantallas (inicio con «YA TOMÉ», alarma, aviso tipo mensaje: *"VitaliCare: María no confirmó su pastilla de las 8:00 a. m. hace 15 minutos."*).
- Botón: **Probar el prototipo** → `NEXT_PUBLIC_PMV_URL` (nueva pestaña, `rel="noopener noreferrer"`).
- Nota pequeña: *Representación ilustrativa. El prototipo es una versión en pruebas.*

### 4.6 Validación (condicional)
Renderizar **solo si `NEXT_PUBLIC_SHOW_VALIDATION=true`**. Condición del equipo: confirmar que las 10 entrevistas son reales antes de activarla.
- H2: **Lo que aprendimos en 10 entrevistas**
- Apertura: *Hablamos con 10 personas, entre familiares y adultos mayores, antes de construir.*
- Tres cifras con contador animado: **90%** lo usaría o lo recomendaría · **4.6 de 5** valoró la alerta al familiar (100% la calificó con 4 o 5) · **8 de 10** dice que la familia pagaría.
- Nota obligatoria: *Estudio exploratorio con 10 personas. No representa a toda la población.*
- No agregar testimonios, citas ni cifras externas.

### 4.7 Precio de referencia
- H2: **¿Cuánto costará? Precio de referencia**
- Apertura: *Estamos validando precios; esto es lo que las familias nos dijeron que podrían pagar.*
- Tarjeta 1: **Pastillero · desde ≈ S/ 200** · Tarjeta 2: **App y avisos · ≈ S/ 15 al mes**
- Nota: *Precio de referencia en preventa. Puede cambiar al lanzamiento.*
- CTA: **Reservar mi lugar** · microcopy *Reservar no te obliga a comprar*
- Sin urgencia falsa, sin descuentos inventados, sin "cupos limitados".

### 4.8 Preguntas frecuentes
- H2: **Preguntas frecuentes sobre el pastillero inteligente**
- ¿Y si no hay internet? — La alarma y la luz siguen funcionando. El aviso al familiar necesita conexión para llegar.
- ¿Qué pasa si se acaba la batería? — El pastillero muestra el nivel de batería y avisa antes de que se agote.
- ¿Qué datos guardan? — Solo si la persona tomó o no su pastilla y a qué hora. No guardamos diagnósticos. Tú decides quién ve el registro.
- ¿Sirve si toma muchos medicamentos? — Sí. Tiene tres compartimentos, por horario: mañana, tarde y noche.
- ¿Es difícil de usar para un adulto mayor? — Está pensado para una sola acción: presionar «YA TOMÉ». Además, el modo esencial muestra lo mínimo en pantalla.
- ¿Cuándo estará disponible? — Seguimos validando el producto. Quienes se unan a la lista de espera serán los primeros en enterarse, sin fecha prometida.
- ¿Reemplaza al médico? — No. Ayuda a recordar tomas; no da diagnósticos ni cambia indicaciones médicas.
(Mantener las respuestas autónomas de 1 o 2 frases: son pasajes que buscadores y asistentes de IA pueden citar. `FAQPage` JSON-LD es opcional y ya no genera resultado enriquecido; no priorizarlo.)

### 4.9 CTA final + formulario
- H2: **Reserva tu lugar en la lista de espera**
- Apertura: *Déjanos tu nombre y un contacto y te avisamos cuando abramos cupos.*
- Campos (3 + consentimiento, label arriba, nunca solo placeholder): **Nombre** · **WhatsApp o correo** (hint: *Ej: 987 654 321 o nombre@correo.com*) · **Soy…** (adulto mayor / familiar cuidador / ambos)
- Casilla obligatoria: *Acepto que VitaliCare use mis datos solo para avisarme del lanzamiento. Más información en la [política de privacidad](/privacidad).*
- Botón (ancho completo en móvil): **Unirme a la lista de espera**
- Mensajes de error pegados al campo, que dicen qué hacer: *Escribe tu nombre* · *Escribe un celular de 9 dígitos que empiece con 9, o un correo con @* · *Elige una opción* · *Marca la casilla para continuar*. Sin "¡Ups!" ni "Campo inválido".
- Error de red: *No se pudo enviar el formulario. Revisa tu conexión y vuelve a intentar.*
- Éxito (en la misma página, con `aria-live`): *Listo, ya estás en la lista. Te escribiremos cuando abramos cupos.*

### 4.10 Footer
Logo · enlaces a Política de privacidad y Términos · correo de contacto · línea: *VitaliCare es un proyecto académico (USIL · Oportunidad de Negocios · Grupo 7). No reemplaza el consejo médico ni es un dispositivo médico certificado.* Redes sociales fuera por ahora (dejar el espacio preparado). Sin botón flotante de WhatsApp: el enlace a WhatsApp va en el footer, para no competir con la barra pegajosa.

**Barra CTA pegajosa en móvil:** aparece después del primer scroll, desaparece al llegar al formulario final. Texto: *Unirme a la lista de espera*.

---

## 5. Stack tecnológico (el mismo de las landings anteriores)

Decisión heredada de la landing de AyudemosMás (consejo LLM de 2 rondas, 19 set 2026): mantiene un solo ecosistema de componentes en FORST y buen rendimiento en gama media y 4G. Todo con las versiones estables actuales en el momento de crear el proyecto.

| Capa | Elección | Nota |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Renderizado **SSG** en `/`, `/privacidad` y `/terminos`. Nunca CSR puro |
| Lenguaje | **TypeScript** estricto | Sin `any` |
| Estilos | **Tailwind CSS v4** | Tokens con `@theme` en CSS (sin `tailwind.config.js`) |
| Animación | **Motion** (`motion/react`) | Sin GSAP, Lenis ni Three.js. `LazyMotion` + `domAnimation` para bundle mínimo |
| Formulario | **React Hook Form + Zod + Server Actions** | Esquema Zod compartido cliente y servidor |
| Email | **Resend** | Notificación al equipo por cada registro. Opcional si no hay API key |
| Hosting | **Vercel** + **Vercel Analytics** | Despliegue desde GitHub |
| Fuentes | `next/font/google` | `Atkinson_Hyperlegible` (pesos 400 y 700), `display: swap`. Si no aparece en la versión instalada, usar `Atkinson_Hyperlegible_Next` |
| Imágenes | `next/image` | AVIF primero, WebP de respaldo |
| Íconos | `lucide-react` | |
| Legal | Aviso de privacidad bajo **Ley 29733** (Perú) | Con transparencia de transferencia internacional de datos |
| CMS | **No se usa** | Sanity quedó para catálogos; aquí el contenido vive en `content/landing.ts` |

### Estructura de archivos
```
app/
  layout.tsx              fuentes, metadata global, Analytics, robots condicional
  page.tsx                compone las secciones (Server Component)
  privacidad/page.tsx
  terminos/page.tsx
  actions/waitlist.ts     Server Action: valida con Zod, honeypot, Resend opcional
  opengraph-image.tsx     o /public/images/og-vitalicare.png
  sitemap.ts
  robots.ts
components/
  site-header.tsx  hero.tsx  problem.tsx  how-it-works.tsx  benefits.tsx
  prototype-showcase.tsx  validation-strip.tsx  pricing.tsx  faq.tsx
  waitlist-form.tsx  sticky-cta.tsx  site-footer.tsx
  pillbox-illustration.tsx    SVG animado propio (LED que pulsa)
  compartment-divider.tsx     franja de tres compartimentos (firma de layout)
  motion/reveal.tsx           wrapper de entrada (client)
  motion/count-up.tsx         contador para la validación (client)
content/
  landing.ts              TODO el copy de la sección 4, en un solo lugar tipado
lib/
  config.ts               constantes y flags desde variables de entorno
  waitlist-schema.ts      esquema Zod compartido
public/images/            ver sección 3
```

### Variables de entorno (`.env.example`)
```
NEXT_PUBLIC_SITE_URL=https://vitalicare.vercel.app
NEXT_PUBLIC_PMV_URL=https://vitali-care-pmv.lovable.app/
NEXT_PUBLIC_INDEXABLE=false
NEXT_PUBLIC_SHOW_VALIDATION=false
NEXT_PUBLIC_CONTACT_EMAIL=hola@vitalicare.pe
NEXT_PUBLIC_WHATSAPP_NUMBER=51900000000
RESEND_API_KEY=
WAITLIST_NOTIFY_TO=
WAITLIST_FROM=VitaliCare <onboarding@resend.dev>
```
Los valores del ejemplo son marcadores; el equipo los cambia antes de publicar.

### Tokens (Tailwind v4, en `app/globals.css`)
```css
@import "tailwindcss";

@theme {
  /* Marca (memory-meds-pro) */
  --color-brand: #0963b5;
  --color-brand-foreground: #f9fcff;
  --color-accent: #d7eaff;
  --color-accent-foreground: #0a2e54;
  --color-cta: #007f35;
  --color-cta-hover: #006b2c;
  --color-cream: #fffaf0;
  --color-cream-deep: #f4eee0;
  --color-card: #ffffff;
  --color-ink: #0d1926;
  --color-muted: #424e5d;
  --color-line: #b6c6d7;
  --color-line-input: #a7bacd;
  --color-danger: #c50516;
  --color-warning: #d46600;
  /* Firma: compartimentos (PMV) */
  --color-morning: #f6c835;
  --color-afternoon: #f3821d;
  --color-night: #1e3263;

  --radius-card: 1rem;
  --font-sans: var(--font-atkinson), ui-sans-serif, system-ui, sans-serif;
}

html { scroll-behavior: smooth; }
body {
  background: var(--color-cream);
  color: var(--color-ink);
  font-family: var(--font-sans);
  font-size: 1.125rem;
  line-height: 1.6;
}
h1, h2, h3 { font-weight: 700; line-height: 1.15; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```
Regla: `--color-cta` y su hover se usan únicamente en botones de acción (hero, mitad, cierre, barra pegajosa). Ningún otro elemento lleva ese verde.

### `next.config.ts` (puntos obligatorios)
- `images.formats: ["image/avif", "image/webp"]`
- `poweredByHeader: false`
- Cabeceras de seguridad en `headers()`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY`.

### Server Action (esqueleto)
```ts
"use server";
import { waitlistSchema } from "@/lib/waitlist-schema";

export async function joinWaitlist(_: unknown, formData: FormData) {
  const raw = Object.fromEntries(formData);
  if (raw.company) return { ok: true };            // honeypot: los bots llenan este campo oculto
  const parsed = waitlistSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, errors: parsed.error.flatten().fieldErrors };
  // Resend solo si hay RESEND_API_KEY y WAITLIST_NOTIFY_TO; si no, console.info sin datos personales completos
  return { ok: true };
}
```
Reglas del formulario: validación en tiempo real, errores junto al campo, `aria-live="polite"` para éxito y error, botón con estado de carga, y nunca poner datos personales en la URL ni en los logs de producción.

### Animación con Motion
- Envolver la app con `MotionConfig reducedMotion="user"` y usar `LazyMotion features={domAnimation}` con el componente `m`.
- `Reveal`: fade + translateY 16px (12px en móvil), 500ms, `ease-out`, `viewport={{ once: true, amount: 0.2 }}`. Stagger de 0.1s entre tarjetas.
- El CTA y los inputs son interactivos desde el frame 0: nunca `pointer-events: none` durante la entrada.
- Con reduced motion: sin translate ni escala, solo opacidad; el LED deja de pulsar y queda encendido fijo.
- El contenido crítico (H1, copy, CTA, enlaces) existe en el HTML servido; la animación no puede ser requisito para que sea legible.
- Componentes animados fuera del primer viewport con `dynamic import`.

---

## 6. SEO técnico

- **Metadata API** en `layout.tsx`: `metadataBase`, `lang="es-PE"`, Open Graph y Twitter card, favicon con el corazón.
- **Meta title (58 caracteres):** `Pastillero inteligente con aviso a la familia | VitaliCare`
- **Meta description (153 caracteres):** `VitaliCare es un pastillero con alarma y luz LED que avisa a tu familia solo si una toma no se confirma. Únete a la lista de espera y sé de los primeros.`
- **H1 único** con la keyword; **H2s** con secundarias, en forma de pregunta cuando refleje una búsqueda real.
- **Indexabilidad:** `robots: { index: process.env.NEXT_PUBLIC_INDEXABLE === "true" }` en metadata y en `robots.ts`. Si es indexable, el contenido de decisión (cómo funciona, FAQ, precio, validación) ya está debajo del CTA.
- **Schema JSON-LD:** `Organization` + `WebSite`. **No** marcar `Product` con `Offer`/precio (aún no se vende, sería engañoso). `AggregateRating`/`Review`: nunca, no hay reseñas reales.
- `sitemap.ts` y `robots.ts`.
- **Core Web Vitals (datos de campo, p75):** LCP ≤ 2.5 s · INP ≤ 200 ms · CLS ≤ 0.1.
- **Verificar SSG:** `npm run build` debe mostrar `/` como estática, y `curl` a la página servida debe contener el H1 y el CTA en el HTML.
- Sin llms.txt ni markup especial para IA: no aporta.

---

## 7. Privacidad y cumplimiento (Ley 29733, Perú)

Páginas `/privacidad` y `/terminos` en lenguaje simple, breves y honestas. La privacidad debe incluir:
- **Quién trata los datos** (el equipo del proyecto, con correo de contacto) y para qué: **solo** avisar del lanzamiento y la lista de espera.
- **Qué datos**: nombre, WhatsApp o correo, y el perfil (adulto mayor, familiar o ambos).
- **Plazo**: se eliminan al cerrar el proyecto o cuando la persona lo pida.
- **Derechos**: acceder, rectificar, cancelar y oponerse, con el correo para ejercerlos.
- **Transferencia internacional**: los datos pasan por servicios con servidores fuera del Perú (Vercel y Resend), dicho de forma transparente.
- **Cookies y analítica**: solo Vercel Analytics, sin identificar a la persona, y sin banner de cookies si no se usan cookies de seguimiento.
- Pendiente: **revisión legal** del texto antes de publicar. Esto es un borrador técnico, no asesoría legal.

---

## 8. Auditoría antes de entregar (gate de la fase T)

Ejecutar la auditoría de `references/qa.md` de FORST (103 puntos, mínimo 75) y los antipatrones. Para este proyecto, reglas de interpretación honestas:
- **Prueba social:** no hay logos ni testimonios reales y **no se inventan**. Esos ítems se marcan ❌ y se documentan como pendientes (no se "arreglan" con contenido falso). La franja de validación con nota de estudio exploratorio es la prueba social disponible.
- **Antipatrones binarios:** cero urgencia falsa, cero testimonios anónimos, cero buzzwords vacíos, un solo `h1`, meta title ≤ 60.
- **Checks técnicos manuales:** viewport de 320 px y 1920 px, zoom de texto al 200% sin recortes, sin scroll horizontal, objetivos táctiles de 48 px, contraste (4.5:1 en texto ≤17px), foco visible, navegación completa con teclado, `prefers-reduced-motion`.
- **Contrastes ya verificados (no cambiar sin recalcular):** blanco sobre `#007f35` 5.1:1 · `#f9fcff` sobre `#0963b5` 5.9:1 · `#0963b5` sobre `#fffaf0` 5.8:1 · `#0d1926` sobre `#fffaf0` 17:1 · `#424e5d` sobre `#fffaf0` 8.1:1 · `#0d1926` sobre `#f6c835` 11:1 · blanco sobre `#1e3263` 12:1. Blanco sobre `#d46600` solo da 3.7:1: no usarlo.
- **Herramientas:** `npm run build`, `npm run lint`, Lighthouse móvil (objetivo >90) y axe (extensión) sin errores críticos.

Plantilla de entrega al final de la fase T:
```
AUDITORÍA — VitaliCare — Landing Page
PUNTAJE TOTAL: [X]/103
Hero: [X]/21 · Propuesta de valor: [X]/15 · Prueba social: [X]/15 · CTA y conversión: [X]/15
Copy: [X]/15 · Diseño y UX: [X]/11 · Técnico: [X]/11
CRÍTICO:  ALTA PRIORIDAD:  LISTO PARA ENTREGAR: Sí / No
```

---

## 9. Plan de ejecución para Claude Code (en orden)

1. **Scaffold:** `npx create-next-app@latest . --ts --tailwind --app --eslint --no-src-dir --import-alias "@/*"` (Next.js 16, Tailwind v4). Instalar `motion react-hook-form @hookform/resolvers zod lucide-react @vercel/analytics resend`. Crear `.env.example` y `lib/config.ts`.
2. **Tokens y base:** `globals.css` (sección 5), fuente Atkinson Hyperlegible con `next/font/google` (variable `--font-atkinson`), `layout.tsx` con metadata, `MotionConfig` y Analytics, `next.config.ts`.
3. **Contenido tipado:** crear `content/landing.ts` con TODO el copy de la sección 4, sin texto suelto dentro de los componentes.
4. **Componentes de marca:** `pillbox-illustration.tsx` (SVG con tres compartimentos y LED animado), `compartment-divider.tsx`, botón CTA (color `--color-cta` solo para CTAs), tarjeta, acordeón accesible.
5. **Secciones** en el orden de la sección 4, mobile first (390 px), luego 768 y 1280. Hero 55/45, sin empujar el CTA fuera de la primera pantalla en móvil.
6. **Movimiento:** `Reveal`, `CountUp`, subrayado dibujado, LED. Verificar reduced motion.
7. **Formulario:** `waitlist-schema.ts`, `waitlist-form.tsx`, Server Action, honeypot, mensajes exactos de la sección 4.9, almacenamiento a futuro (Supabase) como comentario `TODO`.
8. **SEO y legal:** metadata, JSON-LD, sitemap, robots condicional, `/privacidad` y `/terminos`.
9. **Auditoría:** sección 8. Corregir lo crítico y lo de alta prioridad.
10. **Repositorio y despliegue:** seguir la sección 12 completa. No se publica a producción sin auditoría ≥75 y sin confirmación explícita del equipo.

---

## 10. Reglas que Claude Code no puede romper

- Nada de testimonios, reseñas, logos de clientes, sellos, "avalado por médicos" ni cifras externas inventadas.
- La franja de validación solo usa las tres cifras de la sección 4.6 y se oculta si el flag está en `false`.
- Todo precio va marcado como "de referencia" y "en preventa". Sin urgencia ni escasez falsa.
- Las imágenes o maquetas no reales llevan "Representación ilustrativa".
- La landing no cambia el prototipo: solo enlaza a él.
- Una sola acción principal (lista de espera) y un solo color de CTA.
- Redes sociales fuera por ahora.
- Los textos legales son borrador y llevan la nota de revisión pendiente en el README.

---

## 11. Decisiones abiertas (las completa el equipo)

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

---

## 12. Repositorio y despliegue (lo ejecuta Claude Code)

**Lo que hace el humano una vez:** `gh auth login` y `vercel login`. Claude Code no escribe contraseñas, tokens ni claves de API: si un CLI pide iniciar sesión, se detiene y lo dice. Los valores de `RESEND_API_KEY` y similares los carga el equipo (en `vercel env add` o en el panel de Vercel), nunca se pegan en el chat ni se suben al repo.

### 12.1 Git y GitHub
1. `git init -b main` y un `.gitignore` con `node_modules`, `.next`, `.env*`, `!.env.example`, `.vercel`, `*.log`.
2. Un commit por cada fase del plan (sección 9), con mensajes claros (`feat: hero y franja de compartimentos`, `feat: formulario y server action`, `chore: seo y legal`).
3. Crear el repositorio: `gh repo create vitalicare-landing --private --source=. --remote=origin --push` (privado por defecto; cambiar a público solo si el equipo lo confirma).
4. `README.md` con: qué es el proyecto, cómo correrlo (`npm install`, `npm run dev`), variables de entorno (`.env.example`), cómo desplegar, y la nota de que los textos legales son borrador pendiente de revisión.
5. **CI en GitHub Actions** (`.github/workflows/ci.yml`) en cada push y pull request: Node LTS, `npm ci`, `npm run lint`, `npx tsc --noEmit`, `npm run build`. Con variables de entorno de ejemplo para que el build no falle sin secretos.
6. Proteger `main` (revisar en Ajustes del repo) solo si el equipo trabaja con pull requests. Nunca `git push --force` a `main`.

### 12.2 Vercel
1. `vercel link` (proyecto `vitalicare-landing`, framework Next.js detectado automáticamente).
2. Conectar el repositorio de GitHub en el panel de Vercel (integración Git), para que cada push a `main` despliegue a producción y cada rama genere una vista previa.
3. Variables de entorno de `.env.example`, cargadas por el equipo en los tres entornos que correspondan. En **Preview** y **Development** dejar `NEXT_PUBLIC_INDEXABLE=false`.
4. Primer despliegue de vista previa: `vercel`. Revisar el enlace de vista previa completo en un celular real.
5. **Antes de producción, detenerse y pedir confirmación al equipo.** Solo con "sí" explícito: `vercel --prod`.
6. Dominio propio (opcional): se agrega después en Vercel, con los registros DNS que indique el panel.

### 12.3 Guardas antes de producción
Claude Code corre y muestra el resultado de cada una; si alguna falla, no se despliega:
- `grep -rn "51900000000\|hola@vitalicare.pe\|vitalicare.vercel.app" app components content lib` no debe encontrar marcadores sin reemplazar (o el equipo confirma que son los definitivos).
- `grep -rni "lorem\|TODO" app components content` revisado (solo se permite el `TODO` de conexión a base de datos de la Server Action).
- `npm run build` muestra `/`, `/privacidad` y `/terminos` como estáticas.
- Auditoría de la sección 8 con puntaje ≥ 75 entregada al equipo.
- `NEXT_PUBLIC_SHOW_VALIDATION` en `false` hasta que el equipo confirme que las 10 entrevistas son reales.

### 12.4 Verificación después de desplegar
- Abrir la URL en un celular real y probar el formulario de punta a punta (con un dato de prueba propio).
- Si Resend está configurado, confirmar que llega el correo de aviso al equipo.
- `curl -s <url> | grep -i "<h1"` devuelve el H1 en el HTML servido (SSG correcto).
- Con `NEXT_PUBLIC_INDEXABLE=false`, la página debe llevar `noindex` en el meta robots.
- PageSpeed Insights móvil: LCP ≤ 2.5 s, CLS ≤ 0.1, rendimiento > 90.
- Vercel Analytics recibiendo visitas.
- Reportar al equipo: URL de producción, URL de vista previa, puntaje de auditoría y lista de pendientes de la sección 11.

### 12.5 Reglas para este tramo
- Nunca subir `.env` ni claves al repositorio. Si una clave aparece en un archivo, detenerse y avisar.
- Nada de acciones destructivas (borrar el repositorio o el proyecto de Vercel, `push --force`) sin que el equipo lo pida explícitamente.
- Sin publicar redes sociales ni anuncios: eso queda fuera de esta fase.

---

## 13. Decisiones de la sesión (30 oct 2026) — prevalecen sobre lo anterior

- **Repositorio:** ya existe y está vacío: `https://github.com/alchn1904/Vitalicare.git` (remote `origin`, rama `main`). No usar `gh repo create`. `gh` y `vercel` CLI no están instalados: el despliegue a Vercel lo hace el equipo conectando el repo en el panel. Sin `vercel --prod` en esta sesión.
- **Redes sociales:** el usuario entregó las redes, así que **sí van en el footer** (reemplaza "redes fuera por ahora"): TikTok `https://www.tiktok.com/@vitalicare_pe` e Instagram `https://www.instagram.com/vitalicare_pe`. Enlaces de texto + ícono SVG inline (no logos de marca de terceros como imagen grande), nueva pestaña, `rel="noopener noreferrer"`. Constantes en `lib/config.ts`.
- **Mockup (fase S):** se salta; el brief ya fija layout, copy y tokens. Se implementa directo.
- **Capturas de la app:** no hay capturas reales. Las tres pantallas del celular se construyen en JSX/SVG (componente) con los colores del PMV, con la nota "Representación ilustrativa".
- **Fotos:** no hay. Donde el brief pide foto, se usa bloque de color de marca + ilustración SVG (nunca recuadro gris).
