/**
 * Pone en mayúscula la primera letra al renderizar, saltando signos iniciales
 * como "¿" o "¡". No modifica el string fuente de content/landing.ts.
 */
export function capitalizeFirst(text: string): string {
  return text.replace(/^(\P{L}*)(\p{L})/u, (_match, lead: string, letter: string) => {
    return lead + letter.toLocaleUpperCase("es-PE");
  });
}

/** Separa un párrafo en su primera frase y el resto (p. ej. para resaltar la segunda). */
export function splitFirstSentence(text: string): [string, string] {
  const match = /^(.+?[.!?])\s+(.+)$/u.exec(text);
  return match ? [match[1], match[2]] : [text, ""];
}
