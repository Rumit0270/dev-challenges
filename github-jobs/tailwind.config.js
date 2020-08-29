module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '840px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      'steel-gray': '#282538',
      chambray: '#334680',
      heather: '#B9BDCF',
      heather2: '#B7BCCE',
      'dodger-blue': '#1E86FF',
      'white-lilac': '#F6F7FB',
      white: '#ffffff',
    },
    textColor: {
      'steel-gray': '#282538',
      chambray: '#334680',
      heather: '#B9BDCF',
      heather2: '#B7BCCE',
      'dodger-blue': '#1E86FF',
      'white-lilac': '#F6F7FB',
      white: '#ffffff',
    },
  },
  variants: {},
  plugins: [],
};
