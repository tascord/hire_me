module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      primary: '#ff006a',
      secondary: '#5856f2'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
