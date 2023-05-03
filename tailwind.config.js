/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': {'max':'375px'},
      'sm': {'max': '480px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xlg': {'max': '1280px'},
      '2k': {'max': '1440px'},
      '4k': {'max': '1920px'}
    }, 
    borderWidth:{
      DEFAULT: '0px',
      '1': '1px',
      '2': '2px', 
      '3': '3px'
    },
    extend: {
      fontFamily: {
        'ibm-plex-sans': {
          'ibm-plex-sans': ['IBMPlexSans', 'sans-serif'],
          'ibm-plex-sans-bold': ['IBMPlexSans-Bold', 'sans-serif'],
          'ibm-plex-sans-bolditalic': ['IBMPlexSans-BoldItalic', 'sans-serif'],
          'ibm-plex-sans-extralight': ['IBMPlexSans-ExtraLight', 'sans-serif'],
          'ibm-plex-sans-extralightitalic': ['IBMPlexSans-ExtraLightItalic', 'sans-serif'],
          'ibm-plex-sans-italic': ['IBMPlexSans-Italic', 'sans-serif'],
          'ibm-plex-sans-light': ['IBMPlexSans-Light', 'sans-serif'],
          'ibm-plex-sans-lightitalic': ['IBMPlexSans-LightItalic', 'sans-serif'],
          'ibm-plex-sans-medium': ['IBMPlexSans-Medium', 'sans-serif'],
          'ibm-plex-sans-mediumitalic': ['IBMPlexSans-MediumItalic', 'sans-serif'],
          'ibm-plex-sans-regular': ['IBMPlexSans-Regular', 'sans-serif'],
          'ibm-plex-sans-semibold': ['IBMPlexSans-SemiBold', 'sans-serif'],
          'ibm-plex-sans-semibolditalic': ['IBMPlexSans-SemiBoldItalic', 'sans-serif'],
          'ibm-plex-sans-thin': ['IBMPlexSans-Thin', 'sans-serif'],
          'ibm-plex-sans-thinitalic': ['IBMPlexSans-ThinItalic', 'sans-serif'],
        }
      },
      fontWeight: {
        light: 200,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        'reddit-orange': 'rgb(252, 71, 30)',
        'user-link-color': 'rgb(55, 120, 204)',
        'comment-body-color':'rgb(245, 248, 252)',
        'comment-bubble-color': 'rgb(136, 138, 140)',
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