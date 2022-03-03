import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import Footer from "../footer/footer";

export default function Home() {
  return (
    <div id={"home"}>
      <h1>Caipibara Home</h1>
      <h3>
        Click one of the buttons below to enter the different versions of
        Caipibara Wallet
      </h3>
      <Link to={"/victor"}>
        <button id={"home-btn-victor"}>Victor App</button>
      </Link>
      <Link to={"/marcos"}>
        <button id={"home-btn-marcos"}>Marcos App</button>
      </Link>
      <Footer />
    </div>
  );
}
