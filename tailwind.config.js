/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft': ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
        'glow': '#fafafa40 0px 0px 10px 2px'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('slider-thumb', ['&::-webkit-slider-thumb', '&::slider-thumb'])
    }
  ],
}