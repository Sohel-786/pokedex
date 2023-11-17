function PokemonType({ type, rounded , width}) {
  if (type === "grass") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#9bcc50] to-green-500`}
        style={{
          width : width,
          borderRadius : rounded
        }}
      >
        Grass
      </li>
    );
  } else if (type === "poison") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#b97fc9] to-purple-500`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Poison
      </li>
    );
  } else if (type === "fire") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#fd7d24] to-orange-600`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Fire
      </li>
    );
  } else if (type === "flying") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-b from-[#3dc7ef] from-50% to-[#bdb9b8] to-50%`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Flying
      </li>
    );
  } else if (type === "water") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#4592c4] to-sky-600`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Water
      </li>
    );
  } else if (type === "bug") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#729f3f] to-green-600`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Bug
      </li>
    );
  } else if (type === "normal") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#a4acaf] to-gray-500`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Normal
      </li>
    );
  } else if (type === "electric") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#eed535] to-yellow-500`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Electric
      </li>
    );
  } else if (type === "ground") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-b from-[#f7de3f] from-50% to-[#ab9842] to-50%`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Ground
      </li>
    );
  } else if (type === "fairy") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#fdb9e9] to-pink-400`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Fairy
      </li>
    );
  } else if (type === "fighting") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#d56723] to-orange-400`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Fighting
      </li>
    );
  } else if (type === "psychic") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-[#f366b9]`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Psychic
      </li>
    );
  } else if (type === "rock") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-stone-500 to-stone-700`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Rock
      </li>
    );
  } else if (type === "steel") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-[#9eb7b8]`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Steel
      </li>
    );
  } else if (type === "ice") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#51c4e7] to-blue-500`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Ice
      </li>
    );
  } else if (type === "ghost") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#7b62a3] to-purple-600`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Ghost
      </li>
    );
  } else if (type === "dragon") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-b from-[#53a4cf] from-50% to-[#f16e57] to-50%`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Dragon
      </li>
    );
  } else if (type === "dark") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-b from-[#707070] from-50% to-[#242424] to-50%`}
        style={{
           width : width,
          borderRadius : rounded
        }}
      >
        Dark
      </li>
    );
  }
}

export default PokemonType;
