import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [

];

const getAllpokemonData = createAsyncThunk('/pokemon/all', async () =>{
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon', {
            params : {
                offset: 0,
                limit: 1010
            }
        });

        const allPokemon = (res.data.results).map((el) =>{
            
        })
    } catch(e){
        console.log(e)
    }
})

const getPokemon = createAsyncThunk('/pokemon/one', async (url) => {
    try {
        const res = await axios.get(url);
        const pokemon = {
            name : res.data.name,
            number : (res.data.id).length === 1 ? '#000' + res.data.id : (res.data.id).length === 2 ? '#00' + res.data.id : (res.data.id).length === 3 ? '#0' + res.data.id : '#' + res.data.id,
            img : res.data.
        }
    } catch (e) {
        
    }
})

const pokeSlice = createSlice({
    name : "pokedex",
    initialState,
    reducers :{}
});

export default pokeSlice.reducer;