/**
 * Copy de /privacidad y /terminos (docs/SPEC.md §7).
 * Borrador técnico pendiente de revisión legal: no es asesoría legal.
 */
import { contactEmail } from "@/lib/config";

export type LegalLink = {
  readonly label: string;
  readonly href: string;
};

/** Texto plano o enlace dentro de un párrafo o viñeta. */
export type LegalInline = string | LegalLink;

export type LegalBlock =
  | { readonly type: "paragraph"; readonly content: readonly LegalInline[] }
  | { readonly type: "list"; readonly items: readonly (readonly LegalInline[])[] };

export type LegalSection = {
  readonly heading: string;
  readonly blocks: readonly LegalBlock[];
};

export type LegalDocument = {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly title: string;
  readonly updated: string;
  readonly intro: readonly LegalInline[];
  readonly sections: readonly LegalSection[];
  readonly draftNote: string;
};

export const legalChrome = {
  backLink: "← Volver al inicio",
  backHref: "/",
  brand: "VitaliCare",
} as const;

const email: LegalLink = { label: contactEmail, href: `mailto:${contactEmail}` };

const updated = "Última actualización: 30 de octubre de 2026";
const draftNote = "Borrador pendiente de revisión legal.";

export const privacy: LegalDocument = {
  metaTitle: "Política de privacidad | VitaliCare",
  metaDescription:
    "Qué datos pide la lista de espera de VitaliCare, para qué los usamos, cuánto tiempo los guardamos y cómo ejercer tus derechos.",
  title: "Política de privacidad",
  updated,
  intro: [
    "Aquí te contamos, en palabras simples, qué hacemos con los datos que nos dejas al unirte a la lista de espera de VitaliCare.",
  ],
  sections: [
    {
      heading: "Quién trata tus datos",
      blocks: [
        {
          type: "paragraph",
          content: [
            "El equipo del proyecto académico VitaliCare (USIL · Oportunidad de Negocios · Grupo 7). Puedes escribirnos a ",
            email,
            ".",
          ],
        },
      ],
    },
    {
      heading: "Para qué los usamos",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Solo para avisarte del lanzamiento de VitaliCare y gestionar la lista de espera. No los usamos para nada más, no los vendemos y no los compartimos con terceros para publicidad.",
          ],
        },
      ],
    },
    {
      heading: "Qué datos pedimos",
      blocks: [
        {
          type: "list",
          items: [
            ["Tu nombre."],
            ["Tu número de WhatsApp o tu correo electrónico."],
            ["Tu perfil: adulto mayor, familiar o ambos."],
          ],
        },
        {
          type: "paragraph",
          content: ["No pedimos datos de salud, diagnósticos ni información de pago."],
        },
      ],
    },
    {
      heading: "Cuánto tiempo los guardamos",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Los eliminamos al cerrar el proyecto o antes, cuando tú nos lo pidas.",
          ],
        },
      ],
    },
    {
      heading: "Tus derechos",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Según la Ley N.º 29733, Ley de Protección de Datos Personales, y su reglamento, puedes:",
          ],
        },
        {
          type: "list",
          items: [
            ["Acceder a tus datos y saber qué tenemos."],
            ["Rectificarlos si están mal o incompletos."],
            ["Cancelarlos, es decir, pedir que los borremos."],
            ["Oponerte a que los usemos."],
          ],
        },
        {
          type: "paragraph",
          content: [
            "Para cualquiera de estos pedidos, escríbenos a ",
            email,
            ". Te respondemos lo antes posible.",
          ],
        },
      ],
    },
    {
      heading: "Dónde se guardan tus datos",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Para que la página y la lista de espera funcionen usamos servicios con servidores fuera del Perú: Vercel (aloja la página y procesa el formulario) y Resend (envía el correo de aviso al equipo). Por eso tus datos pueden viajar y guardarse fuera del país. Al enviar el formulario aceptas esta transferencia, que usamos solo para la finalidad descrita arriba.",
          ],
        },
      ],
    },
    {
      heading: "Cookies y analítica",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Usamos solo Vercel Analytics para contar visitas de forma agregada. No te identifica y no usa cookies de seguimiento. Por eso no verás un banner de cookies.",
          ],
        },
      ],
    },
  ],
  draftNote,
};

export const terms: LegalDocument = {
  metaTitle: "Términos | VitaliCare",
  metaDescription:
    "Condiciones de uso de la landing y la lista de espera de VitaliCare, un proyecto académico en validación.",
  title: "Términos",
  updated,
  intro: [
    "Estas son las condiciones para usar esta página y unirte a la lista de espera de VitaliCare.",
  ],
  sections: [
    {
      heading: "Un proyecto académico en validación",
      blocks: [
        {
          type: "paragraph",
          content: [
            "VitaliCare es un proyecto académico (USIL · Oportunidad de Negocios · Grupo 7). Hoy estamos validando la idea con familias; todavía no es un producto a la venta.",
          ],
        },
      ],
    },
    {
      heading: "La lista de espera no es una compra",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Unirte a la lista de espera es gratis. No es una compra, no te pide ningún pago y no te obliga a comprar nada después.",
          ],
        },
      ],
    },
    {
      heading: "Precios de referencia",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Los precios que ves en la página son de referencia y pueden cambiar antes del lanzamiento.",
          ],
        },
      ],
    },
    {
      heading: "No es un dispositivo médico",
      blocks: [
        {
          type: "paragraph",
          content: [
            "VitaliCare no es un dispositivo médico certificado y no reemplaza el consejo de tu médico. Ante cualquier duda sobre tus medicinas o tu tratamiento, consulta con un profesional de la salud.",
          ],
        },
      ],
    },
    {
      heading: "El prototipo es una versión en pruebas",
      blocks: [
        {
          type: "paragraph",
          content: [
            "El prototipo de la app que enlazamos es una versión en pruebas. Puede tener errores, cambiar o dejar de estar disponible.",
          ],
        },
      ],
    },
    {
      heading: "Tus datos",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Lo que hacemos con tus datos está en la ",
            { label: "Política de privacidad", href: "/privacidad" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Contacto",
      blocks: [
        {
          type: "paragraph",
          content: ["Si tienes preguntas, escríbenos a ", email, "."],
        },
      ],
    },
  ],
  draftNote,
};
