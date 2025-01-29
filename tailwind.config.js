/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#c9b926",
        second: "#cf414f",
      },
    },
  },
  plugins: [],
};
