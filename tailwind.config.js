/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xsm':'400px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop-lg': '1124px',
      // => @media (min-width: 1024px) { ... }
      'laptop-sm': '1024px',
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

