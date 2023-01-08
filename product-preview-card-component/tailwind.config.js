/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
    colors: {
      'primary-green': 'hsl(158deg 36% 37%)',
      'primary-white': 'hsl(0deg 0% 100%)',
      'primary-beige': 'hsl(25deg 38% 92%)',
      'primary-text': 'hsl(240deg 2% 44%)',
      'secondary-green': 'hsl(156deg 42% 18%)'
    },
    letterSpacing: {
      'heading-space': '0.5rem'
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontSize: {
      'mobile-xs': '.6rem',
      'mobile-heading': '1.6rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}
