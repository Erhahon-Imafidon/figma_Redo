/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Roboto Slab', 'serif'],
      body: ['Roboto Slab', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern':
        'linear-gradient(57.94deg, #05041A 0.64%, #110E2F 30.24%, #110E2F 64.94%, #03000B 111.05%)',
      },
    },
  },
  plugins: [],
}
