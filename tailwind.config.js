/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00B4D8", // Logo cyan
          dark: "#0369a1",
        },
        // Override default blue with logo colors
        blue: {
          50: '#e0f7ff',
          100: '#b3ebff',
          200: '#80deff',
          300: '#4dd1ff',
          400: '#26c6ff',
          500: '#00B4D8',  // Logo cyan (main)
          600: '#0096b8',
          700: '#007a98',
          800: '#005e78',
          900: '#004258',
          950: '#1e3a8a',  // Logo navy (dark)
        }
      },
    },
  },
  plugins: [],
}
