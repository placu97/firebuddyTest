/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redfirb: '#ff0d0c',
        primary: '#ff0d0c',
        secondary: "#FFC81D",
        accent: "#374151",
        "base-100": "#ffffff",
      },
      fontFamily: { kd: "K2D" },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          md: '50px'
        }
      }
    }
  },
  plugins: [require("daisyui")],
}

