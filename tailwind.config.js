import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#158E72",
          dark: "#191919",
        },
        dark: {
          DEFAULT: "#191919",
          100: "#202020",
        },
        text: {
          DEFAULT: "#262626",
          200: "#505050",
          300: "#838383",
        },
        background: "#F2F2F2",
        warning: "#FFCC67",
        border: {
          DEFAULT: "#E7E7E7",
          focused: "#D4D4D4",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
