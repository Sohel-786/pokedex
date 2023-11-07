import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Notfound from "./pages/Notfound";
import Pokedex from "./pages/Pokedex";
import PokemonCard from "./Components/PokemonCard";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/demo" element={<PokemonCard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
