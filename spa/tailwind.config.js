/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(22 100% 58%)',
        'primary-foreground': '#ffffff',
        background: '#080808',
        foreground: '#ffffff',
        'muted-foreground': 'hsl(0 0% 55%)',
        'wagcon-bg': '#080808',
        'wagcon-white': '#ffffff',
        'pass-green': '#22c55e',
        'pass-blue': '#3b82f6',
        border: 'hsl(0 0% 14.9%)',
        card: '#111111',
        'card-foreground': '#ffffff',
        muted: '#1a1a1a',
        accent: '#1a1a1a',
        'accent-foreground': '#ffffff',
      },
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        button: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
