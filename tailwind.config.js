/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorTransition: {
          "0%": { backgroundColor: "red" },
          "2%": { backgroundColor: "white" },
          "50%": { backgroundColor: "orange" },
        },
      },
      animation: {
        colorTransition: "colorTransition 1s ease-in-out forwards",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: {
          red: "#CC0E16",
        },
      },
    },
  },
  plugins: [],
};
