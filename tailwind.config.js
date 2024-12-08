/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        'filter-tablets': 'var(--filter-tablets)',
        'dark-gray': 'var(--dark-gray)',
        dark: 'var(--very-dark-gray)',
      },
    },
  },
  plugins: [],
}
