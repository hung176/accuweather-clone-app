module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito']
      },
      colors: {
        'accu': '#1f1f1f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
