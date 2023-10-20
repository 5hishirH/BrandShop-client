/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal_blue': '#05386B',
        'some_green': '#5CDB95'
      },
    },
  },
  plugins: [require("daisyui")],
}

