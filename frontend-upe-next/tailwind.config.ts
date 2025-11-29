import type { Config } from 'tailwindcss';



export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backwards-compatible simple keys
        'upe-blue': '#1A4081',
        'upe-green': '#4CAF50',
        'upe-light-blue': '#E0F2F7',
        'upe-teal': '#14B8A6',

        // Full scale matching CORES.md (use these in Tailwind classes)
        'blue-upe': {
          600: '#2E5DA3',
          700: '#1A4081',
          800: '#0F2654',
        },
        'green-upe': {
          500: '#4CAF50',
          600: '#388E3C',
        },
        'light-blue-upe': {
          100: '#E0F2F7',
        },
        'teal-upe': {
          500: '#14B8A6',
        },
        'gray-upe': {
          200: '#EEEEEE',
          600: '#666666',
          800: '#333333',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
} as Config;
