/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      screens: {
        mobile: '360px', 
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  plugins: [], 
};
