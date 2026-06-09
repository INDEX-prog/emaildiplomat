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
        // Brand palette override: deep navy / white / subtle teal
        background: "#FAFBFC",
        foreground: "#0D1B2A",
        accent: "#1B8A8F",
        muted: "#5C6B7A",
        navy: {
          900: "#0D1B2A",
          800: "#1B2838",
          700: "#2A3A4D",
        },
        teal: {
          500: "#1B8A8F",
          600: "#167478",
          400: "#2BA3A8",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
