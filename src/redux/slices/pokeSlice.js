import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemonData: [],
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
    return result;
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
    const pokemon = {
      id: res?.data?.id,
      name: res?.data?.name,
      number:
        (res?.data?.id).length === 1
          ? "#000" + res.data.id
          : (res?.data?.id).length === 2
          ? "#00" + res.data.id
          : (res?.data?.id).length === 3
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

const pokeSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllpokemonData.fulfilled, (state, action) => {
      state.pokemonData = action?.payload;
    });
  },
});

export default pokeSlice.reducer;
