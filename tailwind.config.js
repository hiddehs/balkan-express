const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        defaultTheme: {
          css: {
            '--tw-prose-invert-bullets': "#F7DBB2",
          },
        },
      }),
      fontFamily: {
        display: ['var(--font-wild)'],
      },
      colors: {
        'midnight': {
          500: '#362F86',
          DEFAULT: '#362F86',
          800: '#27216F',
          900: '#1E1A56',
        },
        'dessert': {
          200: '#FFECCF',
          500: '#F7DBB2',
          DEFAULT: '#F7DBB2',
          800: '#F7DBB2',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
