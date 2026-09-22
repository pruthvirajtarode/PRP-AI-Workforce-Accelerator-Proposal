/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040b16', // Deep navy / near-black background
        surface: '#0a1628',    // Slightly lighter for cards
        primary: '#0059b3',    // Blue accent
        secondary: '#00e5ff',  // Cyan/indigo AI glow
        textPrimary: '#ffffff',
        textSecondary: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
