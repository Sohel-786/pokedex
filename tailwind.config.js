/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow : {
        EqualNav : '0 0 7px 1px #666666'
      },
      fontFamily : {
        roboto : "'Roboto', sans-serif",
        openSans : "'Open Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

