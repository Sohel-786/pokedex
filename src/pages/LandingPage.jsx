import EqualLayout from "../Layouts/EqualLayout";

function LandingPage() {
  return (
    <EqualLayout>
        <section className="w-[77%] bg-white flex justify-between px-[14.5px] pt-[37px] pb-[10px]">
          <div className="w-[66%] float-left">
            <div className="w-full cursor-pointer relative">
              <div className="w-full">
                <img
                  className="w-full rounded-tl-[5px] rounded-tr-[5px]"
                  src="/assets/scarlet-violet-169-en.png"
                  alt="Image"
                />
              </div>
              <div className="bg-[#313131] pt-[4px] pb-[24px] w-full rounded-bl-[5px]">
                <h1 className="font-openSans text-[22px] mt-[16.500px] ml-[22px] mr-[11px] text-white font-medium">
                  <em>The Indigo Disk </em>
                  Is Coming December 14, 2023
                </h1>
                <p className="ml-[20px] mr-[8px] mt-[8px] max-w-[398px] min-h-[50px] text-[#cccccc] font-roboto text-[16px] leading-5">
                  Continue your <em>Pokémon Scarlet</em> and{" "}
                  <em>Pokémon Violet</em> adventure with Part 2 of{" "}
                  <em>The Hidden Treasure of Area Zero</em> DLC! Learn more at
                  the official site.
                </p>

                <div className="absolute right-0 left-auto bottom-0">
                  <img
                    src="/assets/ESRB.jpg"
                    alt="ESRB"
                    className="w-[148px] h-[73px]"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="mt-[16px] mr-[18.067px] w-[48.4375%] rounded-[5px] overflow-hidden cursor-pointer">
                <img
                  className="w-full"
                  src="/assets/pokemon-go-169.png"
                  alt="PokemonGo"
                />
                <div className="pb-[8px] bg-[#4dad5b] rounded-bl-[5px] rounded-br-[5px] w-full">
                  <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px]">
                    Walking in a Wooper Wonderland
                  </h1>
                </div>
              </div>
              <div className="mt-[16px] w-[48.4375%] rounded-[5px] overflow-hidden cursor-pointer">
                <img
                  className="w-full rounded-[5px]"
                  src="/assets/pokemonGo.png"
                  alt="PokemonGo"
                />
                <div className="pb-[8px] bg-[#ee6b2f] rounded-bl-[5px] rounded-br-[5px] w-full">
                  <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px]">
                    Celebrate Day of the Dead in Pokémon GO
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[32.3%]">
            <div className="w-full rounded-[5px] overflow-hidden cursor-pointer">
              <img
                className="w-full rounded-[5px]"
                src="/assets/preview-card.png"
                alt="PokemonGo"
              />
              <div className="pb-[8px] bg-[#B38AEA] rounded-bl-[5px] rounded-br-[5px] w-full">
                <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px]">
                  Pokémon TCG: <em>Scarlet & Violet—Paradox Rift </em> Preview
                </h1>
              </div>
            </div>
            <div className="w-full mt-[16px] rounded-[5px] overflow-hidden cursor-pointer">
              <img
                className="w-full rounded-[5px]"
                src="/assets/preview-card2.png"
                alt="PokemonGo"
              />
              <div className="pb-[8px] bg-[#ff90c4] rounded-bl-[5px] rounded-br-[5px] w-full">
                <h1 className="py-[16.500px] ml-[22px] mr-[11px] text-white text-[22px] leading-[27.5px] tracking-wide">
                  Hisuian Typhlosion Heats Up Tera Raid Battles
                </h1>
              </div>
            </div>

            <div className="w-full mt-[16px] flex rounded-[5px] overflow-hidden cursor-pointer">
              <div className="w-[40%]">
                <img
                  className="w-full aspect-auto rounded-[5px] block"
                  src="/assets/pokemonCenter.png"
                  alt="PokemonGo"
                />
              </div>
              <div className="pb-[8px] bg-[#c7aa79] rounded-bl-[5px] rounded-br-[5px] w-[60%]">
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
