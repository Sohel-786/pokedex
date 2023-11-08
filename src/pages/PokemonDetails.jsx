import { FiChevronDown } from "react-icons/fi";
import EqualLayout from "../Layouts/EqualLayout";
import SearchPokemon from "../Components/SearchPokemon";

function PokemonDetails() {
  return (
    <EqualLayout>
      <section className="w-[77%] bg-white flex flex-col justify-between px-[14.5px] pb-[10px]">
        <SearchPokemon />
      </section>
    </EqualLayout>
  );
}

export default PokemonDetails;
