/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2C7DFA",
        'blue-shade': "#3685FF",
        'navy-dark': "#1F314F",
        grey: "#7D889E",
        'grey-light': "#D5E1EF",
        white: "#FFFFFF",
      },
      fontSize: {
        base: "15px",
      },
      fontFamily: {
        sans: ["Oufit", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};
