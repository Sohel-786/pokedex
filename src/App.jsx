import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Notfound from "./pages/Notfound";
import Pokedex from "./pages/Pokedex";
import PokemonCard from "./Components/PokemonCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllpokemonData } from "./redux/slices/pokeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllpokemonData());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
