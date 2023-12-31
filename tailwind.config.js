/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        EqualNav: "0 0 7px 1px #666666",
        evo: "0 4px 4px 0px #212121",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        openSans: "'Open Sans', sans-serif",
      },
      animation: {
        loading: "spin 0.5s linear infinite",
        height: "height 1s ease-in-out 1 forwards",
        pokeBounce: "pokecardBounce 0.4s ease-in-out 1",
        opacity : "opacity 0.2s ease-in-out 1 forwards"
      },
      keyframes: {
        height: {
          "0%": { transform: "scaleY(0)" },
          "70%": { transform: "scaleY(1.10)" },
          "100%": { transform: "scaleY(1)" },
        },
        pokecardBounce: {
          "0%": {
            transform: "translateY(-2%)",
          },
          "100%": {
            transform: "none",
          },
        },
        opacity : {
          "0%" : { opacity : "0" },
          "100%" : { opacity : "1" }
        }
      },
      backgroundImage: {
        pokedetails: 'url("/assets/pokedetails.png")',
        pokeEvo: 'url("/assets/pokeEvo.png")',
        evoContainer: 'url("/assets/evolutionBg.png")',
        abilityClose : 'url("/assets/abilityClose.png")'
      },
      backgroundColor : {
        '#f2f2f2' : '#f2f2f2'
      }
    },
  },
  plugins: [],
};
