/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 5s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse': 'pulse 6s infinite',
      },
     
    },
  },
  plugins: [],
}


