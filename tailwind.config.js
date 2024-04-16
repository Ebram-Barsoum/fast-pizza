/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Robot Mono, monospace '
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      },
      transitionDuration: {
        'DEFAULT': '.3s'
      },
      height: {
        screen: '100dvh'
      }
    },
    plugins: [],
  }
}
