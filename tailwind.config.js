/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      clipPath: {
        'bottom-wave': 'ellipse(150% 100% at 50% 100%)',
      },
          },
  },
  plugins: [],
}