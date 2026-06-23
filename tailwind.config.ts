import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, trustworthy, nurturing palette
        sage: {
          DEFAULT: "#5C8A4D",   // Primary soft green
          dark: "#3E5F34",      // Deeper for headings
          light: "#A3C39A",     // Light accents
        },
        warm: {
          ivory: "#F9F5F0",     // Main warm bg
          beige: "#F0E9DF",     // Cards / subtle surfaces
          sand: "#EDE5D9",      // Borders / dividers
        },
        softblue: {
          DEFAULT: "#6B8E9F",   // Secondary accents (trust)
          light: "#A0B8C4",
        },
        text: {
          dark: "#3D3A35",      // Main body text (warm dark)
          muted: "#6B665E",     // Secondary text
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgb(0 0 0 / 0.06), 0 2px 8px -2px rgb(0 0 0 / 0.04)",
        card: "0 10px 30px -5px rgb(0 0 0 / 0.08), 0 4px 12px -3px rgb(0 0 0 / 0.05)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
