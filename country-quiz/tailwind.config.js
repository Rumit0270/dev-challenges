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
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      light: '#F2F2F2',
      dark: '#1D355D',
      tropaz: '#2F527B',
      white: '#ffffff',
      danger: '#EA8282',
      success: '#60BF88',
      warn: '#F9A826',
      primary: '#6066D0',
    },
    textColor: {
      light: '#F2F2F2',
      dark: '#1D355D',
      tropaz: '#2F527B',
      white: '#ffffff',
      danger: '#EA8282',
      success: '#60BF88',
      warn: '#F9A826',
      primary: '#6066D0',
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
