module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      },
      spacing: {
        '300': '300px',
        '600': '600px',
        '1000': '1000px'
      },
      borderRadius: {
        xl: '1.0rem'
      },
      opacity: {
        '90': .90,
        '85': .85,
        '80': .80
      }
    },
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {},
  plugins: [],
  purge:false
}
