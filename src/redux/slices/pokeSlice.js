import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { handleTypeData, handleWeakness } from "../../helper/common";

const initialState = {
  pokemonData: [],
  male: [],
  female: [],
  both: [],
  abilities: [],
};

export const getAllpokemonData = createAsyncThunk("/pokemon/all", async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        offset: 0,
        limit: 1010,
      },
    });

    const allPokemon = (res?.data?.results).map(async (el) => {
      const data = await getPokemon(el.url);
      return data;
    });

    const result = await Promise.all(allPokemon);

    var { data: datamale } = await axios.get(
      "https://pokeapi.co/api/v2/gender/male"
    );
    var { data: datafemale } = await axios.get(
      "https://pokeapi.co/api/v2/gender/female"
    );

    datamale = datamale.pokemon_species_details.map(
      (el) => el.pokemon_species.name
    );
    datafemale = datafemale.pokemon_species_details.map(
      (el) => el.pokemon_species.name
    );

    const both = datafemale.filter((el) => {
      if (datamale.includes(el)) {
        return el;
      }
    });

    const { data: abilityData } = await axios.get(
      "https://pokeapi.co/api/v2/ability?offset=0&limit=363"
    );
    const abilities = abilityData.results.map((el) => {
      return el.name;
    });
    return {
      result,
      male: datamale,
      female: datafemale,
      both,
      abilities,
    };
  } catch (e) {
    console.log(e);
  }
});

const getPokemon = async (url) => {
  try {
    const res = await axios.get(url);
    let url1 = res?.data?.sprites?.other?.dream_world.front_default;
    let url2 = res?.data?.sprites?.other?.["official-artwork"].front_default;
    let types = (res?.data?.types).map((el) => {
      return el.type.name;
    });
    var abilities = await handleAbilities(res?.data?.abilities);
    var type_data = await handleTypeData(res.data.types);
    var weakness = handleWeakness(type_data);

    const pokemon = {
      id: res?.data?.id,
      name: res?.data?.species?.name,
      height: res?.data?.height,
      weight: res?.data?.weight,
      abilities,
      weakness,
      number:
        (res?.data?.id).toString().length === 1
          ? "#000" + res.data.id
          : (res?.data?.id).toString().length === 2
          ? "#00" + res.data.id
          : (res?.data?.id).toString().length === 3
          ? "#0" + res.data.id
          : "#" + res.data.id,
      img: url1 ? url1 : url2,
      types,
    };
    return pokemon;
  } catch (e) {
    console.log(e);
  }
};

async function handleAbilities(data) {
  let temp = [];
  data.forEach(async (el) => {
    const { name } = el.ability;
    temp.push(name);
  });

  return temp;
}

const pokeSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllpokemonData.fulfilled, (state, action) => {
      state.pokemonData = action?.payload?.result;
      state.male = action?.payload?.male;
      state.female = action?.payload?.female;
      state.both = action?.payload?.both;
      state.abilities = action?.payload?.abilities;
    });
  },
});

export default pokeSlice.reducer;
