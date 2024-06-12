import React from "react";
import "./header.css";

const header = () => {
  return (
    <div className="header_div">
      <div className="right_div">
        <h1>
          Portfolio
          <span className="Header_dot">.</span>
        </h1>
      </div>
      <div className="center_div">
        <a>
          <h3>About</h3>
        </a>
        <a>
          <h3>Projects</h3>
        </a>
        <a>
          <h3>Skills</h3>
        </a>
        <a>
          <h3>Resume</h3>
        </a>
      </div>
      <div className="left_div">
        <button className="hiremebutton">Hire Me</button>
      </div>
    </div>
  );
};

export default header;
