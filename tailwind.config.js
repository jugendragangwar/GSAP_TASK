/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your files correctly
  ],
  theme: {
    extend: {
      keyframes: {
        'circle-small-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'circle-scale': 'circle-small-scale 3s cubic-bezier(0.6,0,0.4,1) infinite alternate',
      },
    },
  },
  plugins: [],
};
