/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        transparent: "transparent",
        black: "#000",
        light: "#fff",
        dark: {
          600: "#2E2E2E",
          500: "#414141",
        },
        gray: {
          400: "#777777",
        },
        primary: {
          300: "#FFCC21",
          400: "#414141",
          500: "#414141",
        },
        secondary: {
          300: "#8FE9D0",
        },
      },
      fontFamily: {
        primary: "NotoSansJP",
        secondary: "Inter",
      },
    },
  },
  plugins: [],
};
