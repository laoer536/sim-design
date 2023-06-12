/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/sim-design/src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
