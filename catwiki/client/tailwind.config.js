module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
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
      montserrat: ['Montserrat', 'sans-serif'],
      'mystery-quest': ['Mystery Quest', 'cursive'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      'cannon-black': '#291507',
      cioccolato: '#4D270C',
      kabul: '#544439',
    },
    textColor: {
      white: '#ffffff',
      black: '#000000',
      'cannon-black': '#291507',
      cioccolato: '#4D270C',
      kabul: '#544439',
    },
  },
  variants: {},
  plugins: [],
};
