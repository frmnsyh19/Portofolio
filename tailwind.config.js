/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  daisyui: {
    themes: ["emerald, light"],
  },
  theme: {
    extend: {
      spacing: {
        '99': '30rem',
        '50': '50rem',
        '82': '22rem'
      }
    },
  },
  plugins: [require("daisyui")],
}

