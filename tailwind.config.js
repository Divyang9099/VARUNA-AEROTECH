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
          DEFAULT: "#0ea5e9", // Typical Sylo-style sky blue
          dark: "#0369a1",
        }
      },
    },
  },
  plugins: [],
}
