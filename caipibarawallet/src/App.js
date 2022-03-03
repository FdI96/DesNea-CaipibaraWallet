import "./App.css";

import { Routes, Route } from "react-router-dom";
import GeraHome from "./components/gera/home/Home";
import VictorHome from "./components/victor/home/Home";
import MarcosHome from "./components/marcos/home/Home";
import Home from "../src/views/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import FedeHome from "./components/fede/home/FedeHome";
import DarioHome from "./components/dario/home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/victor" element={<VictorHome />} />
        <Route path="/federico" element={<FedeHome />} />
        <Route path="/dario" element={<DarioHome />} />
        <Route path="/gera" element={<GeraHome />} />
        <Route path="/marcos" element={<MarcosHome />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
