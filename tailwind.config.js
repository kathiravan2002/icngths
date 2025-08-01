/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/preline/dist/*.js', // if using Preline
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};