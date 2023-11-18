import { useEffect, useState } from "react";
import EqualLayout from "../Layouts/EqualLayout";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { useSelector } from "react-redux";
import PokemonCard from "../Components/PokemonCard";
import { nanoid } from "nanoid";
import Loading from "../Components/Loading";
import SearchPokemon from "../Components/SearchPokemon";

function Pokedex() {
  const [sortOrder, setSortOrder] = useState("Lowest Number (First)");
  const [searchArrow, setSearchArrow] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [offsetLimit, setOffsetLimit] = useState({
    offset: 12,
    positionLimit: 24,
  });
  const [pokemons, setPokemons] = useState([]);
  const [requestMade, setRequestMade] = useState(false);

  const { pokemonData } = useSelector((s) => s.pokedex);

  useEffect(() => {
    getPokemons();
  }, [pokemonData]);

  useEffect(() => {
    if (requestMade) {
      window.addEventListener("scroll", handleAddPoke);
    }
    return () => window.removeEventListener("scroll", handleAddPoke);
  }, [requestMade]);

  function getPokemons() {
    setPokemons([...pokemonData.slice(0, 12)]);
  }

  function handleAddPoke() {
    const w = Math.floor(window.innerHeight + window.scrollY);
    const d = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    console.log(w, d);

    if (w === d || (w-1) === d || (w+1) === d) {
      setShowLoading(true);

      console.log("done");
      setPokemons([
        ...pokemons,
        ...pokemonData.slice(offsetLimit.offset, offsetLimit.positionLimit),
      ]);

      setOffsetLimit({
        ...offsetLimit,
        offset: offsetLimit.offset + 12,
        positionLimit: offsetLimit.positionLimit + 12,
      });
      setShowLoading(false);
    }
  }

  return (
    <EqualLayout>
      <section className="w-[77%] bg-white flex flex-col justify-between px-[14.5px] pb-[10px]">
        <h1 className="font-openSans text-[30px] text-[#919191] leading-[37.5px] mt-[25px] mb-[16px]">
          Pokédex
        </h1>
        <SearchPokemon />
        <div className="w-full my-8">
          <div className="flex items-center justify-between">
            <button className="flex justify-center items-center pt-[10.600px] pb-[9.340px] px-[21px] bg-[#30a7d7] text-white rounded-[5px] font-openSans text-[16.8px] w-[40.71%] font-semibold hover:bg-[#1b82b1] gap-[5px]">
              <HiOutlineRefresh size={"22.2px"} /> Surprise Me!
            </button>

            <div className="flex items-center w-[46%]">
              <h3 className="my-[7px] mr-[15px] text-[#a4a4a4] font-openSans text-xl leading-[25px]">
                Sort By
              </h3>

              <div
                onClick={() => {
                  setSearchArrow(!searchArrow);
                }}
                className="pl-4 bg-[#313131] w-[78%] py-[6px] rounded-[5px] cursor-pointer"
              >
                <h1 className="text-white font-roboto text-[16px] leading-[24px] flex items-center relative advanceSearchBtn">
                  <img
                    className="h-[28.9988px] aspect-auto mr-[12px]"
                    src="/icons/pokeball.png"
                    alt="pokeball"
                  />{" "}
                  {sortOrder}
                  {searchArrow ? (
                    <FiChevronUp
                      size={"25px"}
                      className="absolute right-[6px] z-[2]"
                    />
                  ) : (
                    <FiChevronDown
                      size={"25px"}
                      className="absolute right-[6px] z-[2]"
                    />
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap w-full my-4">
          {pokemons.length !== 0 ? (
            <>
              {pokemons.map((el) => {
                return (
                  <PokemonCard
                    key={nanoid(4)}
                    url={el.img}
                    name={el.name}
                    number={el.number}
                    types={el.types}
                    id={el.id}
                  />
                );
              })}
              {
              // requestMade ? (
              //   showLoading && <Loading />
              // ) : 
              (
                <button
                  onClick={() => {
                    setPokemons([
                      ...pokemons,
                      ...pokemonData.slice(
                        offsetLimit.offset,
                        offsetLimit.positionLimit
                      ),
                    ]);

                    setOffsetLimit({
                      offset: offsetLimit.offset + 12,
                      positionLimit: offsetLimit.positionLimit + 12,
                    });

                    // setRequestMade(true);
                  }}
                  className="pt-[12px] pb-[10.800px] px-[20px] bg-[#30a7d7] text-white rounded-[5px] font-openSans text-[16px] leading-[20px] font-semibold hover:bg-[#1b82b1] mx-auto my-5 mt-10"
                >
                  Load more Pokémon
                </button>
              )}
            </>
          ) : (
            <div className="min-h-[50vh] w-full flex justify-center">
              <Loading />
            </div>
          )}
        </ul>
      </section>
    </EqualLayout>
  );
}

export default Pokedex;
