/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_text: "#99154B",
        secondary_text: "#6b7280",
      },
      fontFamily: {
        default: ["Roboto", "sans-serif"],
        style_heading: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
