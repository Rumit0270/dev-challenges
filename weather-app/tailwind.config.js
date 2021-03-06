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
      'dark-gray2': '#A09FB1',
      'dark-gray3': '#88869D',
      white: '#E7E7EB',
      black: '#100E1D',
      blue: '#3C47E9',
      comet: '#616475',
    },
    textColor: {
      mirage: '#1E213A',
      'dark-gray': '#6E707A',
      'dark-gray2': '#A09FB1',
      'dark-gray3': '#88869D',
      white: '#E7E7EB',
      black: '#100E1D',
      blue: '#3C47E9',
      comet: '#616475',
    },
  },
  variants: {},
  plugins: [],
};
