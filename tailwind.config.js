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
          DEFAULT: "#1486C9", // Logo blue
          dark: "#0f6ba3",
        },
        // Override default blue with logo color #1486C9
        blue: {
          50: '#e6f4fb',
          100: '#cce9f7',
          200: '#99d3ef',
          300: '#66bde7',
          400: '#33a7df',
          500: '#1486C9',  // Logo blue (MAIN COLOR)
          600: '#106ba1',
          700: '#0c5079',
          800: '#083551',
          900: '#041a29',
          950: '#1e3a8a',  // Dark navy for contrast
        }
      },
    },
  },
  plugins: [],
}
