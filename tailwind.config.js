module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {},
  // },
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),

      primary: "#1D2226",

      secondary: "#ECEDE8",

      carousel: "#D6943C",
    }),
    textColor: {
      primary: "#ECEDE8",

      secondary: "#1d2226",

      carousel: "#D6943C",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
