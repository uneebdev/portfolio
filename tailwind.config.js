/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B1316",
        deep: "#0E2A2E",
        deep2: "#123338",
        deep3: "#0B2226",
        surface: "#121C20",
        surface2: "#16383D",
        line: "#1E2C30",
        ink: "#F2F7F6",
        muted: "#6E7B85",
        muted2: "#9FBDB9",
        teal: "#5FE3C4",
        gold: "#EFC675",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(160deg, #0E2A2E 0%, #123338 55%, #0B2226 100%)",
        "cta-gradient": "linear-gradient(160deg, #0E2A2E 0%, #0B2226 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
