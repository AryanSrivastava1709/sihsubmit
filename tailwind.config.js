/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Colors
        white: "#FFFFFF",
        "primary-color": "748FFC",
        //Tints
        "header-color": "BAC8FF", //Opacity should be 20%
        "login-sidebar": "748FFC", //Opacity should be 10%
        //Shades
      },
    },
  },
  plugins: [],
};
