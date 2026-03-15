/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0B0D10',
        surface: '#151A21',
        elevated: '#1E2530',
        cyan: { DEFAULT: '#40E0FF', dark: '#0BB8D4' },
        green: { DEFAULT: '#22c55e', dark: '#16a34a' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
