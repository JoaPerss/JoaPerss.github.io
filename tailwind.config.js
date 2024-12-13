/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      aloevera: ["Aloevera", "sans-serif"],
    },
    colors: {
      //https://coolors.co/f6b034-ffeabf-ed5e50-f85e22-ff7f12
      honeyYellow: "#F6B034",
      peach: "#FFEABF",
      fireOpal: "#ED5E50",
      orangePantone: "#F85E22",
      amber: "#FF7F12",
      white: "#FFFFFF",
      sageGreen: "#B7C59B",
      lavender: "#C7B8EA",
      lightBlue: "#B8D8E1",
      lightGray: "#E0E0E0",
      apricot: "#FFD1A9"
    },
    blur: {
      xs: '2px',
    },
  },
  plugins: [],
}
