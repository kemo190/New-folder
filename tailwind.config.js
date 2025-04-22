/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDelay: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        fadeInDelay: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};