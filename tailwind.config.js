/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        ptserif: ["PT Serif", "serif"],
      },
      colors: {
        'teal': '#00A4AF',
        'red': '#ED4122',
        'gray': '#999999',
      },
    },
  },
  plugins: [],
}
