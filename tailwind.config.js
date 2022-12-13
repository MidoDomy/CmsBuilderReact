function withOpacity(variableName) {
  return ({opacityValue}) => {
    if(opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        base: {
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark'),
          success: withOpacity('--color-success'),
          danger: withOpacity('--color-danger'),
          warning: withOpacity('--color-warning'),
          info: withOpacity('--color-info'),
          disabled: withOpacity('--color-disabled')
        }
      },
      borderWidth: {
        6: '6px'
      }
    },
  },
  plugins: [],
}
