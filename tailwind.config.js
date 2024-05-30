/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#413735",
      white: "#ffffff",
      black: "#000000",
      yellow: "#DBCA1A",
      sky: {
        400: "#38bdf8",
      },
    },
    fontFamily: {
      main: ["Trebuchet MS"],
    },
    extend: {},
  },
  plugins: [],
};
