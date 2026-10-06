import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F2",
        ink: "#111111",
        "ink-soft": "#55565B",
        "ink-faint": "#6A6A70",
        line: "#EAE6DC",
        pill: "#F4F1E9",
        coffee: "#5B3A22",
        doodle: {
          orange: "#E8944A",
          pink: "#EE8AA6",
          green: "#6FBF8B",
          blue: "#5B9BE0",
          purple: "#B08CE0",
          yellow: "#E0B84A",
        },
      },
      fontFamily: {
        // Each var() carries its own fallback: if a Google font ever fails
        // to load, the variable is missing, and without a fallback inside
        // var() the whole stack breaks and browsers drop to Times New Roman.
        display: ["var(--font-display, Sora)", "Helvetica", "Arial", "sans-serif"],
        sans: ["var(--font-inter, Inter)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono, 'Space Mono')", "ui-monospace", "monospace"],
      },
      fontSize: {
        micro: ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.04em" }],
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;

