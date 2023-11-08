import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import EqualLayout from "../Layouts/EqualLayout";
import SearchPokemon from "../Components/SearchPokemon";

function PokemonDetails() {
  return (
    <EqualLayout>
      <section className="w-[77%] bg-white flex flex-col justify-between px-[14.5px] pb-[10px]">
        <div className="pt-[90px] relative w-[1280px] flex mx-auto left-[-161.6px]">
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
        </div>
        <SearchPokemon />
      </section>
    </EqualLayout>
  );
}

export default PokemonDetails;
