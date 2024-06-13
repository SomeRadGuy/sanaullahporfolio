import React from "react";
import "./about.css";
import Sanaullahpicture from "./../../images/sanaullah.png";

const about = () => {
  return (
    <>
      <div className="about_me_body">
        <div className="left_about_me_div">
          <img
            src={Sanaullahpicture}
            alt="Muhammad Sanaullah"
            height={450}
            className="sanaullah_picture"
          />
        </div>
        <div className="right_about_me_div">
          <h3>About Me</h3>
          <h1>
            Hello There! My Name is{" "}
            <span className="sanaullah">Sanaullah.</span>
          </h1>
          <p className="quote">
            "Do not go where the path may lead, go instead where there is no
            path and leave a trail." — Ralph Waldo Emerson
          </p>
          <p className="mainyap">
            As a dedicated student, I am deeply committed to my academic
            pursuits and personal growth. My journey through education is marked
            by a passion for learning and a determination to excel. I engage
            actively in my studies, seeking to understand and master new
            concepts, and I value the knowledge and experiences that each
            subject brings. Beyond the classroom, I participate in various
            extracurricular activities, which help me develop a well-rounded
            skill set and foster a sense of community. My goal is to apply the
            lessons I learn to real-world situations, preparing myself for
            future challenges and opportunities.
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
