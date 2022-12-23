/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4")
    }),
    extend: {
      fontSize: {
        '2xs': '0.6rem'
      },
      borderWidth: {
        6: '6px'
      }
    },
  },
  plugins: [],
}
