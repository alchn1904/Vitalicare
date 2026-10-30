import { hero } from "@/content/landing";

export default function Home() {
  return (
    <main id="contenido">
      <h1>
        {hero.title.before}
        <span>{hero.title.highlight}</span>
      </h1>
    </main>
  );
}
