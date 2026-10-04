/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        slate: {
          950: '#020617',
        },
      },
      animation: {
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '34%': { transform: 'translate(30px, -50px) scale(1.1)', borderRadius: '70% 30% 66% 33% / 33% 66% 33% 66%' },
          '67%': { transform: 'translate(-30px, 50px) scale(0.9)', borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(192, 132, 252, 0.5), 0 0 20px rgba(240, 114, 182, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(192, 132, 252, 0.8), 0 0 40px rgba(240, 114, 182, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'rotate(0deg)' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', transform: 'rotate(180deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

