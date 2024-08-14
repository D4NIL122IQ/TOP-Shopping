/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#1C0B19',
        frenchGray: '#AAABBC',
        fawn: "#F7B267"
      },
      width: {
        '300px': '300px',
      },
      height:{
        '20vh': '10vh',
        '70vh': '82vh',
        '10vh': '8vh'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}