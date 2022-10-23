/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
        'almost-red': '#ff0000',
        'grey': '#282c34',
      },
    },
  },
  plugins: [],
}
