function PokemonType({ type, rounded , width}) {
  if (type === "grass") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#9bcc50] to-green-500 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Grass
      </li>
    );
  } else if (type === "poison") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#b97fc9] to-purple-500 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Poison
      </li>
    );
  } else if (type === "fire") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#fd7d24] to-orange-600 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Fire
      </li>
    );
  } else if (type === "flying") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-b from-[#3dc7ef] from-50% to-[#bdb9b8] to-50% rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Flying
      </li>
    );
  } else if (type === "water") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#4592c4] to-sky-600 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Water
      </li>
    );
  } else if (type === "bug") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#729f3f] to-green-600 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Bug
      </li>
    );
  } else if (type === "normal") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#a4acaf] to-gray-500 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Normal
      </li>
    );
  } else if (type === "electric") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#eed535] to-yellow-500 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Electric
      </li>
    );
  } else if (type === "ground") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-b from-[#f7de3f] from-50% to-[#ab9842] to-50% rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Ground
      </li>
    );
  } else if (type === "fairy") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#fdb9e9] to-pink-400 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Fairy
      </li>
    );
  } else if (type === "fighting") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#d56723] to-orange-400 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Fighting
      </li>
    );
  } else if (type === "psychic") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-[#f366b9] rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Psychic
      </li>
    );
  } else if (type === "rock") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-stone-500 to-stone-700 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Rock
      </li>
    );
  } else if (type === "steel") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-[#9eb7b8] rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Steel
      </li>
    );
  } else if (type === "ice") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-black bg-gradient-to-tr from-[#51c4e7] to-blue-500 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Ice
      </li>
    );
  } else if (type === "ghost") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-tr from-[#7b62a3] to-purple-600 rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Ghost
      </li>
    );
  } else if (type === "dragon") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-b from-[#53a4cf] from-50% to-[#f16e57] to-50% rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Dragon
      </li>
    );
  } else if (type === "dark") {
    return (
      <li
        className={`list-none mr-[2.969px] font-sans text-center text-white bg-gradient-to-b from-[#707070] from-50% to-[#242424] to-50% rounded-[${rounded}]`}
        style={{
          width : width
        }}
      >
        Dark
      </li>
    );
  }
}

export default PokemonType;
