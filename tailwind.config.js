/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dana: ["Dana"],
      },
      colors: {
        darkBg: "#1a202c",
        darkText: "#a0aec0",
      },
    },
  },
  plugins: [],
};
