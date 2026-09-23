import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1F2022',
        gold: '#C8921E',
        ivory: '#F7F5F0',
        'soft-white': '#FFFFFF',
        'light-gray': '#f0eeea',
        'border-gray': '#e4e2dc',
        'text-gray': '#7a7a74',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(.22, 1, .36, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp .6s ease-out both',
        'fade-up-delay-100': 'fadeUp .6s ease-out .1s both',
        'fade-up-delay-200': 'fadeUp .6s ease-out .2s both',
        'fade-up-delay-300': 'fadeUp .6s ease-out .3s both',
        'fade-in': 'fadeIn .38s ease both',
      },
    },
  },
  plugins: [],
};

export default config;
