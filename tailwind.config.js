/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-default':'#204080',
        'button-hover' : '#4F75C2'
      }
    },
  },
  plugins: [],
}

