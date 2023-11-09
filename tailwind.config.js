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
      },
      animation : {
        loading : 'spin 0.5s linear infinite',
        height : 'height 1s ease-in-out 1 forwards'
      },
      keyframes : {
        height : {
          '0%' : { transform: 'scaleY(0)'},
          '100%' : {transform: 'scaleY(1)'}
        }
      },
      backgroundImage : {
        pokedetails : 'url("/assets/pokedetails.png")'
      },
    },
  },
  plugins: [],
}

