import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel:   ["'Press Start 2P'", "monospace"],
        sans:    ["'DM Sans'", "sans-serif"],
        mono:    ["'Space Mono'", "monospace"],
      },
      colors: {
        cyan: { DEFAULT: "#1aa9d8", dark: "#1490bb" },
        gold: { DEFAULT: "#c9a84c", light: "#e2c97a" },
      },
      maxWidth: { container: "1080px" },
      animation: {
        ticker: "ticker 32s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
