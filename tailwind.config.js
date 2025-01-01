/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#E7E9EA",
        third: "#1D9BF0",
        fourth: "#2F3336",
      },
    },
  },
  plugins: [],
};
