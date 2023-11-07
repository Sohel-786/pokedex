import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from './slices/pokeSlice';

const store = configureStore({
    reducer: {
      pokedex : pokeReducer
    },
    devTools : true
})

export default store;