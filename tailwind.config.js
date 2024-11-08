/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first:  '#F8FAFC',
        second: '#D3D3D3',
        third:  '#4B515F',
        four:   '#2C3344',
        five:   '#F8FAFC',
        six:    '#E5E5E5',
        Sicake: '#6366F1',
        Macoke: '#F6A723',
        Hiphone: '#34D399',
        Meniot: '#94A3B8',
      }
    },
  },
  plugins: [],
}