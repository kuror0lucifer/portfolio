import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./components/Home/Header";
import Introduce from "./components/Introduce/Introduce";
import About from "./components/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Introduce />
    <About />
  </React.StrictMode>
);
