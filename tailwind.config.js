/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/**/*.js",
    "./script.js"
  ],
  safelist: [
    "text-blue-900", "font-bold", "rotate-180", "hidden", "active"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)"
      }
    }
  },
  plugins: []
}
