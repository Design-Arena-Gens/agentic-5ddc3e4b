/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B3C5D',
          sky: '#0ea5e9',
          light: '#f8fafc',
          green: '#22c55e',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 132, 199, 0.15)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(14,165,233,.2) 1px, transparent 0)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
