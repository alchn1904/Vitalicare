import { ImageResponse } from "next/og";
import { hero, site } from "@/content/landing";

/*
 * Static OG image (no per-request data). Uses the OG runtime's bundled font
 * on purpose: no network fetch at build time.
 */

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  cream: "#fffaf0",
  ink: "#0d1926",
  brand: "#0963b5",
  morning: "#f6c835",
  afternoon: "#f3821d",
  night: "#1e3263",
  card: "#ffffff",
  line: "#b6c6d7",
} as const;

const segments = [colors.morning, colors.afternoon, colors.night] as const;

export default function OpengraphImage() {
  const headline = `${hero.title.before}${hero.title.highlight}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: colors.cream,
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 700 }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: colors.brand }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              color: colors.ink,
            }}
          >
            {headline}
          </div>
          <div style={{ display: "flex", marginTop: 44, gap: 14 }}>
            {segments.map((color) => (
              <div
                key={color}
                style={{ width: 120, height: 22, borderRadius: 11, background: color }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            padding: 28,
            borderRadius: 32,
            background: colors.card,
            border: `4px solid ${colors.line}`,
          }}
        >
          {segments.map((color) => (
            <div
              key={color}
              style={{ width: 230, height: 110, borderRadius: 20, background: color }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
