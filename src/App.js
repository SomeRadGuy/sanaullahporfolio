import React from "react";
import Header from "./components/header/header";
import Info from "./components/info/info";
import About from "./components/about/about";

import "./app.css";

const App = () => {
  return (
    <>
      <div className="main_div">
        <Info />
        <About />
      </div>
    </>
  );
};

export default App;
