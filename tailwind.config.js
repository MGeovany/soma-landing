/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#040506",
        surface: "#242526",
        surfaceDeep: "#101112",
        textPrimary: "#F5F5F5",
        textMuted: "#999999",
        textSubtle: "#666666",
        // Accent — Samsung blue (in place of the spec's orange).
        accent: "#1428A0",
        accentBright: "#2E9BFF",
        accentHover: "#3FA9FF",
        link: "#2E9BFF",
        success: "#00D973",
        error: "#F24D4D",
        warning: "#FF9D00",
        info: "#45D9FF",
      },
      borderRadius: {
        control: "4px",
        input: "12px",
        card: "18px",
        hero: "22px",
      },
      fontFamily: {
        sans: ["Rajdhani", "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        stat: "0.07em",
      },
    },
  },
  plugins: [],
};
