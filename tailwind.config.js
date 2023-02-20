/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        'primary-300': '#FFCC21',
        'primary-400': '#FF963C',
        'primary-500': '#EA6C00',
        secondary: '#8FE9D0',
        'dark-500': '#414141',
        'dark-600': '#2E2E2E',
        gray: '#777777',
      },
    },
  },
  plugins: [],
};
