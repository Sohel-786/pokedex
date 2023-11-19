import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";

function SearchPokemon(){
    const [ searchConditions, setsearchConditions ] = useState({
      search : '',
      type : [],
      weakness : [],
      height : null,
      weight : null,
      Range : {
        from : '',
        to : ''
      }
    });

    const { pokemonData } = useSelector((s) => s.pokedex);

    function debounce(time){
      var timer;

      return (e) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          const { name, value } = e.target;

          if(name === 'search'){
            if(Number(value)){
              setsearchConditions({
                ...searchConditions,
                [name] : value
              })
            }else{
              const options = [];
              let i = 0;
              do {
                if(pokemonData[i].name.includes(value) || pokemonData[i].name.includes(value.toUpperCase()) || pokemonData[i].name.includes(value.toUpperCase(value.toLowerCase())) || pokemonData[i].name.includes( value.charAt(0).toUpperCase() + value.slice(1))){
                  options.push(pokemonData[i]);
                }
                i++;
              } while (options.length < 5 && i < 1010);
            }
          }
        }, time)
      }
    }

    var handleChange = debounce(300);

    return (
        <>
        <div className="max-w-[1280px] w-[100vw] mx-auto relative left-[-161.6px] bg-[#616161] pb-4">
            <div className="w-full bg-[#313131] flex flex-col items-center">
              <div className="w-[77%] flex gap-2">
                <div className="w-[45.96%] pl-[14.5px] pt-[32px]">
                  <label
                    htmlFor="search"
                    className="font-openSans text-[26.8px] leading-[26.8px] text-white"
                  >
                    Name or Number
                  </label>

                  <div className="pt-[13px] mb-[10px] w-full flex items-center gap-5">
                    <span className="border-[2.96296px] bg-white border-[#616161] inline-block rounded-[5px] w-[72.5425%]">
                      <input
                        onChange={handleChange}
                        type="text"
                        id="search"
                        name="search"
                        className="p-[10px] font-roboto text-[16px] leading-[24px] rounded-[5px] w-full"
                      />
                    </span>
                    <div
                      className="bg-[#ee6b2f] hover:bg-[#da471b] py-[12.600px] px-[21px] inline-block rounded-[5px] w-[12.95%] h-12"
                      style={{
                        backgroundImage: 'url("/assets/searchbtn.png")',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>

                  <p className="text-white mb-[24px] font-roboto text-[16px] leading-[20px]">
                    Use the Advanced Search to explore Pokémon by type,
                    weakness, Ability, and more!
                  </p>
                </div>

                <div className="w-[43.8%] bg-[#4dad5b] rounded-[5px] mt-[32px] mb-[8px] pb-[8px] h-fit">
                  <h1 className="my-[15px] ml-[20px] mr-[10px] font-openSans text-[20px] text-white leading-[25px]">
                    Search for a Pokémon by name or using its National Pokédex
                    number.
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-[1024px] mb-[16px] mx-auto min-h-[23.9969px]"></div>
          </div>
          <div className="bg-[#616161] w-[49.96%] flex justify-center items-center self-center relative h-4 advanceSearch cursor-pointer">
            <span className="text-white w-full font-openSans text-[15px] tracking-wide absolute top-[-16px] flex justify-center items-center">
              Show Advanced Search
              <div className="rounded-full w-[19.9974px] h-[19.9974px] bg-white ml-[10px] self-end flex justify-center">
                <FiChevronDown
                  size={"20px"}
                  className="text-black relative top-[-5px]"
                />
              </div>
            </span>
          </div>
        </>
    )
}

export default SearchPokemon;