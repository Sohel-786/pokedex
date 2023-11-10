import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import EqualLayout from "../Layouts/EqualLayout";
import SearchPokemon from "../Components/SearchPokemon";
import StatsLi from "../Components/StatsLi";
import { IoMaleSharp, IoFemaleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function PokemonDetails() {
  const { both, male, female } = useSelector((s) => s?.pokedex);

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
            <div
              className="w-full mt-[18px] text-black text-center text-[225%] leading-[36px]"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              Bulbasaur
              <span className="text-[#616161] ml-[20.500px] tracking-wide leading-[36px]">
                #0001
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
              When the bulb on its back grows large, it appears to lose the
              ability to stand on its hind legs.
            </p>

            <div
              className="w-full rounded-[10px] bg-[#30a7d7] text-white grid grid-cols-2 text-[17px] leading-[17px]"
              style={{
                fontFamily: "sans-serif",
              }}
            >
              <div className="ml-[20px] mt-[20px] mb-[25px] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[15px]">
                  <p>Height</p>
                  <h1 className="text-black text-[20px] leading-5">7' 30"</h1>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <p>Weight</p>
                  <h1 className="text-black text-[20px] leading-5">
                    463.0 lbs
                  </h1>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <p>Gender</p>
                  <div className="flex items-center gap-[12.500px] text-black text-[25px] leading-5">
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
                      <p>Unknown</p>
                    )}
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
        <SearchPokemon />
      </section>
    </EqualLayout>
  );
}

export default PokemonDetails;
