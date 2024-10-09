/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        light: "#f1f5f9",
        dark: "#0f172a",
        gray1: "#9ca3af",
        gray2: "#6b7280",
      },
      fontFamily: {
        main: ["Lato", "sans-serif"],
      },
      fontSize: {
        small: "0.9em",
        medium: "1em",
        large: "2.5em",
      },
    },
  },
  plugins: [],
};
