import "./App.css";

// import Layout from "./components/layout/layout";
// import Body from "./components/body/body";

import * as ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";

// import Layout from "./components/layout/Layout";
import VictorHome from "./components/victor/Victor";
import Home from "../src/views/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/victor" element={<VictorHome />} />
      </Routes>
      <Link to={"/victor"}>Victor App</Link>
    </div>
  );
}

export default App;
