import PokemonType from "./PokemonType";
import { nanoid } from "nanoid";

function PokemonCard({url, name, number, abilities}) {
  return (
    <li className="mx-[6.83449px] mb-[50px] text-left w-[205.174px]">
      <div className="w-full bg-[#F2F2F2] rounded-[5px] ">
        <img
          className="w-full aspect-auto"
          src={url}
          alt={name}
        />
      </div>
      <p className="font-sans text-[#919191] text-[12.8px] leading-4 pt-[2px] my-[6.400px] font-bold">
        <span>#</span>{number}
      </p>
      <h1 className="mt-[11.600px] mb-[5px] text-[#313131] text-[23.2px] leading-[29px] font-openSans bg-white font-bold">
        Bulbasaur
      </h1>
      <ul className="flex flex-wrap">
        {abilities.map((el) => {
          return (
            <PokemonType
              key={nanoid(4)}
              type={el}
              leading={"18px"}
              fontSize={"11px"}
            />
          );
        })}
      </ul>
    </li>
  );
}

export default PokemonCard;
