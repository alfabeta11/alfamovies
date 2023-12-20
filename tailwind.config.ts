import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-lg': 'repeat(auto-fit, minmax(175px, 1fr))',
        'auto-fit-md': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      fadeIn: {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1'
        }
        
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
