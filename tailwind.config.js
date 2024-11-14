/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      mont: ['Montserrat'],
      vc: ['Victor Mono'],
      popp: ['Poppins'],
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'lc',
      defaultFlavour: 'latte',
    }),
  ],
  darkMode: 'class',
};
