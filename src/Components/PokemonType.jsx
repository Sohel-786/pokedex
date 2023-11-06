function PokemonType({ type, leading, fontSize }) {
  if (type === "grass") {
    return <li className={`mr-[2.969px] w-[38.4375%] font-sans leading-[${leading}] text-[${fontSize}] text-center text-black bg-gradient-to-tr from-[#9bcc50] to-green-500 rounded-[3px]`}>
        Grass
    </li>;
  }
  else if (type === "poison") {
    return <li className={`mr-[2.969px] w-[38.4375%] font-sans leading-[${leading}] text-[${fontSize}] text-center text-white bg-gradient-to-tr from-[#b97fc9] to-purple-500 rounded-[3px]`}>
        Poison
    </li>;
  }
  else if (type === "fire") {
    return <li className={`mr-[2.969px] w-[38.4375%] font-sans leading-[${leading}] text-[${fontSize}] text-center text-white bg-gradient-to-tr from-[#fd7d24] to-orange-600 rounded-[3px]`}>
        Fire
    </li>;
  }
  else if (type === "flying") {
    return <li className={`mr-[2.969px] w-[38.4375%] font-sans leading-[${leading}] text-[${fontSize}] text-center text-black bg-gradient-to-b from-[#3dc7ef] from-50% to-[#bdb9b8] to-50% rounded-[3px]`}>
        Flying
    </li>;
  }
  else if (type === "water") {
    return <li className={`mr-[2.969px] w-[38.4375%] font-sans leading-[${leading}] text-[${fontSize}] text-center text-black bg-gradient-to-b from-[#3dc7ef] from-50% to-[#bdb9b8] to-50% rounded-[3px]`}>
        Water
    </li>;
  }
}
