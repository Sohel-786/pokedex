import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import PokemonType from "./PokemonType";
import { RiArrowRightSLine } from "react-icons/ri";

function EvolutionChain({ chain }) {
  const { pokemonData } = useSelector((s) => s.pokedex);
  const [finalList, setFinalList] = useState([]);

  const list = [];
  function handleEvoChain(chain) {
    var temp;
    for (let i = 0; i < pokemonData.length; i++) {
      if (pokemonData[i].name === chain.species.name) {
        temp = pokemonData[i];
        break;
      }
    }
    console.log(temp)
    list.push(
      <li key={nanoid(4)} className="w-[20.2%] relative my-[2em] float-left">
        <div className="rounded-[50%] bg-[#616161] shadow-evo border-[5px] border-white mx-auto w-full h-[175px] flex justify-center items-center">

        <img
          src={temp?.img}
          alt={temp?.name}
          className="w-[83%] h-[83%]"
        />
        </div>
        <h3
          className="capitalize text-white text-center text-[125%] leading-[125%] w-full my-[15px]"
          style={{
            fontFamily: "sans-serif",
          }}
        >
          {temp?.name + " "} <span className="text-[#a4acaf]">{temp?.number}</span>
        </h3>
        <ul className="w-full list-none text-[75%] leading-[18px] flex gap-1 justify-center">
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
      list.push(
        <li className="flex justify-center items-center my-[2em] mb-[5em] relative">
          <RiArrowRightSLine  size={'100px'} className="text-white" />
        </li>
      )
      for (let i = 0; i < chain?.evolves_to.length; i++) {
        handleEvoChain(chain.evolves_to[i]);
      }
    }
  }

  useEffect(() => {
    handleEvoChain(chain);
    setFinalList([...list]);
  }, [pokemonData]);

  return (
    <>
      {pokemonData && (
        <div className="w-full my-4 rounded-[5px] relative before:content-[''] before:absolute before:bg-pokeEvo before:bg-no-repeat before:h-[2em] before:w-[2em] before:z-[3] before:left-[-1px] before:bottom-[-1px] before:rotate-[-90deg] bg-evoContainer">
          <h3 className="font-roboto text-white ml-[22px] mt-[22px] text-[137.5%] leading-[125%]">
            Evolutions
          </h3>
          <ul className="flex w-full justify-center list-none gap-2 flex-wrap">
            {finalList.length > 0 && <>{finalList.map((el) => el)}</>}
          </ul>
        </div>
      )}
    </>
  );
}

export default EvolutionChain;
