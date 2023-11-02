import Footer from "../Components/Footer";
import Pikachu from "/icons/pikachu.png";
import Pokeball from "/icons/pokeball.png"
import Game from "/icons/game.png"

function EqualLayout({ children }) {
  return (
    <div>
      <div className="flex justify-center items-center w-full border-b-[1.852px] border-[#dedede] bg-[#f5f5f5]">
        <ul className="flex">
          <li className="mx-[10px] p-[10px] pt-[9px] pb-[8px] shadow-EqualNav">
            <a className="" href="">
              <img
                className=""
                src="/assets/pokemonlogo.png"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="pr-[10px] pt-[9px] pb-[8px]">
            <a className="h-full" href="">
              <img
                className="h-full"
                src="/assets/pikachu.png"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="p-[10px] pt-[9px] pb-[8px] border-r-[1.852px] border-l-[1.852px] border-[#dedede]">
            <a className="h-full" href="">
              <img
                className="h-full"
                src="/assets/aboutUs.png"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="my-[6px] ml-[7px]">
            <a className="h-full" href="">
              <img
                className="h-full"
                src="/assets/pokeCard.png"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="my-[6px] ml-[7px]">
            <a className="h-full" href="">
              <img
                className="h-full"
                src="/assets/scarlet.jpg"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="my-[6px] ml-[7px]">
            <a className="h-full" href="">
              <img
                className="h-full"
                src="/assets/pokeCommunity.png"
                alt="pokeLogo"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center w-full border-b-[1.852px] mt-[2px]">
        <ul className="flex justify-center items-center h-[90px] font-roboto">

            <li className="hover:bg-[#919191] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#919191] after:rounded-bl-lg hover:text-white transition-colors duration-100 ease-in">

                <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
                  <img className="h-full aspect-auto" src={Pikachu} alt="pikachuNav" />
                </span>

                <span className="my-[5px] text-sm w-full text-center ">Home</span>
            </li>

            <li className="hover:bg-[#ff0000ed] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#ff0000ed] hover:text-white transition-colors duration-100 ease-in">

                <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
                  <img className="h-full aspect-auto" src={Pokeball} alt="pikachuNav" />
                </span>

                <span className="my-[5px] text-sm w-full text-center">Pokédex</span>
            </li>

            <li className="hover:bg-[#f98955] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#f98955] hover:text-white transition-colors duration-100 ease-in">

                <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
                  <img className="h-full aspect-auto" src={Game} alt="pikachuNav" />
                </span>

                <span className="my-[5px] text-sm leading-[14.5px] w-full text-center">Video Games & Apps</span>
            </li>

            <li className="hover:bg-[#a915ff] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#a915ff] hover:text-white transition-colors duration-100 ease-in">

                <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
                  <img className="h-full aspect-auto" src={"/icons/pokecard.svg"} alt="pikachuNav" />
                </span>

                <span className="my-[5px] text-sm w-full text-center">Trading Card Game</span>
            </li>

            <li className="hover:bg-[#4dad5b] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#4dad5b] hover:text-white transition-colors duration-100 ease-in">

                <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
                  <img className="h-full aspect-auto" src={"/icons/pokemonTv.svg"} alt="pikachuNav" />
                </span>

                <span className="my-[5px] text-sm w-full text-center">Pokémon TV</span>
            </li>

            <li className="hover:bg-[#30a7d7] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#30a7d7] hover:text-white transition-colors duration-100 ease-in">

                <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
                  <img className="h-full aspect-auto" src={"/icons/trophy.svg"} alt="pikachuNav" />
                </span>

                <span className="my-[5px] text-sm leading-[14.5px] w-full text-center">Play! Pokémon Events</span>
            </li>

            <li className="hover:bg-[#1b53ba] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#1b53ba] after:rounded-br-lg hover:text-white transition-colors duration-100 ease-in">

                <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
                  <img className="h-full aspect-auto" src={"/icons/news.svg"} alt="pikachuNav" />
                </span>

                <span className="my-[5px] text-sm w-full text-center">News</span>
            </li>
        </ul>
      </div>

      {children}
      <Footer />
    </div>
  );
}

export default EqualLayout;