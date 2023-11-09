import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import EqualLayout from "../Layouts/EqualLayout";
import SearchPokemon from "../Components/SearchPokemon";

function PokemonDetails() {
  return (
    <EqualLayout>
      <section className="w-[77%] bg-white flex flex-col justify-between px-[14.5px] pb-[10px]">
        <div className="pt-[90px] bg-white relative max-w-[1280px] w-[100vw] flex mx-auto left-[-161.6px]">
          <div className="w-[50%] bg-[#a4a4a4] hover:bg-[#30a7d7] transition-colors duration-300 ease-in-out cursor-pointer border-r-[3.7037px] border-white flex justify-end">
            <div className="pt-4 pb-16 w-full max-w-[448px] flex items-center">
              <div className="w-[26px] h-[26px] rounded-full bg-white text-[#616161] mx-[15.600px] my-[5.200px] flex justify-center items-center text-center">
                <FaAngleLeft size={"13px"} />
              </div>
              <span className="text-[24px] leading-[38.88px] text-white font-bold font-sans tracking-wide">
                #0007
              </span>

              <span className="mx-[12px] text-[#616161] leading-[38.88px] font-bold font-sans text-[24px]">
                Squirtle
              </span>
            </div>
          </div>
          <div className="w-[50%] bg-[#a4a4a4] hover:bg-[#30a7d7] transition-colors duration-300 ease-in-out cursor-pointer flex justify-end">
            <div className="pt-4 pb-16 w-full max-w-[448px] flex items-center">
              <span className="mx-[12px] text-[#616161] leading-[38.88px] font-bold font-sans text-[24px]">
                Squirtle
              </span>
              <span className="text-[24px] leading-[38.88px] text-white font-bold font-sans tracking-wide">
                #0007
              </span>
              <div className="w-[26px] h-[26px] rounded-full bg-white text-[#616161] mx-[15.600px] my-[5.200px] flex justify-center items-center text-center">
                <FaAngleRight size={"13px"} />
              </div>
            </div>
          </div>

          <div className="bg-white h-[51px] absolute bottom-0 w-[58.0325%] ml-[20.2%] before:bg-pokedetails before:bg-no-repeat before:absolute before:h-[51.6px] before:w-[75px] before:content-[' '] before:bottom-0 before:left-[-75px] after:bg-pokedetails after:bg-no-repeat after:absolute after:h-[51.6px] after:w-[75px] after:content-[' '] after:bottom-0 after:right-[-75px] after:bg-right-top">
            <div className="w-full mt-[18px] text-black text-center text-[225%] leading-[36px]" style={{
                fontFamily : 'sans-serif'
            }}>
                    Bulbasaur 
                    <span className="text-[#616161] ml-[20.500px] tracking-wide leading-[36px]">#0001</span>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto pt-4 pb-[50px]">

        </div>

        <div className="w-full py-4 flex">
            <div className="w-[49%] flex flex-col">
                <div className="w-full rounded-[5px] bg-[#F2F2F2] ">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="demo" className="w-full pb-[30px]" />
                </div>

                <div className="my-4 bg-[#a4a4a4] w-full rounded-[10px] ">
                    <h1 className="m-6 mt-3 text-[#313131] text-base leading-5" style={{
                      fontFamily : "sans-serif"
                    }}>
                      Stats
                    </h1>

                    <ul className="clear-both relative w-full list-none">
                        <li className="mb-[20px] ml-[31.157px] mr-[6.713px]"></li>
                    </ul>
                </div>
            </div>
        </div>
        <SearchPokemon />
      </section>
    </EqualLayout>
  );
}

export default PokemonDetails;