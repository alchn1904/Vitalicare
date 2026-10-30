/**
 * TODO el copy visible de la landing (docs/SPEC.md §3, §4, §6).
 * El texto de SPEC §4 es definitivo: no reescribirlo.
 */

export const site = {
  name: "VitaliCare",
  title: "Pastillero inteligente con aviso a la familia | VitaliCare",
  description:
    "VitaliCare es un pastillero con alarma y luz LED que avisa a tu familia solo si una toma no se confirma. Únete a la lista de espera y sé de los primeros.",
} as const;

export type Anchor = {
  readonly label: string;
  readonly href: `#${string}`;
};

export const nav = {
  logo: "VitaliCare",
  homeHref: "/",
  skipLink: "Saltar al contenido",
  ariaLabel: "Principal",
  homeLabel: "VitaliCare, ir al inicio",
  links: [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Prototipo", href: "#prototipo" },
    { label: "Precio", href: "#precio" },
    { label: "Preguntas", href: "#preguntas" },
  ],
  cta: { label: "Unirme a la lista de espera", href: "#lista-de-espera" },
} as const satisfies {
  logo: string;
  homeHref: string;
  skipLink: string;
  ariaLabel: string;
  homeLabel: string;
  links: readonly Anchor[];
  cta: Anchor;
};

// 4.1 Hero
export const hero = {
  eyebrow: "Pastillero inteligente · Hecho en Lima",
  title: {
    before: "Pastillero inteligente que avisa a tu familia ",
    highlight: "solo si importa",
  },
  subtitle:
    "Que nunca olvide su pastilla, y que tú no tengas que preguntar. Alarma con luz LED, un botón «YA TOMÉ» y un aviso a tu celular únicamente si una toma no se confirma.",
  primaryCta: { label: "Quiero unirme a la lista de espera", href: "#lista-de-espera" },
  secondaryCta: { label: "Ver cómo funciona", href: "#como-funciona" },
  microcopy: "Sin pago ahora · Te escribimos cuando abramos cupos",
  trustLine: "Proyecto en validación con familias de Lima",
  illustrationAlt:
    "Pastillero inteligente VitaliCare con tres compartimentos de mañana, tarde y noche",
  // Micro-textos dentro de la ilustración del pastillero (decorativos; el SVG usa illustrationAlt)
  illustration: {
    morning: "Mañana",
    afternoon: "Tarde",
    night: "Noche",
    time: "8:00 a. m.",
    button: "YA TOMÉ",
  },
} as const;

export type Card = {
  readonly title: string;
  readonly description: string;
};

// 4.2 Problema
export const problem = {
  id: "problema",
  title: "Cuando cuidas a un adulto mayor, recordar sus medicinas se vuelve una carga",
  intro:
    "Con varias pastillas al día, los olvidos y las confusiones son comunes, y la familia termina llamando a cada rato.",
  cards: [
    {
      title: "Se le olvida",
      description: "una toma se pasa y nadie lo nota hasta tarde",
    },
    {
      title: "No sé si ya se la tomó",
      description: "preguntas, llamadas y la duda que no se va",
    },
    {
      title: "Se confunde entre tantas pastillas",
      description: "¿es la de la mañana o la de la noche?",
    },
  ],
  closing: "Tú no deberías ser el recordatorio de nadie. VitaliCare lo hace por ti.",
  cta: { label: "Quiero unirme a la lista de espera", href: "#lista-de-espera" },
  ctaMicrocopy: "Dejas tu nombre y un contacto, nada más",
  imageAlt: "Adulta mayor tomando su pastilla en la cocina de su casa",
} as const satisfies { cards: readonly Card[] } & Record<string, unknown>;

// 4.3 Cómo funciona
export const howItWorks = {
  id: "como-funciona",
  title: "Cómo funciona el pastillero inteligente VitaliCare",
  intro: "En tres pasos: suena, confirma y la familia se entera solo si algo falla.",
  steps: [
    {
      number: 1,
      title: "Suena y se enciende la luz",
      description:
        "A la hora de la toma, el compartimento correcto (mañana, tarde o noche) se ilumina y suena la alarma.",
      imageAlt:
        "A la hora de la toma, el compartimento correcto (mañana, tarde o noche) se ilumina y suena la alarma.",
    },
    {
      number: 2,
      title: "Presiona «YA TOMÉ»",
      description:
        "Un solo botón grande. Si hay un olvido, la alarma sigue sonando aunque no haya internet.",
      imageAlt:
        "Un solo botón grande. Si hay un olvido, la alarma sigue sonando aunque no haya internet.",
    },
    {
      number: 3,
      title: "La familia se entera solo si algo falla",
      description:
        "Si pasan 15, 20 o 30 minutos (tú eliges) sin confirmar, te llega un aviso. Si todo va bien, no te llega nada.",
      imageAlt:
        "Si pasan 15, 20 o 30 minutos (tú eliges) sin confirmar, te llega un aviso. Si todo va bien, no te llega nada.",
    },
  ],
  // Micro-textos dentro de las ilustraciones de cada paso (decorativos)
  illustrations: {
    alarmCompartment: "Mañana",
    confirmButton: "YA TOMÉ",
    notifySender: "VitaliCare",
    notifyMessage: "María no confirmó su pastilla",
    notifyDelay: "15 min",
  },
} as const;

// 4.4 Beneficios
export const benefits = {
  id: "beneficios",
  title: "Pensado para que haga una sola cosa: tomar y confirmar",
  intro: "Menos funciones a la vista y más claridad en la acción principal.",
  items: [
    { title: "Alarma con luz LED", description: "cada compartimento, su color" },
    { title: "Botón grande «YA TOMÉ»", description: "fácil de ver y de presionar" },
    { title: "Aviso solo por excepción", description: "sin notificaciones a cada rato" },
    { title: "Modo esencial", description: "la pantalla muestra lo mínimo" },
    { title: "Funciona sin internet", description: "la alarma sigue sonando" },
    { title: "Privacidad", description: "solo registra si tomó o no, sin diagnósticos" },
  ],
  // Micro-texto del botón dibujado en la tarjeta 2 (decorativo)
  buttonLabel: "YA TOMÉ",
} as const satisfies { items: readonly Card[] } & Record<string, unknown>;

// 4.5 Prototipo
export const prototype = {
  id: "prototipo",
  title: "Mira cómo se ve la app del familiar",
  intro: "Así se ve el prototipo: la alarma, el botón y el aviso al familiar.",
  cta: { label: "Probar el prototipo" },
  screensLabel: "Pantallas del prototipo",
  note: "Representación ilustrativa. El prototipo es una versión en pruebas.",
  exampleNotice:
    "VitaliCare: María no confirmó su pastilla de las 8:00 a. m. hace 15 minutos.",
  screens: {
    home: {
      alt: "Pantalla de inicio de la app con el botón «YA TOMÉ»",
      greeting: "Hola, María",
      nextDoseLabel: "Próxima toma",
      nextDose: "Mañana · 8:00 a. m.",
      button: "YA TOMÉ",
    },
    alarm: {
      alt: "Pantalla de alarma de la app: hora de tu pastilla",
      title: "Hora de tu pastilla",
      compartmentLabel: "Compartimento",
      compartment: "Mañana",
      time: "8:00 a. m.",
    },
    notice: {
      alt: "Aviso tipo mensaje al familiar en el celular",
      sender: "VitaliCare",
      message:
        "VitaliCare: María no confirmó su pastilla de las 8:00 a. m. hace 15 minutos.",
    },
  },
} as const;

export type ValidationStat = {
  readonly value: number;
  readonly decimals: number;
  readonly suffix: string;
  readonly label: string;
};

// 4.6 Validación (solo si NEXT_PUBLIC_SHOW_VALIDATION=true)
export const validation = {
  id: "validacion",
  title: "Lo que aprendimos en 10 entrevistas",
  intro:
    "Hablamos con 10 personas, entre familiares y adultos mayores, antes de construir.",
  stats: [
    { value: 90, decimals: 0, suffix: "%", label: "lo usaría o lo recomendaría" },
    {
      value: 4.6,
      decimals: 1,
      suffix: " de 5",
      label: "valoró la alerta al familiar (100% la calificó con 4 o 5)",
    },
    { value: 8, decimals: 0, suffix: " de 10", label: "dice que la familia pagaría" },
  ],
  note: "Estudio exploratorio con 10 personas. No representa a toda la población.",
} as const satisfies { stats: readonly ValidationStat[] } & Record<string, unknown>;

// 4.7 Precio de referencia
export const pricing = {
  id: "precio",
  title: "¿Cuánto costará? Precio de referencia",
  intro:
    "Estamos validando precios; esto es lo que las familias nos dijeron que podrían pagar.",
  cards: [
    { title: "Pastillero · desde ≈ S/ 200", label: "Pastillero", price: "desde ≈ S/ 200" },
    { title: "App y avisos · ≈ S/ 15 al mes", label: "App y avisos", price: "≈ S/ 15 al mes" },
  ],
  badge: "Precio de referencia",
  note: "Precio de referencia en preventa. Puede cambiar al lanzamiento.",
  cta: { label: "Reservar mi lugar", href: "#lista-de-espera" },
  ctaMicrocopy: "Reservar no te obliga a comprar",
} as const;

// 4.8 Preguntas frecuentes
export const faq = {
  id: "preguntas",
  title: "Preguntas frecuentes sobre el pastillero inteligente",
  items: [
    {
      question: "¿Y si no hay internet?",
      answer:
        "La alarma y la luz siguen funcionando. El aviso al familiar necesita conexión para llegar.",
    },
    {
      question: "¿Qué pasa si se acaba la batería?",
      answer: "El pastillero muestra el nivel de batería y avisa antes de que se agote.",
    },
    {
      question: "¿Qué datos guardan?",
      answer:
        "Solo si la persona tomó o no su pastilla y a qué hora. No guardamos diagnósticos. Tú decides quién ve el registro.",
    },
    {
      question: "¿Sirve si toma muchos medicamentos?",
      answer: "Sí. Tiene tres compartimentos, por horario: mañana, tarde y noche.",
    },
    {
      question: "¿Es difícil de usar para un adulto mayor?",
      answer:
        "Está pensado para una sola acción: presionar «YA TOMÉ». Además, el modo esencial muestra lo mínimo en pantalla.",
    },
    {
      question: "¿Cuándo estará disponible?",
      answer:
        "Seguimos validando el producto. Quienes se unan a la lista de espera serán los primeros en enterarse, sin fecha prometida.",
    },
    {
      question: "¿Reemplaza al médico?",
      answer:
        "No. Ayuda a recordar tomas; no da diagnósticos ni cambia indicaciones médicas.",
    },
  ],
} as const satisfies {
  items: readonly { readonly question: string; readonly answer: string }[];
} & Record<string, unknown>;

export const waitlistRoles = ["adulto-mayor", "familiar", "ambos"] as const;
export type WaitlistRole = (typeof waitlistRoles)[number];

// 4.9 CTA final + formulario
export const waitlist = {
  id: "lista-de-espera",
  title: "Reserva tu lugar en la lista de espera",
  intro: "Déjanos tu nombre y un contacto y te avisamos cuando abramos cupos.",
  imageAlt: "Hijo revisando en su celular que su mamá confirmó su pastilla",
  // Micro-textos dentro de la ilustración del celular (decorativos)
  illustration: {
    heading: "Registro de hoy",
    person: "Mamá",
    compartment: "Mañana",
    status: "Confirmó",
    time: "8:00 a. m.",
  },
  fields: {
    name: { label: "Nombre" },
    contact: {
      label: "WhatsApp o correo",
      hint: "Ej: 987 654 321 o nombre@correo.com",
    },
    role: {
      label: "Soy…",
      options: [
        { value: "adulto-mayor", label: "adulto mayor" },
        { value: "familiar", label: "familiar cuidador" },
        { value: "ambos", label: "ambos" },
      ] as const satisfies readonly { readonly value: WaitlistRole; readonly label: string }[],
    },
    consent: {
      before:
        "Acepto que VitaliCare use mis datos solo para avisarme del lanzamiento. Más información en la ",
      linkLabel: "política de privacidad",
      linkHref: "/privacidad",
      after: ".",
    },
  },
  submit: "Unirme a la lista de espera",
  submitting: "Enviando…",
  errors: {
    name: "Escribe tu nombre",
    contact: "Escribe un celular de 9 dígitos que empiece con 9, o un correo con @",
    role: "Elige una opción",
    consent: "Marca la casilla para continuar",
    network: "No se pudo enviar el formulario. Revisa tu conexión y vuelve a intentar.",
  },
  success: "Listo, ya estás en la lista. Te escribiremos cuando abramos cupos.",
} as const;

// 4.10 Footer
export const footer = {
  logo: "VitaliCare",
  legalLinks: [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Términos", href: "/terminos" },
  ],
  social: {
    tiktok: "TikTok",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
  },
  legalNavLabel: "Legal",
  contactNavLabel: "Contacto y redes",
  emailLabel: "Correo",
  copyrightPrefix: "©",
  academicNote:
    "VitaliCare es un proyecto académico (USIL · Oportunidad de Negocios · Grupo 7). No reemplaza el consejo médico ni es un dispositivo médico certificado.",
} as const;

// Barra CTA pegajosa (móvil)
export const stickyCta = {
  label: "Unirme a la lista de espera",
  href: "#lista-de-espera",
} as const;

// Textos compartidos
export const common = {
  illustrativeNote: "Representación ilustrativa",
  newTab: "(se abre en una pestaña nueva)",
} as const;
