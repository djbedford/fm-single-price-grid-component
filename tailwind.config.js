const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    colors: {
      white: colors.white,
      'light-gray': 'hsl(var(--light-gray))',
      gray: 'hsl(var(--gray))',
    },
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      fontFamily: {
        'karla': ['Karla'],
      },
    },
  },
  plugins: [],
}
