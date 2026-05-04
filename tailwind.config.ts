import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17202A",
        berry: "#FD029D",
        lime: "#ADFC03",
        lagoon: "#0B7C86",
        skywash: "#EAF9FF",
        butter: "#FFF4B8",
        blush: "#FFE8F6",
        mint: "#E8FFD8",
        paper: "#FFFDF7"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(23, 32, 42, 0.14)",
        button: "0 12px 24px rgba(253, 2, 157, 0.24)"
      },
      fontFamily: {
        sans: ["Avenir Next", "Nunito Sans", "Work Sans", "ui-sans-serif", "system-ui"]
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
