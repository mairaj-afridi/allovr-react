/** @type {import('tailwindcss').Config} */
import { googleFonts } from 'google-fonts';
// Include the fonts you want to use
const fonts = ['Work Sans:400,500,600,700'];

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}