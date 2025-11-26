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
        primary: "#182F49",
        secondary: "#29476B",
        smokey: "#595959",
        // fading: "#8A8A8A",
        misty: "#D7D7D7",
        gold:"E0AA35",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

