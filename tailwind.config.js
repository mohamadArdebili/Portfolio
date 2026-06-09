/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0d0d0f',
        panel: '#111418',
        muted: '#9ca3af',
        accent: '#5eead4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(94, 234, 212, 0.08)',
      },
    },
  },
  plugins: [],
};
