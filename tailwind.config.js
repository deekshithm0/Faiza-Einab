/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E5D9EF",
        gold: "#E4BC71",
        primaryGrape: "#582E7D",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        shadowsIntoLight: ['Shadows Into Light', 'serif']
      }
    },
  },
  plugins: [],
}
