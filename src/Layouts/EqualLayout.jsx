import Footer from "../Components/Footer";

function EqualLayout({ children }) {
  return (
    <div>
      <div className="flex justify-center items-center h-[62px] w-full border-b-[1.852px] border-[#dedede] bg-[#f5f5f5]">
        <ul className="h-full flex">
          <li className="mx-[10px] p-[10px] pt-[9px] pb-[8px] shadow-EqualNav">
            <a className="h-full" href="">
              <img
                className="h-full"
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
      {children}
      <Footer />
    </div>
  );
}

export default EqualLayout;
