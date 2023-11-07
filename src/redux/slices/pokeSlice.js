import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const dispatch = useDispatch();
const initialState = [];

const getAllpokemonData = createAsyncThunk("/pokemon/all", async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        offset: 0,
        limit: 1010,
      },
    });

    const allPokemon = [];
    (res?.data?.results).forEach(async (el) => {
        const data = await dispatch(getPokemon);
        allPokemon.push(data);
    });

    return allPokemon;
  } catch (e) {
    console.log(e);
  }
});

const getPokemon = createAsyncThunk("/pokemon/one", async (url) => {
  try {
    const res = await axios.get(url);
    let url = res?.data?.sprites?.other?.dream_world.front_default;
    let url2 = res?.data?.sprites?.other?.official-artwork.front_default;
    let types = (res?.data?.types).map((el) => {
        return el.type.name;
    })
    const pokemon = {
      id : res?.data?.id,
      name: res?.data?.name,
      number:
        (res?.data?.id).length === 1
          ? "#000" + res.data.id
          : (res?.data?.id).length === 2
          ? "#00" + res.data.id
          : (res?.data?.id).length === 3
          ? "#0" + res.data.id
          : "#" + res.data.id,
      img: url ? url : url2,
      types
    };

    return pokemon;
  } catch (e) {
    console.log(e);
  }
});

const pokeSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(getAllpokemonData.fulfilled, (state, action) => {
        console.log(action);
        state = [...action.payload]
    })
  }
});

export default pokeSlice.reducer;
