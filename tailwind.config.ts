import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#0B3C49", teal: { DEFAULT: "#0E9AA7", dark: "#0A7C87" }, aqua: "#D8F1F3", mist: "#F3FAFB" },
    fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
