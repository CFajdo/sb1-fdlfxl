/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-400': '#60A5FA',
        'blue-300': '#93C5FD',
        'yellow-400': '#FBBF24',
      },
    },
  },
  plugins: [],
};