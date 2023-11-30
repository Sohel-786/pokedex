import { Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { getAllpokemonData } from "./redux/slices/pokeSlice";
import LandingPage from "./pages/LandingPage";
import Loading from "./Components/Loading";
const Notfound = lazy(() => import("./pages/Notfound"));
const Pokedex = lazy(() => import("./pages/Pokedex"));
const PokemonDetails = lazy(() => import("./pages/PokemonDetails"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(getAllpokemonData());
    }, 6000);

    return () => {
      clearTimeout(id);
    }
  }, []);

  return (
    <div className="mx-auto">
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/pokedex"
          element={
            <Suspense
              fallback={
                <div className="w-full h-[90vh] flex justify-center items-center">
                  <Loading />
                </div>
              }
            >
              <Pokedex />
            </Suspense>
          }
        />
        <Route
          path="/pokedex/:id"
          element={
            <Suspense
              fallback={
                <div className="w-full h-[90vh] flex justify-center items-center">
                  <Loading />
                </div>
              }
            >
              <PokemonDetails />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="w-full h-[90vh] flex justify-center items-center">
                  <Loading />
                </div>
              }
            >
              <Notfound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
