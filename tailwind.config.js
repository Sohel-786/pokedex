/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow : {
        EqualNav : 'rgb(102, 102, 102) 0px 0px 7px 1px'
      }
    },
  },
  plugins: [],
}

