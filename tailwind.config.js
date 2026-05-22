/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          DEFAULT: '#C8860A',
          light: '#F5A623',
          pale: '#FDE68A',
          dark: '#B45309',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        amber: {
          brand: '#C8860A',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EAE0',
          200: '#E8DDD0',
        },
        brown: {
          DEFAULT: '#1C1A17',
          mid: '#44403C',
          light: '#78716C',
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1A17',
          950: '#0C0A09',
        },
        nature: {
          green: '#3D6B2C',
          greenLight: '#5A8A3F',
          greenPale: '#D1FAE5',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float-bee': 'floatBee 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        floatBee: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '33%': { transform: 'translateY(-12px) rotate(2deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200, 134, 10, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(200, 134, 10, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};