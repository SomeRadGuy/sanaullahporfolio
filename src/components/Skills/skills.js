import React from "react";
import "./skills.css";

const header = () => {
  return (
    <>
      <div className="skills_main_div">
        <div className="skills_header_div">
          <h1>Skills</h1>
        </div>

        <div className="skills_top_row skill_rows">
          <div className="one_skill_div">
            <h4>Photoshop - 100%</h4>
            <div className="skills_bar hundred_bar"></div>
          </div>
          <div className="one_skill_div">
            <h4>Illustrator - 100%</h4>
            <div className="skills_bar hundred_bar"></div>
          </div>
        </div>

        <div className="skills_middle_row skill_rows">
          <div className="one_skill_div">
            <h4>Python - 70%</h4>
            <div className="skills_bar seventy_bar"></div>
          </div>
          <div className="one_skill_div">
            <h4>React.js - 50%</h4>
            <div className="skills_bar fifty_bar"></div>
          </div>
        </div>

        <div className="skills_bottom_row skill_rows">
          <div className="one_skill_div">
            <h4>HTML 5 - 70%</h4>
            <div className="skills_bar seventy_bar"></div>
          </div>
          <div className="one_skill_div">
            <h4>CSS 3 - 70%</h4>
            <div className="skills_bar seventy_bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
