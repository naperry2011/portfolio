import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        ink: "var(--ink)",
        foreground: "var(--ink)",   // alias for any leftover references
        muted: "var(--muted)",
        rule: "var(--rule)",
        surface: "var(--surface)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      // Strict 1.250 (major third) scale
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],     // 11
        xs:   ["0.8125rem", { lineHeight: "1.125rem" }],  // 13
        sm:   ["0.875rem",  { lineHeight: "1.375rem" }],  // 14
        base: ["1rem",      { lineHeight: "1.625rem" }],  // 16
        lg:   ["1.125rem",  { lineHeight: "1.75rem" }],   // 18
        xl:   ["1.25rem",   { lineHeight: "1.75rem" }],   // 20
        "2xl":["1.5rem",    { lineHeight: "2rem" }],      // 24
        "3xl":["1.875rem",  { lineHeight: "2.25rem" }],   // 30
        "4xl":["2.375rem",  { lineHeight: "2.625rem" }],  // 38
        "5xl":["3.25rem",   { lineHeight: "3.25rem" }],   // 52
        "6xl":["4.5rem",    { lineHeight: "1" }],         // 72
        "7xl":["6rem",      { lineHeight: "1" }],         // 96
        "8xl":["8rem",      { lineHeight: "1" }],         // 128
        "9xl":["10.5rem",   { lineHeight: "1" }],         // 168 — for hero
      },
      letterSpacing: {
        wider: "0.05em",
        widest: "0.16em",
      },
    },
  },
  plugins: [],
} satisfies Config;
