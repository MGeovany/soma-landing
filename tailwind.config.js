/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#EAEEF4",
        surface: "#EEF1F7",
        surfaceDeep: "#E2E7EF",
        textPrimary: "#232A34",
        textMuted: "#626C7C",
        textSubtle: "#98A1B0",
        // Accent: Samsung blue.
        accent: "#1428A0",
        accentBright: "#2F6FE4",
        accentHover: "#1F57C4",
        // Secondary brand accent: LG crimson. Not named `lg` — that would
        // collide with Tailwind's `text-lg` font-size utility.
        lgAccent: "#A50034",
        lgAccentBright: "#D0033F",
        link: "#1F57C4",
        success: "#12A05E",
        error: "#D33A3A",
        warning: "#C97A00",
        info: "#1B8FB0",
      },
      borderRadius: {
        control: "14px",
        input: "16px",
        card: "22px",
        hero: "28px",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        stat: "0.12em",
      },
      boxShadow: {
        raised: "6px 6px 16px rgba(163,177,198,0.6), -6px -6px 16px rgba(255,255,255,0.95)",
        raisedSm: "4px 4px 10px rgba(163,177,198,0.6), -4px -4px 10px rgba(255,255,255,0.95)",
        raisedLg: "12px 12px 30px rgba(163,177,198,0.6), -12px -12px 30px rgba(255,255,255,0.95)",
        pressed:
          "inset 5px 5px 11px rgba(163,177,198,0.6), inset -5px -5px 11px rgba(255,255,255,0.95)",
      },
    },
  },
  plugins: [],
};
