/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Colors from your UZERSGROUP logo
        'brand-gold': '#AA8A56', // Gold from the text
        'brand-black': '#000000', // Black from the frame/text
        'brand-grey': '#A1A1A1', // Grey from the "Z" shape
      },
      fontFamily: {
        // Your excellent font choices
        'serif': ['"Libre Baskerville"', 'serif'],
        'sans': ['"Montserrat"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}