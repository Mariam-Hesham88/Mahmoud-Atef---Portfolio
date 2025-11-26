/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
    'node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1b1b",
        secondary: "#2c2c2c",
        smokey: "#4f4f4f",
        fading: "#8A8A8A",
        misty: "#BFBFBF",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

