/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dracula-light': '#f8f8f2',
        'dracula-dark': '#282a36',
      },
    },
  },
  variants: {
    tableLayout: ['responsive', 'hover', 'focus'],
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}
