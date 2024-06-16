import React from "react";
import Info from "./components/info/info";
import About from "./components/about/about";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";

import "./app.css";

const App = () => {
  return (
    <>
      <div className="main_div">
        <Info />
        <About />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default App;
