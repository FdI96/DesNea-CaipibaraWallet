import "./App.css";

import { Routes, Route } from "react-router-dom";

import VictorHome from "./components/victor/home/Home";
import Home from "../src/views/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/victor" element={<VictorHome />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
