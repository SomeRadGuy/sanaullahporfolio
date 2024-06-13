import React from "react";
import Header from "./../header/header";
import "./info.css";
import InfoImage from "./../../images/rightimage.jpeg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const info = () => {
  return (
    <>
      <div className="infobody">
        <Header />
        <div className="info_div">
          <div className="Left_Info_Div">
            <div className="line b_line"></div>
            <h1>
              Im Sanaullah, a <br />
              Front-end Developer
            </h1>
            <p>I design web apps to turn your ideas into reality</p>
            <button className="get_in_touch_button">Get in touch</button>
            <div className="white_line line"></div>
            <div className="social_media_icons">
              <p>Lets Connet! ---</p>
              <FaGithub className="icons" />
              <FaLinkedin className="icons" />
              <FaTwitter className="icons" />
              <FaInstagram className="icons" />
            </div>
          </div>
          <div className="Right_Info_Div">
            <img
              src={InfoImage}
              alt="Sanaullah Yousaf"
              height={450}
              width={450}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default info;
