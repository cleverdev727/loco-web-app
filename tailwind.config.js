/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth-aside": "url('../src/assets/images/login_aside.png')",
        "auth-btn": "linear-gradient(90deg, #D0BC31 0%, #F19123 100%)"
      },
      colors: {
        "main": "#252525",
        "maindark": "#101010"
      }
    },
  },
  plugins: [],
}
