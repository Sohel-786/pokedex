import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Notfound from "./pages/Notfound"

function App() {

  return (
    <div>
      <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
