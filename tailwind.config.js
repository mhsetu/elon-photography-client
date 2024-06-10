/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      // fontFamily: {
      //   Aspira: ['Aspira-Heavy'],
      // },
    },
  },
  plugins: [require('daisyui')],
};
