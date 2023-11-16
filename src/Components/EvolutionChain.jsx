import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import PokemonType from "./PokemonType";

function EvolutionChain({ chain }) {
  const { pokemonData } = useSelector((s) => s.pokedex);
  const [finalList, setFinalList] = useState([]);

  const list = [];
  function handleEvoChain(chain) {
    console.log("check");
    var temp;
    for (let i = 0; i < pokemonData.length; i++) {
      if (pokemonData[i].name === chain.species.name) {
        temp = pokemonData[i];
        break;
      }
    }

    list.push(
      <li key={nanoid(4)} className="w-[20.2%] relative my-[2em] float-left">
        <img
          src={temp?.img}
          alt={temp?.name}
          className="rounded-[50%] bg-[#616161] shadow-evo border-[5px] border-white mx-auto max-w-[150px] w-full block"
        />
        <h3
          className="capitalize text-white text-center text-[125%] leading-[125%] w-full my-[15px]"
          style={{
            fontFamily: "sans-serif",
          }}
        >
          {temp?.name + " " + temp?.number}
        </h3>
        <ul className="w-full list-none text-[75%] leading-[12px] flex">
          {temp?.types &&
            (temp?.types).map((el) => {
              return (
                <PokemonType
                  key={nanoid(4)}
                  width={"48.4375%"}
                  type={el}
                  rounded={"5px"}
                />
              );
            })}
        </ul>
      </li>
    );

    if (chain?.evolves_to.length > 0) {
      for (let i = 0; i < chain?.evolves_to.length; i++) {
        handleEvoChain(chain.evolves_to[i]);
      }
    }
  }

  useEffect(() => {
    handleEvoChain(chain);
    setFinalList(list);
  }, [pokemonData]);

  return (
    <>
      {pokemonData && (
        <div className="w-full my-4 rounded-[5px] relative before:content-[''] before:absolute before:bg-pokeEvo before:bg-no-repeat before:h-[2em] before:w-[2em] before:z-[3] before:left-[-1px] before:bottom-[-1px] before:rotate-[-90deg] bg-evoContainer min-h-[400px]">
          <h3 className="font-roboto text-white ml-[22px] mt-[22px] text-[137.5%] leading-[125%]">
            Evolutions
          </h3>
          <ul className="flex w-full justify-center list-none">{finalList.length > 1 && <>{finalList.map((el) => el)}</>}</ul>
        </div>
      )}
    </>
  );
}

export default EvolutionChain;
