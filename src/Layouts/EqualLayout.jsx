import Footer from "../Components/Footer";
import Pikachu from "/icons/pikachu.svg";
import Pokeball from "/icons/pokeball.svg";
import Game from "/icons/game.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EqualLayout({ children }) {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 110 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  return (
    <div>
      <div className="flex justify-center items-center w-full border-b-[1.852px] border-[#dedede] bg-[#f5f5f5]">
        <ul className="flex relative left-[-28px] overflow-hidden">
          <li className="mx-[10px] pt-[9px] pb-[8px] shadow-EqualNav">
            <a className="" href="#">
              <img
                rel="preload"
                fetchpriority="high"
                src="/assets/pokemonLogo.svg"
                alt="pokeLogo"
                className="w-[98px] aspect-auto"
              />
            </a>
          </li>

          <li className="pr-[10px] pt-[9px] pb-[8px]">
            <a className="h-full" href="#">
              <img
                className="h-full aspect-auto"
                src="/assets/pikachu.svg"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="p-[10px] pt-[9px] pb-[8px] border-r-[1.852px] border-l-[1.852px] border-[#dedede]">
            <a className="h-full" href="#">
              <img
                rel="preload"
                fetchpriority="high"
                className="w-[78.99px] aspect-auto"
                src="/assets/aboutUs.png"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="my-[6px] ml-[7px]">
            <a className="h-full" href="#">
              <img
                rel="preload"
                fetchpriority="high"
                className="h-full"
                src="/assets/pokeCard.svg"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="my-[6px] ml-[7px]">
            <a className="h-full" href="#">
              <img
                rel="preload"
                fetchpriority="high"
                className="h-full"
                src="/assets/scarlet.svg"
                alt="pokeLogo"
              />
            </a>
          </li>

          <li className="my-[6px] ml-[7px]">
            <a className="h-full" href="#">
              <img
                rel="preload"
                fetchpriority="high"
                className="h-full"
                src="/assets/pokeCommunity.svg"
                alt="pokeLogo"
              />
            </a>
          </li>
        </ul>
      </div>

      <div
        style={{
          position: isVisible ? "sticky" : "static",
          top: "-41px",
        }}
        className="flex z-50 justify-center items-center w-full pt-[2px] bg-[#FFF]"
      >
        <ul className="flex justify-center items-center h-[90px] font-roboto">
          <li
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              navigate("/home");
            }}
            style={{
              backgroundColor:
                (pathname === "/home" || pathname === "/") && "#919191",
              color: (pathname === "/home" || pathname === "/") && "white",
              fontWeight: (pathname === "/home" || pathname === "/") && "bold",
            }}
            className="hover:bg-[#919191] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#919191] after:rounded-bl-lg hover:text-white transition-colors duration-100 ease-in"
          >
            <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
              <img
                rel="preload"
                fetchpriority="high"
                style={{
                  display: isVisible && "none",
                }}
                className="h-full aspect-auto"
                src={Pikachu}
                alt="pikachuNav"
              />
            </span>

            <span className="my-[5px] text-sm w-full text-center ">Home</span>
          </li>

          <li
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              navigate("/pokedex");
            }}
            style={{
              backgroundColor:
                (pathname === "/pokedex" ||
                  pathname.substring(0, 8) === "/pokedex") &&
                "#ff0000c9",
              color:
                (pathname === "/pokedex" ||
                  pathname.substring(0, 8) === "/pokedex") &&
                "white",
              fontWeight:
                (pathname === "/pokedex" ||
                  pathname.substring(0, 8) === "/pokedex") &&
                "bold",
            }}
            className="hover:bg-[#ff0000c9] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#ff0000c9] hover:text-white transition-colors duration-100 ease-in"
          >
            <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
              <img
                rel="preload"
                fetchpriority="high"
                style={{
                  display: isVisible && "none",
                }}
                className="h-full aspect-auto"
                src={Pokeball}
                alt="pikachuNav"
              />
            </span>

            <span className="my-[5px] text-sm w-full text-center">Pokedex</span>
          </li>

          <li className="hover:bg-[#f98955] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#f98955] hover:text-white transition-colors duration-100 ease-in">
            <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
              <img
                rel="preload"
                fetchpriority="high"
                style={{
                  display: isVisible && "none",
                }}
                className="h-full aspect-auto"
                src={Game}
                alt="pikachuNav"
              />
            </span>

            <span className="my-[5px] text-sm leading-[14.5px] w-full text-center">
              Video Games & Apps
            </span>
          </li>

          <li className="hover:bg-[#a915ff] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#a915ff] hover:text-white transition-colors duration-100 ease-in">
            <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
              <img
                rel="preload"
                fetchpriority="high"
                style={{
                  display: isVisible && "none",
                }}
                className="h-full aspect-auto"
                src={"/icons/pokecard.svg"}
                alt="pikachuNav"
              />
            </span>

            <span className="my-[5px] text-sm w-full text-center">
              Trading Card Game
            </span>
          </li>

          <li className="hover:bg-[#4dad5b] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#4dad5b] hover:text-white transition-colors duration-100 ease-in">
            <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
              <img
                rel="preload"
                fetchpriority="high"
                style={{
                  display: isVisible && "none",
                }}
                className="h-full aspect-auto"
                src={"/icons/pokemonTv.svg"}
                alt="pikachuNav"
              />
            </span>

            <span className="my-[5px] text-sm w-full text-center">
              Pokemon TV
            </span>
          </li>

          <li className="hover:bg-[#30a7d7] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#30a7d7] hover:text-white transition-colors duration-100 ease-in">
            <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
              <img
                rel="preload"
                fetchpriority="high"
                style={{
                  display: isVisible && "none",
                }}
                className="h-full aspect-auto"
                src={"/icons/trophy.svg"}
                alt="pikachuNav"
              />
            </span>

            <span className="my-[5px] text-sm leading-[14.5px] w-full text-center">
              Play! Pokemon Events
            </span>
          </li>

          <li className="hover:bg-[#1b53ba] flex flex-col cursor-pointer w-[127.853px] h-full relative after:h-[6px] after:content-[' '] after:absolute after:w-full after:bottom-[-6px] after:z-[1] after:bg-[#1b53ba] after:rounded-br-lg hover:text-white transition-colors duration-100 ease-in">
            <span className="h-[30.9977px] flex justify-center items-center w-full mt-[15px]">
              <img
                rel="preload"
                fetchpriority="high"
                style={{
                  display: isVisible && "none",
                }}
                className="h-full aspect-auto"
                src={"/icons/news.svg"}
                alt="pikachuNav"
              />
            </span>

            <span className="my-[5px] text-sm w-full text-center">News</span>
          </li>
        </ul>
      </div>

      <section
        className="min-h-[300px] border-t-[1.852px] border-[#f0f0f0] max-w-[1280px] overflow-hidden mx-auto bg-white flex flex-col items-center"
        style={{
          backgroundImage: 'url("/assets/whitebgImage.png")',
        }}
      >
        {children}
      </section>
      <Footer />
    </div>
  );
}

export default EqualLayout;
