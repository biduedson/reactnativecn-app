import {colors} from  './src/styles/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {colors},
  },
  plugins: [],
}

