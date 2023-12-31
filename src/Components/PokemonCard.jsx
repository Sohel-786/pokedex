import { useNavigate } from "react-router-dom";
import PokemonType from "./PokemonType";
import { nanoid } from "nanoid";

function PokemonCard({ url, name, number, types, id }) {

  const navigate = useNavigate();

  return (
    <li onClick={() => {
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      })
      navigate(`/pokedex/${id}`)
    }} className="mx-[6.83449px] mb-[50px] text-left w-[23%] hover:animate-pokeBounce relative">
      <div className="w-full bg-[#F2F2F2] rounded-[5px] h-[205px] flex justify-center cursor-pointer">
        <img className="w-[90%] aspect-auto max-h-[95%] hover:scale-110 transition-all duration-300 ease-in-out" src={url} alt={name} />
      </div>
      <p className="font-sans text-[#919191] text-[12.8px] leading-4 pt-[2px] my-[6.400px] font-bold">
        {number}
      </p>
      <h1 className="mt-[11.600px] mb-[5px] text-[#313131] text-[23.2px] leading-[29px] font-openSans bg-white font-bold capitalize">
        {name}
      </h1>
      <ul className="flex flex-wrap text-[12px] leading-[18px]">
        {types.map((el) => {
          return <PokemonType key={nanoid(4)} width={'38.4375%'} type={el} rounded={"3px"} />;
        })}
      </ul>
    </li>
  );
}

export default PokemonCard;
