import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import EqualLayout from "../Layouts/EqualLayout";
import SearchPokemon from "../Components/SearchPokemon";
import StatsLi from "../Components/StatsLi";
import { IoMaleSharp, IoFemaleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaCircleQuestion } from "react-icons/fa6";
import PokemonType from "../Components/PokemonType";
import { nanoid } from "nanoid";
import EvolutionChain from "../Components/EvolutionChain";
import Weakness from "../Components/Weakness";
import Loading from "../Components/Loading";

function PokemonDetails() {
  const { both, male, female, pokemonData } = useSelector((s) => s?.pokedex);
  const { id } = useParams();

  const [ allDetails, setAllDetails ] = useState();

  useEffect(() => {
    handlePokemonInfo(id);
  }, [both]);

  async function handlePokemonInfo(id) {
    const { data: info } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    var abilities = [];
    info.abilities.forEach(async (el) => {
      const { name, url } = el.ability;
      const { data } = await axios.get(url);
      var effect;

      data.effect_entries.map((el) => {
        if (el.language.name === "en") {
          effect = el.effect.replaceAll("\n", " ");
        }
      });

      abilities.push({
        name,
        effect,
        hidden: el.is_hidden,
      });
    });

    var desc;
    const { data: species } = await axios.get(info.species.url);
    for (let i = 0; i < species.flavor_text_entries.length; i++) {
      if (species?.flavor_text_entries[i]?.language?.name === "en") {
        desc = (species.flavor_text_entries[i]?.flavor_text).replaceAll(
          "\n",
          " "
        );
        break;
      }
    }

    var category;
    for (let i = 0; i < species.genera.length; i++) {
      if (species?.genera[i]?.language?.name === "en") {
        category = species.genera[i]?.genus;
        break;
      }
    }

    var type_data = {};
    info.types.forEach(async (el) => {
      const { data: typeInfo } = await axios.get(el.type.url);
      var double = [],
        zero = [],
        half = [];

      typeInfo["damage_relations"].double_damage_from.forEach((el) => {
        double.push(el.name);
      });
      typeInfo["damage_relations"].half_damage_from.forEach((el) => {
        half.push(el.name);
      });
      typeInfo["damage_relations"].no_damage_from.forEach((el) => {
        zero.push(el.name);
      });

      type_data[`${el.type.name}`] = {
        defense: {
          half,
          double,
          zero,
        },
      };
    });

    const { data: evolutionInfo } = await axios.get(
      species.evolution_chain.url
    );

    const images = {
      svg: info?.sprites?.other?.dream_world?.front_default,
      official: info?.sprites?.other?.["official-artwork"]?.front_default,
    };

    setAllDetails({
      abilities,
      height: info.height,
      id: info.id,
      name: info.name,
      weight: info.weight,
      images,
      desc,
      category,
      type_data,
      chain: evolutionInfo.chain,
    });
  }

  return (
    <EqualLayout>
      {allDetails ? (
        <section className="w-[77%] bg-white flex flex-col justify-between px-[14.5px] pb-[10px]">
          <div className="pt-[90px] bg-white relative max-w-[1280px] w-[100vw] flex mx-auto left-[-161.6px]">
            <div className="w-[50%] bg-[#a4a4a4] hover:bg-[#30a7d7] transition-colors duration-300 ease-in-out cursor-pointer border-r-[3.7037px] border-white flex justify-end">
              <div className="pt-4 pb-16 w-full max-w-[448px] flex items-center">
                <div className="w-[26px] h-[26px] rounded-full bg-white text-[#616161] mx-[15.600px] my-[5.200px] flex justify-center items-center text-center">
                  <FaAngleLeft size={"13px"} />
                </div>
                <span className="text-[24px] leading-[38.88px] text-white font-bold font-sans tracking-wide">
                  {allDetails.id === 1
                    ? "#" + 1010
                    : pokemonData[allDetails.id - 1]?.number}
                </span>

                <span className="mx-[12px] text-[#616161] leading-[38.88px] font-bold font-sans text-[24px] capitalize">
                  {allDetails.id === 1
                    ? pokemonData[1009]?.name
                    : pokemonData[allDetails.id - 1]?.name}
                </span>
              </div>
            </div>
            <div className="w-[50%] bg-[#a4a4a4] hover:bg-[#30a7d7] transition-colors duration-300 ease-in-out cursor-pointer flex justify-end">
              <div className="pt-4 pb-16 w-full max-w-[448px] flex items-center">
                <span className="mx-[12px] capitalize text-[#616161] leading-[38.88px] font-bold font-sans text-[24px]">
                  {allDetails.id === 1010
                    ? pokemonData[0]?.name
                    : pokemonData[allDetails.id]?.name}
                </span>
                <span className="text-[24px] leading-[38.88px] text-white font-bold font-sans tracking-wide">
                  {allDetails.id === 1010
                    ? "#" + "0001"
                    : pokemonData[allDetails.id]?.number}
                </span>
                <div className="w-[26px] h-[26px] rounded-full bg-white text-[#616161] mx-[15.600px] my-[5.200px] flex justify-center items-center text-center">
                  <FaAngleRight size={"13px"} />
                </div>
              </div>
            </div>

            <div className="bg-white h-[51px] absolute bottom-0 w-[58.0325%] ml-[20.2%] before:bg-pokedetails before:bg-no-repeat before:absolute before:h-[51.6px] before:w-[75px] before:content-[' '] before:bottom-0 before:left-[-75px] after:bg-pokedetails after:bg-no-repeat after:absolute after:h-[51.6px] after:w-[75px] after:content-[' '] after:bottom-0 after:right-[-75px] after:bg-right-top">
              <div
                className="w-full mt-[18px] text-black text-center text-[225%] leading-[36px] capitalize"
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                {pokemonData[allDetails.id - 1]?.name}
                <span className="text-[#616161] ml-[20.500px] tracking-wide leading-[36px]">
                  {pokemonData[allDetails.id - 1]?.number}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto pt-4 pb-[50px]"></div>

          <div className="w-full py-4 flex justify-between">
            <div className="w-[49%] flex flex-col">
              <div className="w-full rounded-[5px] bg-[#F2F2F2] ">
                <img
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                  alt="demo"
                  className="w-full pb-[30px]"
                />
              </div>

              <div className="my-4 bg-[#a4a4a4] w-full rounded-[10px] ">
                <h1
                  className="m-6 mt-3 text-[#313131] text-base leading-5"
                  style={{
                    fontFamily: "sans-serif",
                  }}
                >
                  Stats
                </h1>

                <ul className="relative w-full list-none font-roboto font-bold tracking-wide">
                  <li className="mb-[20px] ml-[31.157px] mr-[6.713px] w-[12.95%] float-left">
                    <StatsLi data_value={3} name={"HP"} />
                  </li>
                  <li className="mb-[20px] mr-[6.713px] w-[12.95%] float-left">
                    <StatsLi data_value={3} name={"Attack"} />
                  </li>
                  <li className="mb-[20px] mr-[6.713px] w-[12.95%] float-left">
                    <StatsLi data_value={3} name={"Defense"} />
                  </li>
                  <li className="mb-[20px] mr-[6.713px] w-[12.95%] float-left">
                    <StatsLi data_value={4} name={"Special Attack"} />
                  </li>
                  <li className="mb-[20px] mr-[6.713px] w-[12.95%] float-left">
                    <StatsLi data_value={4} name={"Special Defense"} />
                  </li>
                  <li className="mb-[20px] mr-[6.713px] w-[12.95%] float-left">
                    <StatsLi data_value={3} name={"Speed"} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[49%] flex flex-col">
              <p
                className="my-[9px] text-[#212121] text-lg leading-[27px] tracking-wide font-medium"
                style={{ fontFamily: "sans-serif" }}
              >
                {allDetails.desc}
              </p>

              <div
                className="w-full rounded-[10px] bg-[#30a7d7] text-white grid grid-cols-2 text-[17px] leading-[17px] mt-5"
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                <div className="ml-[20px] mt-[20px] mb-[25px] flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[15px]">
                    <p>Height</p>
                    <h1 className="text-black text-[20px] leading-5">
                      {allDetails.height}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <p>Weight</p>
                    <h1 className="text-black text-[20px] leading-5">
                      {allDetails.weight}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <p>Gender</p>
                    <div className="flex items-center gap-[12.500px] text-black text-[25px] leading-5">
                      {both.length === 0 ? (
                        <p className="text-black text-[20px] leading-5">
                          wait..
                        </p>
                      ) : (
                        <>
                          {both.includes("bulbasaur") ? (
                            <>
                              {" "}
                              <IoMaleSharp /> <IoFemaleSharp />{" "}
                            </>
                          ) : male.includes("bulbasaur") ? (
                            <>
                              {" "}
                              <IoMaleSharp />{" "}
                            </>
                          ) : female.includes("bulbasaur") ? (
                            <>
                              {" "}
                              <IoFemaleSharp />{" "}
                            </>
                          ) : (
                            <p className="text-black text-[20px] leading-5">
                              Unknown
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="ml-[20px] mt-[20px] mb-[25px] flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[15px]">
                    <p>Category</p>
                    <h1 className="text-black text-[20px] leading-5 capitalize">
                      {allDetails.category}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <p>Abilities</p>
                    {allDetails.abilities.map((el) => (
                      <h1
                        key={nanoid(5)}
                        className="text-black text-[20px] leading-5 flex gap-[9.375px] items-center capitalize"
                      >
                        {el.name}{" "}
                        <FaCircleQuestion
                          size={"15.9954px"}
                          className="text-white mt-[3.125px]"
                        />
                      </h1>
                    ))}
                  </div>
                </div>
              </div>

              <p
                className="mt-[1.25em] text-[#212121] text-[125%] leading-[125%] float-left tracking-wide"
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                Type
              </p>

              <div className="w-full mt-[8px] flex flex-wrap gap-1 text-[16px] leading-8">
                {Object.keys(allDetails.type_data).map((el) => (
                  <PokemonType
                    key={nanoid(4)}
                    width={"32%"}
                    type={el}
                    rounded={"5px"}
                  />
                ))}
              </div>

              <h1
                className="mt-[25px] mb-[10px] text-[#212121] text-[125%] leading-[125%] tracking-wide"
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                Weaknesses
              </h1>

              <div className="w-full mt-[8px] flex flex-wrap gap-1 gap-y-2 text-[16px] leading-8">
                <Weakness typesData={allDetails.type_data} />
              </div>
            </div>
          </div>

          <EvolutionChain chain={allDetails.chain} />
          <SearchPokemon />
        </section>
      ) : (
        <Loading />
      )}
    </EqualLayout>
  );
}

export default PokemonDetails;
