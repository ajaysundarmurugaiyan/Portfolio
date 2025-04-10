/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00b4d8', // Crystal blue
          dark: '#0096c7',
        },
        secondary: {
          DEFAULT: '#48cae4', // Light crystal blue
          dark: '#00b4d8',
        },
        background: {
          DEFAULT: '#1a1a1a', // Darker background for better contrast
          dark: '#2d2d2d', // Slightly lighter for cards and sections
          light: '#333333', // For hover states and highlights
        },
        text: {
          DEFAULT: '#ffffff', // Pure white
          muted: '#e5e7eb', // Light gray for secondary text
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}