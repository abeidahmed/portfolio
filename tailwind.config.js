const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './projects/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['FuturaPT', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        rose: colors.rose,
        purple: {
          800: '#362157',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
