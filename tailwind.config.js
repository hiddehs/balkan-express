const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      display: ['var(--font-wild)'],
    },
    extend: {
      colors: {
        'midnight':{
          500: '#362F86',
          DEFAULT: '#362F86',
          800: '#27216F'
        },
        'dessert': {
          500: '#F7DBB2',
          DEFAULT: '#F7DBB2',
          800: '#F7DBB2'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
