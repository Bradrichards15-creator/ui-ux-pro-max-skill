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
        cream: {
          50: "#FDFBF7",
          100: "#FBF7F0",
          200: "#F5EDE1",
          300: "#EDE1CE",
        },
        ink: {
          DEFAULT: "#2E2A26",
          soft: "#57504A",
          muted: "#6E655D",
        },
        amber: {
          50: "#FBF1E9",
          100: "#F6E1D1",
          200: "#EDC4A4",
          300: "#DDA070",
          400: "#C97F4C",
          500: "#B46636",
          600: "#9A5028",
          700: "#7C3F20",
        },
        sage: {
          50: "#F2F4EF",
          100: "#E5E9DF",
          200: "#CBD4C0",
          300: "#A8B698",
          400: "#879877",
          500: "#6B7C5C",
          600: "#556349",
          700: "#434E3A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        blob: "62% 38% 46% 54% / 60% 46% 54% 40%",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        breathe: "breathe 7s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
