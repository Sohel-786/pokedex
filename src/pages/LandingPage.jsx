import { useEffect } from "react";
import EqualLayout from "../Layouts/EqualLayout";

function LandingPage() {
  useEffect(() => {
    const title = document.getElementById("title");
    title.innerText = "Pokédex";
  }, []);
  return (
    <EqualLayout>
      <section className="w-[77%] bg-white flex justify-between px-[14.5px] pt-[37px] pb-[10px]">
        <div className="w-[66%] float-left">
          <div className="w-full cursor-pointer relative hover:scale-105 transition-all duration-300 ease-in-out bg-[#313131] hover:bg-[#202020] rounded-bl-[5px]">
            <div className="w-full">
              <img
                rel="preload"
                fetchpriority="high"
                className="w-full aspect-auto rounded-tl-[5px] rounded-tr-[5px]"
                src="/assets/scarlet-violet-169-en.png"
                alt="Image"
              />
            </div>
            <div className="pt-[4px] pb-[24px] w-full">
              <h1 className="font-openSans text-[22px] mt-[16.500px] ml-[22px] mr-[11px] text-white font-medium">
                <em>The Indigo Disk </em>
                Is Coming December 14, 2023
              </h1>
              <p className="ml-[20px] mr-[8px] mt-[8px] max-w-[398px] min-h-[50px] text-[#cccccc] font-roboto text-[16px] leading-5">
                Continue your <em>Pokémon Scarlet</em> and{" "}
                <em>Pokémon Violet</em> adventure with Part 2 of{" "}
                <em>The Hidden Treasure of Area Zero</em> DLC! Learn more at the
                official site.
              </p>

              <div className="absolute right-0 left-auto bottom-0">
                <img
                  src="/assets/ESRB.jpg"
                  alt="ESRB"
                  className="w-[148px] aspect-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="mt-[16px] mr-[18.067px] w-[48.4375%] rounded-[5px] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#4dad5b] rounded-b-[5px] hover:bg-[#3a8845]">
              <img
                
                className="w-full aspect-auto"
                src="/assets/pokemon-go-169.png"
                alt="PokemonGo"
              />
              <div className="pb-[8px] w-full">
                <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px]">
                  Walking in a Wooper Wonderland
                </h1>
              </div>
            </div>
            <div className="mt-[16px] w-[48.4375%] rounded-[5px] overflow-hidden cursor-pointer  hover:scale-105 transition-all duration-300 ease-in-out bg-[#ee6b2f] rounded-b-[5px] hover:bg-[#d2602b]">
              <img
                
                className="w-full aspect-auto rounded-[5px]"
                src="/assets/pokemonGo.png"
                alt="PokemonGo"
              />
              <div className="pb-[8px] w-full">
                <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px]">
                  Celebrate Day of the Dead in Pokémon GO
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[32.3%]">
          <div className="w-full rounded-[5px] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#B38AEA] rounded-b-[5px] hover:bg-[#8c6cb5]">
            <img
              className="w-full aspect-auto rounded-[5px]"
              src="/assets/preview-card.png"
              alt="PokemonGo"
            />
            <div className="pb-[8px] w-full">
              <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px]">
                Pokémon TCG: <em>Scarlet & Violet—Paradox Rift </em> Preview
              </h1>
            </div>
          </div>
          <div className="w-full mt-[16px] rounded-[5px] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#ff90c4]  rounded-b-[5px] hover:bg-[#ec75ad] ">
            <img
              className="w-full aspect-auto rounded-[5px]"
              src="/assets/preview-card2.png"
              alt="PokemonGo"
            />
            <div className="pb-[8px] w-full">
              <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px] tracking-wide">
                Hisuian Typhlosion Heats Up Tera Raid Battles
              </h1>
            </div>
          </div>

          <div className="w-full mt-[16px] flex rounded-[5px] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out bg-[#c7aa79] rounded-b-[5px] hover:bg-[#e5bf7d]">
            <div className="w-[40%]">
              <img
                className="w-full aspect-auto rounded-[5px] block"
                src="/assets/pokemonCenter.png"
                alt="PokemonGo"
              />
            </div>
            <div className="pb-[8px] w-[60%]">
              <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px] tracking-wide">
                Pokémon Center Holiday Plush
              </h1>
            </div>
          </div>
        </div>
      </section>
    </EqualLayout>
  );
}

export default LandingPage;
