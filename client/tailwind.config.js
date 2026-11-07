/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spooky: {
          dark: '#0e0717',
          violet: '#220e3d',
          deepPurple: '#160b26',
          pumpkin: '#ff7a18',
          pumpkinHover: '#e0660e',
          amberGlow: '#ffa338',
          moon: '#fde68a',
          terminalBg: '#090510',
          consoleGreen: '#39ff14',
          borderWood: '#542d13'
        }
      },
      fontFamily: {
        spookyTitle: ['Creepster', 'Cinzel', 'Georgia', 'serif'],
        mono: ['Fira Code', 'Consolas', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'moon': '0 0 60px 15px rgba(253, 230, 138, 0.45)',
        'pumpkinGlow': '0 4px 20px 0 rgba(255, 122, 24, 0.4)',
        'consoleGlow': 'inset 0 0 15px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 122, 24, 0.15)',
      }
    },
  },
  plugins: [],
}