module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {},
  // },
  theme: {
    backgroundColor: theme => ({

      ...theme('colors'),

      'primary': '#1D2226',

      'secondary': '#ECEDE8',

      'danger': '#4D4646',
    }),
    textColor: {

      'primary': '#ECEDE8',

      'secondary': '#ffed4a',

      'danger': '#e3342f',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
