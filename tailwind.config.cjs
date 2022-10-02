/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-footer': "url(https://turismoreal2.s3.amazonaws.com/Fondo.jpg)",
      },
      colors:{
        purple: {
          '50':  '#fbfbfb',
          '100': '#f6f1f7',
          '200': '#edd5ee',
          '300': '#d8acd7',
          '400': '#c97fbb',
          '500': '#b25aa0',
          '600': '#87428e',
          '700': '#702f5f',
          '800': '#4c203f',
          '900': '#2c1423',
        },
        gold: {
          '50':  '#fbfaf3',
          '100': '#f9efb7',
          '200': '#ffd700',
          '300': '#dcb84a',
          '400': '#bd8e27',
          '500': '#9d6f13',
          '600': '#80560c',
          '700': '#62410c',
          '800': '#432c0a',
          '900': '#2d1b08',
        },
        gray: {
          '50':  '#f8f9f7',
          '100': '#efeff0',
          '200': '#d9d9d9',
          '300': '#b8b8bd',
          '400': '#8f9196',
          '500': '#727174',
          '600': '#5d5658',
          '700': '#484144',
          '800': '#322d30',
          '900': '#1f1c1f',
        },
      }
    },
  },
  plugins: [],
}
