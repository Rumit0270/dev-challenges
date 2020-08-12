module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      mirage: '#1E213A',
      'dark-gray': '#6E707A',
      white: '#E7E7EB',
    },
    textColor: {
      mirage: '#1E213A',
      'dark-gray': '#6E707A',
      white: '#E7E7EB',
    },
  },
  variants: {},
  plugins: [],
};
