/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

    },
    colors: {
      //Colors
      white: "#FFFFFF",
      primary: "#748FFC",
      //Tints
      headerColor: "#BAC8FF", //Opacity should be 20%
      loginSidebar: "#748FFC", //Opacity should be 10%
      //Shades
    },
  },
  plugins: [],
};
