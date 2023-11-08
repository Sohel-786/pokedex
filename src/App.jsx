import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Notfound from "./pages/Notfound";
import Pokedex from "./pages/Pokedex";
import PokemonCard from "./Components/PokemonCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllpokemonData } from "./redux/slices/pokeSlice";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllpokemonData());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokemonDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
