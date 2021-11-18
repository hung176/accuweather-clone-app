module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accu': '#1f1f1f',
      },
      backgroundColor: {
        'accu-color': 'ebebeb'
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/9': '44.4444444%',
        '8/17': '47.058824%',
        '6/7': '85.7142857%',
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    }
  },
  plugins: [
    
  ],
}
