/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': {
            textShadow: `
              0 0 20px rgba(255, 0, 0, 0.5),
              0 0 40px rgba(255, 0, 0, 0.3),
              0 0 60px rgba(255, 0, 0, 0.1)
            `,
          },
          '50%': {
            textShadow: `
              0 0 40px rgba(255, 0, 0, 0.8),
              0 0 80px rgba(255, 0, 0, 0.5),
              0 0 120px rgba(255, 0, 0, 0.3)
            `,
          },
        },
      },
    },
  },
  plugins: [],
};