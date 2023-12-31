import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import EqualLayout from "../Layouts/EqualLayout";
import StatsLi from "../Components/StatsLi";
import { IoMaleSharp, IoFemaleSharp, IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaCircleQuestion } from "react-icons/fa6";
import PokemonType from "../Components/PokemonType";
import { nanoid } from "nanoid";
import EvolutionChain from "../Components/EvolutionChain";
import Loading from "../Components/Loading";
import { handleTypeData, handleWeakness } from "../helper/common";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function PokemonDetails() {
  const { both, male, female, pokemonData } = useSelector((s) => s?.pokedex);
  const { id } = useParams();
  const navigate = useNavigate();

  const [allDetails, setAllDetails] = useState(null);
  const [abilityInfo, setAbilityInfo] = useState();
  const [showAbility, setShowAbility] = useState();
  const [searchArrow, setSearchArrow] = useState(false);
  const [showOrderList, setShoworderList] = useState(false);
  const [currentPoke, setCurrentPoke] = useState();
  useEffect(() => {
    handlePokemonInfo(id);
    setShowAbility(false);
    setAbilityInfo({
      name: "",
      info: "",
      hidden: false,
    });
    const title = document.getElementById("title");
    title.innerText =
      pokemonData[id - 1]?.name.slice(0, 1).toUpperCase() +
      pokemonData[id - 1]?.name.slice(1) +
      " | " +
      "Pokedex";
  }, [both, id]);

  async function handlePokemonInfo(id) {
    const { data: info } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    const abilities = await handleAbilities(info.abilities);

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

    var forms = [];
    if (species.varieties.length > 1) {
      forms = await handleForms(species.varieties);
    }

    const { data: evolutionInfo } = await axios.get(
      species.evolution_chain.url
    );

    const images = {
      svg: info?.sprites?.other?.dream_world?.front_default,
      official: info?.sprites?.other?.["official-artwork"]?.front_default,
    };

    const stats = info.stats.map((el) => {
      return [el.stat.name, el.base_stat];
    });

    setCurrentPoke(info.name);

    setAllDetails({
      abilities,
      height: [
        Math.floor(info.height / 3.048),
        Math.round(
          Number(((info.height / 3.048) % 1).toString().substring(1)) * 12
        ),
      ],
      id: info.id,
      name: info.name,
      weight: info.weight,
      images,
      desc,
      category,
      chain: evolutionInfo.chain,
      stats,
      types: [],
      weakness: [],
      forms,
    });
  }

  async function handleForms(data) {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      let res = await handleFormsInfo(data[i]);
      if (res.images.official !== null || res.images.svg !== null) {
        temp.push(res);
      }
    }

    if (temp.length > 1) {
      return temp;
    } else {
      return [];
    }
  }

  async function handleFormsInfo(data) {
    let { data: pokemonInfo } = await axios.get(data.pokemon.url);

    const abilities = await handleAbilities(pokemonInfo.abilities);
    const images = {
      svg: pokemonInfo?.sprites?.other?.dream_world?.front_default,
      official:
        pokemonInfo?.sprites?.other?.["official-artwork"]?.front_default,
    };

    var desc;
    const { data: species } = await axios.get(pokemonInfo.species.url);
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

    const stats = pokemonInfo.stats.map((el) => {
      return [el.stat.name, el.base_stat];
    });

    let types = (pokemonInfo?.types).map((el) => {
      return el.type.name;
    });

    var type_data = await handleTypeData(pokemonInfo.types);
    var weakness = handleWeakness(type_data);

    var name = await handleFormName(pokemonInfo.forms[0].url);

    return {
      abilities,
      height: [
        Math.floor(pokemonInfo.height / 3.048),
        Math.round(
          Number(((pokemonInfo.height / 3.048) % 1).toString().substring(1)) *
            12
        ),
      ],
      name,
      weight: pokemonInfo.weight,
      images,
      desc,
      category,
      stats,
      types,
      weakness,
    };
  }

  async function handleFormName(url) {
    const { data } = await axios.get(url);
    let temp;
    if (data.names.length > 0) {
      for (let i = 0; i < data.names.length; i++) {
        if (data.names[i].language.name === "en") {
          temp = data.names[i].name;
          break;
        }
      }
    } else {
      temp = data.name;
    }

    return temp;
  }

  async function handleAbilities(data) {
    const temp = [];

    for (let i = 0; i < data.length; i++) {
      const { name, url } = data[i].ability;
      const { data: effectInfo } = await axios.get(url);
      var effect;

      effectInfo.effect_entries.map((el) => {
        if (el.language.name === "en") {
          effect = el.effect.replaceAll("\n", " ");
        }
      });

      let flag = false;
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].name === name) {
          flag = true;
        }
      }

      if (!flag) {
        temp.push({
          name,
          effect,
          hidden: data[i].is_hidden,
        });
      }
    }

    return temp;
  }

  return (
    <EqualLayout>
      {allDetails ? (
        <section className="w-[77%] bg-white flex flex-col justify-between px-[14.5px] pb-[10px]">
          <div className="pt-[90px] bg-white relative max-w-[1280px] w-[100vw] flex mx-auto left-[-161.6px]">
            <div
              onClick={() => {
                setAllDetails(null);
                setSearchArrow(false);
                setShoworderList(false);
                if (allDetails.id === 1) {
                  navigate(`/pokedex/${1010}`);
                } else {
                  navigate(`/pokedex/${allDetails.id - 1}`);
                }
              }}
              className="w-[50%] bg-[#a4a4a4] hover:bg-[#30a7d7] transition-colors duration-300 ease-in-out cursor-pointer border-r-[3.7037px] border-white flex justify-end"
            >
              <div className="pt-4 pb-16 w-full max-w-[448px] flex items-center">
                <div className="w-[26px] h-[26px] rounded-full bg-white text-[#616161] mx-[15.600px] my-[5.200px] flex justify-center items-center text-center">
                  <FaAngleLeft size={"13px"} />
                </div>
                <span className="text-[24px] leading-[38.88px] text-white font-bold font-sans tracking-wide">
                  {allDetails.id === 1
                    ? "#" + 1010
                    : pokemonData[allDetails.id - 2]?.number}
                </span>

                <span className="mx-[12px] text-[#616161] leading-[38.88px] font-bold font-sans text-[24px] capitalize">
                  {allDetails.id === 1
                    ? pokemonData[1009]?.name
                    : pokemonData[allDetails.id - 2]?.name}
                </span>
              </div>
            </div>
            <div
              onClick={() => {
                setAllDetails(null);
                setSearchArrow(false);
                setShoworderList(false);
                if (allDetails.id === 1010) {
                  navigate(`/pokedex/${1}`);
                } else {
                  navigate(`/pokedex/${allDetails.id + 1}`);
                }
              }}
              className="w-[50%] bg-[#a4a4a4] hover:bg-[#30a7d7] transition-colors duration-300 ease-in-out cursor-pointer flex justify-end"
            >
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

          {allDetails.forms.length > 0 ? (
            <div className="w-full mx-auto flex justify-center items-center pt-4 pb-3">
              <div
                onClick={() => {
                  setSearchArrow(!searchArrow);
                  setShoworderList(!showOrderList);
                }}
                className="pl-4 bg-[#313131] py-[6px] rounded-[5px] cursor-pointer relative select-none w-[43%]"
              >
                <h1 className="text-white font-roboto text-[16px] leading-[29px] flex items-center relative advanceSearchBtn capitalize">
                  {currentPoke}
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
                {showOrderList && (
                  <ul className="w-full pt-2 text-center list-none flex flex-col absolute z-40 bg-[#616161] text-white top-10 left-0 rounded-b-[5px]">
                    {allDetails.forms.map((el) => {
                      return (
                        <li
                          onClick={() => {
                            setCurrentPoke(el.name.replaceAll("-", " "));
                            setShoworderList(false);
                            setAllDetails({
                              ...allDetails,
                              abilities: el.abilities,
                              height: el.height,
                              weight: el.weight,
                              images: el.images,
                              desc: el.desc,
                              category: el.category,
                              types: el.types,
                              weakness: el.weakness,
                              stats: el.stats,
                            });
                          }}
                          key={nanoid(5)}
                          className="p-[10px] text-[16px] leading-5 capitalize cursor-pointer hover:bg-[#313131]"
                          style={{
                            fontFamily: "sans-serif",
                          }}
                        >
                          {el.name.replaceAll("-", " ")}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <div className="w-full mx-auto flex justify-center items-center pt-4 pb-10">
              {" "}
            </div>
          )}

          <div className="w-full py-4 flex justify-between">
            <div className="w-[49%] flex flex-col">
              <div className="w-full rounded-[5px] bg-[#F2F2F2] h-[457.089px]">
                <img
                  key={allDetails.images.official}
                  src={
                    allDetails.images.official
                      ? allDetails.images.official
                      : allDetails.images.svg
                  }
                  alt="demo"
                  className="w-full pb-[30px] animate-opacity"
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
                  {allDetails.stats.map(([keyE, value], i) => {
                    if (i === 0) {
                      return (
                        <li
                          key={nanoid(4)}
                          className="mb-[20px] ml-[31.157px] mr-[6.713px] w-[12.95%] float-left"
                        >
                          <StatsLi data_value={value / 15} name={keyE} />
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={nanoid(4)}
                          className="mb-[20px] mr-[6.713px] w-[12.95%] float-left"
                        >
                          <StatsLi
                            data_value={Math.floor(value / 15)}
                            name={keyE}
                          />
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>

            <div className="w-[49%] flex flex-col">
              <p
                key={allDetails.desc}
                className="my-[9px] text-[#212121] text-lg leading-[27px] tracking-wide font-medium animate-opacity"
                style={{ fontFamily: "sans-serif" }}
              >
                {allDetails.desc ? allDetails.desc : "Ecology under analysis."}
              </p>

              <div
                key={allDetails.weight}
                className="w-full rounded-[10px] bg-[#30a7d7] text-white grid grid-cols-2 text-[17px] leading-[17px] mt-5 relative animate-opacity"
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                {showAbility && (
                  <div className="absolute w-full h-full bg-[#313131] rounded-[10px] overflow-hidden flex flex-col z-30 animate-opacity pb-5">
                    <span className="text-[#616161] text-[80%] float-left my-[17px] mx-[27.200px] font-semibold">
                      Ability Info
                    </span>

                    <span
                      onClick={() => {
                        setAbilityInfo({
                          name: "",
                          hidden: false,
                          info: "",
                        });

                        setShowAbility(false);
                      }}
                      className="text-white flex items-center text-[87%] cursor-pointer font-semibold pl-[12.500px] pt-[14px] pr-[21px] pb-[10.500px] bg-abilityClose bg-left-bottom bg-no-repeat bg-black absolute  right-0 top-0"
                    >
                      <IoClose size={"20px"} className="mr-[1px]" />
                      Close
                    </span>

                    <div className="mx-6 flex flex-col overflow-y-scroll advanceScroll abilityScroll">
                      <h3 className="my-[5px] mb-3 text-white text-[150%] tracking-wide leading-[125%] capitalize">
                        {abilityInfo.name}
                      </h3>
                      <p className="text-[#F2F2F2] text-[98%] leading-[125%] tracking-wide">
                        {abilityInfo.info
                          ? abilityInfo.info
                          : "Source have no details about this Ability."}
                      </p>

                      {abilityInfo.hidden && (
                        <p
                          className="font-bold tracking-wide text-base absolute top-3 left-28 text-cyan-300"
                          style={{
                            fontFamily: "monospace",
                          }}
                        >
                          Hidden
                        </p>
                      )}
                    </div>
                  </div>
                )}
                <div className="ml-[20px] mt-[20px] mb-[25px] flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[15px]">
                    <p>Height</p>
                    <h1 className="text-black text-[20px] leading-5">
                      {allDetails.height[0] +
                        "'" +
                        " " +
                        (allDetails.height[1].toString().length === 1
                          ? "0"
                          : "") +
                        allDetails.height[1] +
                        '"'}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <p>Weight</p>
                    <h1 className="text-black text-[20px] leading-5">
                      {(allDetails.weight
                        ? (allDetails.weight / 4.536).toFixed(2)
                        : "????") +
                        " " +
                        "lbs"}
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
                        onClick={() => {
                          setShowAbility(true);
                          setAbilityInfo({
                            name: el.name,
                            info: el.effect ? el.effect : "",
                            hidden: el.hidden,
                          });
                        }}
                        key={nanoid(5)}
                        className="text-black text-[20px] leading-5 flex gap-[9.375px] items-center capitalize cursor-pointer"
                      >
                        {el.name}{" "}
                        <span className="cursor-pointer">
                          <FaCircleQuestion
                            size={"15.9954px"}
                            className="text-white mt-[3.125px]"
                          />
                        </span>
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
                {allDetails.types.length > 0
                  ? allDetails.types.map((el) => (
                      <PokemonType
                        key={nanoid(4)}
                        width={"32%"}
                        type={el}
                        rounded={"5px"}
                      />
                    ))
                  : pokemonData[id - 1]?.types.map((el) => (
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
                {allDetails.weakness.length > 0
                  ? allDetails.weakness.map((el) => (
                      <PokemonType
                        key={nanoid(4)}
                        width={"32%"}
                        type={el}
                        rounded={"5px"}
                      />
                    ))
                  : pokemonData[id - 1]?.weakness.map((el) => (
                      <PokemonType
                        key={nanoid(4)}
                        width={"32%"}
                        type={el}
                        rounded={"5px"}
                      />
                    ))}
              </div>
            </div>
          </div>

          <EvolutionChain chain={allDetails.chain} />
        </section>
      ) : (
        <div className="pt-[200px] h-[80vh]">
          <Loading />
        </div>
      )}
    </EqualLayout>
  );
}

export default PokemonDetails;
