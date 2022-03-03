import logo from './assets/logo.svg';
import './App.css';
import Layout from './components/gera/layout/layout';
import FetchDemo from './services/Dbrecords/FetchDemo';
import "./App.css";

import { Routes, Route } from "react-router-dom";

import VictorHome from "./components/victor/home/Home";
import DarioHome from "./components/dario/home/home"
import Home from "../src/views/Home";
// import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/victor" element={<VictorHome />} />
        <Route path="/dario" element={<DarioHome />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      {/* <Layout/> */}
      {/* <FetchDemo/> */}
    </div>
  );
}
export default App;
