import { nanoid } from "nanoid";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useSelector } from "react-redux";
import AnimateHeight from "react-animate-height";
import PokemonType from "./PokemonType";
import { FaWeightHanging } from "react-icons/fa";
import { ImTextHeight } from "react-icons/im";

function SearchPokemon({ fn, fn2, fn3 }) {
  const [searchConditions, setsearchConditions] = useState({
    search: "",
    type: [],
    weakness: [],
    height: {
      short: false,
      medium: false,
      tall: false,
    },
    weight: {
      light: false,
      medium: false,
      heavy: false,
    },
    range: {
      from: "1",
      to: "1010",
    },
    ability: "all",
  });

  const [options, setOptions] = useState();
  const [showOptions, setShowOptions] = useState(true);
  const [showAdvance, setShowAdvance] = useState(false);
  const [advanceSearchArrow, setAdvanceSearchArrow] = useState(false);
  const [showAbility, setShowAbility] = useState(false);

  const { pokemonData, abilities } = useSelector((s) => s.pokedex);

  function debounce(time) {
    var timer;

    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const { name, value } = e.target;
        setsearchConditions({
          ...searchConditions,
          [name]: value,
        });

        setShowOptions(true);
        if (!Number(value) && value.length > 0) {
          const options = [];
          let i = 0;
          do {
            if (
              pokemonData[i].name.includes(value) ||
              pokemonData[i].name.includes(value.toLowerCase()) ||
              pokemonData[i].name.includes(
                value.toUpperCase(value.toLowerCase())
              ) ||
              pokemonData[i].name.includes(
                value[0].toUpperCase() + value.slice(1)
              )
            ) {
              options.push(pokemonData[i]);
            }
            i++;
          } while (i < 1010);

          setOptions([...options]);
        } else {
          setOptions([]);
          if (Number(value)) {
            if (pokemonData[value - 1]) {
              setOptions([pokemonData[value - 1]]);
            }
          }
        }
      }, time);
    };
  }

  var handleChange = debounce(300);

  function handleType(t) {
    if (searchConditions.type.includes(t)) {
      setsearchConditions({
        ...searchConditions,
        type: searchConditions.type.filter((el) => {
          if (el !== t) {
            return el;
          }
        }),
      });
    } else {
      setsearchConditions({
        ...searchConditions,
        type: [...searchConditions.type, t],
      });
    }
  }

  function handleWeakness(w) {
    if (searchConditions.weakness.includes(w)) {
      setsearchConditions({
        ...searchConditions,
        weakness: searchConditions.weakness.filter((el) => {
          if (el !== w) {
            return el;
          }
        }),
      });
    } else {
      setsearchConditions({
        ...searchConditions,
        weakness: [...searchConditions.weakness, w],
      });
    }
  }

  function handleIndexChange(e) {
    const { name, value } = e.target;
    setsearchConditions({
      ...searchConditions,
      range: {
        ...searchConditions.range,
        [name]: value,
      },
    });
  }

  function handleAdvanceSearch(){
    pokemonData.forEach((el) => {
      let type = true;
      let ability = true;

      if(searchConditions.type.length > 0 && el.types.length === searchConditions.type.length){
        el.types.forEach((el) => {
          if(!(searchConditions.type.includes(el))){
            type = false;
          }
        })
      }else if(searchConditions.type.length > 0 && el.types.length !== searchConditions.type.length){
        type = false;
      }

      if(!(searchConditions.ability === 'all')){
        if(!(el.abilities.includes(searchConditions.ability))){
          ability = false;
        }
      }

    })
  }
  return (
    <>
      <div className="max-w-[1280px] w-[100vw] mx-auto relative left-[-161.6px] bg-[#616161] pb-4">
        <div className="w-full bg-[#313131] flex flex-col items-center">
          <div className="w-[77%] flex gap-2 justify-between pr-4 pl-1">
            <div className="w-[45.96%] pl-[14.5px] pt-[32px]">
              <label
                htmlFor="searchIt"
                className="font-openSans text-[26.8px] leading-[26.8px] text-white"
              >
                Name or Number
              </label>

              {/* Normal Search Option - Section */}
              <div className="pt-[13px] mb-[10px] w-full flex items-center gap-5 relative">
                <span className="border-[2.96296px] z-40 bg-white border-[#616161] inline-block rounded-[5px] w-[80.5425%]">
                  <input
                    onChange={handleChange}
                    type="text"
                    id="searchIt"
                    name="search"
                    className="p-[10px] font-roboto text-[16px] leading-[24px] rounded-[5px] w-full"
                  />
                </span>

                {/* Search Btn of Normal search */}

                <a href="#pokemons" className="w-[12.95%]">
                  <button
                    disabled={showAdvance ? true : false}
                    onClick={() => {
                      const loadPokemon =
                        document.getElementById("loadPokemon");
                      if (searchConditions.search === "") {
                        fn2();
                        fn3(false);
                        loadPokemon.style.display = "block";
                        return;
                      }
                      loadPokemon.style.display = "none";

                      if (options.length === 1) {
                        fn([...options]);
                        setShowOptions(false);
                      } else if (options.length > 1) {
                        fn([...options]);
                        setShowOptions(false);
                      } else {
                        fn3(true);
                      }
                    }}
                    className="bg-[#ee6b2f] hover:bg-[#da471b] py-[12.600px] px-[21px] inline-block rounded-[5px] w-full h-12 disabled:bg-cyan-400 disabled:cursor-not-allowed"
                    style={{
                      backgroundImage: 'url("/assets/searchbtn.png")',
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></button>
                </a>

                <div className="w-[79.3%] absolute z-30 bg-white top-[61px] left-[2px]">
                  {options && showOptions && (
                    <>
                      <ul className="w-full list-none flex flex-col">
                        {options.slice(0, 5).map((el) => {
                          return (
                            <li
                              onClick={() => {
                                const input =
                                  document.getElementById("searchIt");
                                input.value =
                                  el.name[0].toUpperCase() + el.name.slice(1);
                                setsearchConditions({
                                  ...searchConditions,
                                  search: el.name,
                                });
                                setOptions([el]);
                                setShowOptions(false);
                              }}
                              key={nanoid(4)}
                              className="p-[10px] text-[#999999] text-[16px] leading-4 capitalize cursor-pointer hover:bg-[#1b53ba] hover:text-[#c9c9c9]"
                              style={{
                                fontFamily: "sans-serif",
                              }}
                            >
                              {el.name}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              <p className="text-white mb-[24px] font-roboto text-[16px] leading-[20px]">
                Use the Advanced Search to explore Pokémon by type, weakness,
                Ability, and more!
              </p>
            </div>

            <div className="w-[48.8%] bg-[#4dad5b] rounded-[5px] mt-[32px] mb-[8px] pb-[8px] h-fit">
              <h1 className="my-[15px] ml-[20px] mr-[10px] font-openSans text-[20px] text-white leading-[25px]">
                Search for a Pokémon by name or using its National Pokédex
                number.
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-[1024px] mx-auto pt-[40px]">
          <AnimateHeight
            className="w-full"
            height={showAdvance ? "auto" : 0}
            duration={100}
            easing="ease-out"
          >
            <div className="w-[87%] mx-auto mt-3 flex flex-wrap mb-[16px] px-2 justify-between">
              <section className="flex flex-col w-[51%]">
                <div
                  className="flex text-white w-full items-center gap-[34px]"
                  style={{
                    fontFamily: "sans-serif",
                  }}
                >
                  <h1 className="text-[26.8px] leading-[33.5px] w-[50.22%]">
                    Type & Weakness
                  </h1>
                  <p className="text-[14.4px] leading-[14.4px] mr-4 mt-1">
                    <span className="font-semibold">T</span> = Type &nbsp;{" "}
                    <span className="font-semibold">W</span> = Weakness
                  </p>
                </div>

                <div className="mt-8 w-full flex">
                  <div className="w-[50%] flex flex-col gap-y-[8px]">
                    {[
                      "bug",
                      "dragon",
                      "fairy",
                      "fire",
                      "ghost",
                      "ground",
                      "normal",
                      "psychic",
                      "steel",
                    ].map((el) => {
                      return (
                        <div
                          key={nanoid(5)}
                          className="flex gap-[12px] w-full leading-[28px] text-[16px]"
                        >
                          <div className="w-[50%] border-2 border-[#a4a4a4] rounded-[5px]  overflow-hidden">
                            <PokemonType type={el} width={"100%"} />
                          </div>

                          <span
                            onClick={() => {
                              handleType(el);
                            }}
                            className="bg-[#F2F2F2] leading-[30px] cursor-pointer text-center font-bold w-[28px] h-[28px] text-[#313131] rounded-full"
                            style={{
                              backgroundColor: searchConditions.type.includes(
                                el
                              )
                                ? "#30a7d7"
                                : "#F2F2F2",
                            }}
                          >
                            T
                          </span>
                          <span
                            onClick={() => {
                              handleWeakness(el);
                            }}
                            className="bg-[#F2F2F2] leading-[30px] cursor-pointer text-center font-bold w-[28px] h-[28px] text-[#313131] rounded-full"
                            style={{
                              backgroundColor:
                                searchConditions.weakness.includes(el)
                                  ? "#30a7d7"
                                  : "#F2F2F2",
                            }}
                          >
                            W
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-[50%] flex flex-col gap-y-[8px]">
                    {[
                      "dark",
                      "electric",
                      "fighting",
                      "flying",
                      "grass",
                      "ice",
                      "poison",
                      "rock",
                      "water",
                    ].map((el) => {
                      return (
                        <div
                          key={nanoid(5)}
                          className="flex gap-[12px] w-full leading-[28px] text-[16px] justify-end"
                        >
                          <div className="w-[50%] border-2 border-[#a4a4a4] rounded-[5px]  overflow-hidden">
                            <PokemonType type={el} width={"100%"} />
                          </div>

                          <span
                            onClick={() => {
                              handleType(el);
                            }}
                            className="bg-[#F2F2F2] leading-[30px] cursor-pointer text-center font-bold w-[28px] h-[28px] text-[#313131] rounded-full"
                            style={{
                              backgroundColor: searchConditions.type.includes(
                                el
                              )
                                ? "#30a7d7"
                                : "#F2F2F2",
                            }}
                          >
                            T
                          </span>
                          <span
                            onClick={() => {
                              handleWeakness(el);
                            }}
                            className="leading-[30px] cursor-pointer text-center font-bold w-[28px] h-[28px] text-[#313131] rounded-full"
                            style={{
                              backgroundColor:
                                searchConditions.weakness.includes(el)
                                  ? "#30a7d7"
                                  : "#F2F2F2",
                            }}
                          >
                            W
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="w-[107%] mt-10 flex items-center justify-between relative"
                  style={{
                    fontFamily: "sans-serif",
                  }}
                >
                  <h1 className="text-white text-[26.8px] leading-[33.5px]">
                    Number Range
                  </h1>

                  <div className="mt-[10px] mb-[5px] flex items-center">
                    <input
                      onChange={handleIndexChange}
                      type="number"
                      name="from"
                      className="border-none rounded-[5px] py-2 px-2 text-black w-[75px]"
                      value={searchConditions.range.from}
                    />

                    <span className="px-[15px] text-white">-</span>

                    <input
                      onChange={handleIndexChange}
                      type="number"
                      name="to"
                      className="border-none rounded-[5px] py-2 px-2 text-black w-[75px]"
                      value={searchConditions.range.to}
                    />
                  </div>
                </div>
              </section>

              <section
                className="flex flex-col w-[41%]"
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                <div className="w-full relative">
                  <h1 className="text-[26.8px] leading-[33.5px] w-[50.22%] text-white mb-4">
                    Ability
                  </h1>
                  <div
                    onClick={() => {
                      setAdvanceSearchArrow(!advanceSearchArrow);
                      setShowAbility(!showAbility);
                    }}
                    className="pl-4 bg-[#313131] w-full py-[6px] rounded-[5px] cursor-pointer"
                  >
                    <h1 className="text-white font-roboto text-[16px] leading-[24px] flex items-center relative advanceSearchBtn select-none capitalize">
                      <img
                        className="h-[28.9988px] aspect-auto mr-[12px]"
                        src="/icons/pokeball.png"
                        alt="pokeball"
                      />{" "}
                      {searchConditions.ability.replaceAll("-", " ")}
                      {advanceSearchArrow ? (
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

                  {showAbility && (
                    <div className="absolute bg-[#a4a4a4] h-[300px] rounded-b-[5px] p-[10px] z-50 w-full">
                      <section className="w-full overflow-x-hidden overflow-y-scroll h-full advanceScroll">
                        <ul className="list-none select-none">
                          <li
                            onClick={() => {
                              setShowAbility(false);
                              setsearchConditions({
                                ...searchConditions,
                                ability: "all",
                              });
                            }}
                            className="cursor-pointer px-[9.802px] pt-[12px] pb-[10.800px] text-[#212121] hover:bg-[#313131] hover:text-[#4dad5b] capitalize w-[99%]"
                          >
                            All
                          </li>
                          {abilities.map((el) => {
                            return (
                              <li
                                onClick={() => {
                                  setShowAbility(false);
                                  setsearchConditions({
                                    ...searchConditions,
                                    ability: el,
                                  });
                                }}
                                key={nanoid(5)}
                                className="cursor-pointer px-[9.802px] pt-[12px] pb-[10.800px] text-[#212121] hover:bg-[#313131] hover:text-[#4dad5b] capitalize w-[99%]"
                              >
                                {el.replaceAll("-", " ")}
                              </li>
                            );
                          })}
                        </ul>
                      </section>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-col w-full select-none">
                  <h1 className="text-[26.8px] leading-[33.5px] w-[50.22%] text-white my-[13.400px] ml-[5.550px]">
                    Height
                  </h1>

                  <ul className="flex mb-[8px] w-full h-20">
                    <li
                      onClick={() => {
                        setsearchConditions({
                          ...searchConditions,
                          height: {
                            ...searchConditions.height,
                            short: !searchConditions.height.short,
                          },
                        });
                      }}
                      className={`mx-[1.5625%] rounded-[12px] bg-[${
                        searchConditions.height.short ? "#ee6b2f" : "#f2f2f2"
                      }] cursor-pointer w-[27.46%] flex justify-center items-center`}
                      style={{
                        color: searchConditions.height.short
                          ? "#f2f2f2"
                          : "#313131",
                      }}
                    >
                      <ImTextHeight
                        size={"23px"}
                        className={`relative top-2`}
                      />
                    </li>
                    <li
                      onClick={() => {
                        setsearchConditions({
                          ...searchConditions,
                          height: {
                            ...searchConditions.height,
                            medium: !searchConditions.height.medium,
                          },
                        });
                      }}
                      className={`mx-[5.62%] rounded-[12px] bg-[${
                        searchConditions.height.medium ? "#ee6b2f" : "#f2f2f2"
                      }] cursor-pointer w-[27.46%] flex justify-center items-center`}
                      style={{
                        color: searchConditions.height.medium
                          ? "#f2f2f2"
                          : "#313131",
                      }}
                    >
                      <ImTextHeight
                        size={"35px"}
                        className={` relative top-1`}
                      />
                    </li>
                    <li
                      onClick={() => {
                        setsearchConditions({
                          ...searchConditions,
                          height: {
                            ...searchConditions.height,
                            tall: !searchConditions.height.tall,
                          },
                        });
                      }}
                      className={`mx-[1.5625%] rounded-[12px] bg-[${
                        searchConditions.height.tall ? "#ee6b2f" : "#f2f2f2"
                      }] cursor-pointer w-[27.46%] flex justify-center items-center`}
                      style={{
                        color: searchConditions.height.tall
                          ? "#f2f2f2"
                          : "#313131",
                      }}
                    >
                      <ImTextHeight size={"45px"} className={` relative`} />
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-col w-full select-none">
                  <h1 className="text-[26.8px] leading-[33.5px] w-[50.22%] text-white my-[13.400px] ml-[5.550px]">
                    Weight
                  </h1>

                  <ul className="flex mb-[8px] w-full h-20">
                    <li
                      onClick={() => {
                        setsearchConditions({
                          ...searchConditions,
                          weight: {
                            ...searchConditions.weight,
                            light: !searchConditions.weight.light,
                          },
                        });
                      }}
                      className={`mx-[1.5625%] rounded-[12px] bg-[${
                        searchConditions.weight.light ? "#ee6b2f" : "#f2f2f2"
                      }] cursor-pointer w-[27.46%] flex justify-center items-center`}
                      style={{
                        color: searchConditions.weight.light
                          ? "#f2f2f2"
                          : "#313131",
                      }}
                    >
                      <FaWeightHanging
                        size={"23px"}
                        className={` relative top-[10px]`}
                      />
                    </li>
                    <li
                      onClick={() => {
                        setsearchConditions({
                          ...searchConditions,
                          weight: {
                            ...searchConditions.weight,
                            medium: !searchConditions.weight.medium,
                          },
                        });
                      }}
                      className={`mx-[5.62%] rounded-[12px] bg-[${
                        searchConditions.weight.medium ? "#ee6b2f" : "#f2f2f2"
                      }] cursor-pointer w-[27.46%] flex justify-center items-center`}
                      style={{
                        color: searchConditions.weight.medium
                          ? "#f2f2f2"
                          : "#313131",
                      }}
                    >
                      <FaWeightHanging
                        size={"35px"}
                        className={` relative top-1`}
                      />
                    </li>
                    <li
                      onClick={() => {
                        setsearchConditions({
                          ...searchConditions,
                          weight: {
                            ...searchConditions.weight,
                            heavy: !searchConditions.weight.heavy,
                          },
                        });
                      }}
                      className={`mx-[1.5625%] rounded-[12px] bg-[${
                        searchConditions.weight.heavy ? "#ee6b2f" : "#f2f2f2"
                      }] cursor-pointer w-[27.46%] flex justify-center items-center`}
                      style={{
                        color: searchConditions.weight.heavy
                          ? "#f2f2f2"
                          : "#313131",
                      }}
                    >
                      <FaWeightHanging size={"45px"} className={` relative`} />
                    </li>
                  </ul>
                </div>

                <div className="mt-4 w-full">
                  <div className="mt-[44px] flex w-full justify-end">
                    <button className="m-[5.550px] pt-[15px] pb-[13.500px] px-[25px] bg-[#a4a4a4] text-white text-[125%] leading-[25px] rounded-[5px] hover:bg-[#8b8b8b]">
                      Reset
                    </button>
                    <button onClick={handleAdvanceSearch} className="m-[5.550px] pt-[15px] pb-[13.500px] px-[25px] bg-[#ee6b2f] text-white text-[125%] leading-[25px] rounded-[5px] flex items-center gap-[6px] hover:bg-[#da471b] ">
                      <img
                        src="/assets/searchbtn.png"
                        alt="SearchBtn"
                        className="h-[17px]"
                      />{" "}
                      Search
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </AnimateHeight>
        </div>
      </div>
      <div
        onClick={() => {
          setShowAdvance(!showAdvance);
        }}
        className="bg-[#616161] w-[49.96%] flex justify-center items-center self-center relative h-4 advanceSearch cursor-pointer"
      >
        <span className="text-white w-full font-openSans text-[15px] tracking-wide absolute top-[-16px] flex justify-center items-center">
          Show Advanced Search
          <div className="rounded-full w-[19.9974px] h-[19.9974px] bg-white ml-[10px] self-end flex justify-center">
            {showAdvance ? (
              <FiChevronUp
                size={"20px"}
                className="text-black relative top-[-5px]"
              />
            ) : (
              <FiChevronDown
                size={"20px"}
                className="text-black relative top-[-5px]"
              />
            )}
          </div>
        </span>
      </div>
    </>
  );
}

export default SearchPokemon;
