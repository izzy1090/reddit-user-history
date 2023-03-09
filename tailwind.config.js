/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth:{
      DEFAULT: '0px',
      '1': '1px',
      '2': '2px', 
      '3': '3px'
    },
    extend: {
      fontFamily: {
        sans: ['IBMPlexSans', 'Arial', 'sans-serif']
      },
      colors: {
        'reddit-orange': 'rgb(252, 71, 30)',
        'reddit-border-orange': 'rgb(252, 71, 30)',
        'reddit-text-orange': 'rgb(252, 71, 30)',
        'panel-border-color': 'rgb(204, 204, 204)',
        'panel-bg-color': 'rgb(255, 255, 255)'
      }
    },
  },
  variants: {},
  plugins: [],
}