import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./slices/pokeSlice";

const store = configureStore({
  reducer: {
    pokedex: pokeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
