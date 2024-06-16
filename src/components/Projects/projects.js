import React from "react";
import "./projects.css";
import Quran from "./../../images/quran.png";
import Snackbar from "./../../images/snackbar.png";
import Storious from "./../../images/storius.png";
import Eja from "./../../images/eja.png";
import Devfolio from "./../../images/devfolio.png";
import Sastaticket from "./../../images/sastaticket.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const header = () => {
  return (
    <>
      <div className="projects_div">
        <div className="projects_headings_div">
          <h1>Projects</h1>
        </div>

        <div className="top_divs">
          <div className="top_left_project_div individual_project_div">
            <div className="pictures">
              <img src={Quran} alt="Quran" height={150} width={250} />
            </div>
            <div>
              <h3>The Holy Quran</h3>
            </div>
            <div className="individual_projects_icons">
              <FaGithub className="project_icon" />
              <FaLinkedin className="project_icon" />
              <FaInstagram className="project_icon" />
            </div>
          </div>
          <div className="top_middle_project_div individual_project_div">
            <div className="pictures">
              <img src={Snackbar} alt="SnackBar" height={150} width={250} />
            </div>
            <div>
              <h3>SnackBar Content</h3>
            </div>
            <div className="individual_projects_icons">
              <FaGithub className="project_icon" />
              <FaLinkedin className="project_icon" />
              <FaInstagram className="project_icon" />
            </div>
          </div>
          <div className="top_right_project_div individual_project_div">
            <div className="pictures">
              <img src={Storious} alt="Storious" height={150} width={250} />
            </div>
            <div>
              <h3>Route App</h3>
              <div className="individual_projects_icons">
                <FaGithub className="project_icon" />
                <FaLinkedin className="project_icon" />
                <FaInstagram className="project_icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_divs">
          <div className="bottom_left_project_div individual_project_div">
            <div className="pictures">
              <img src={Eja} alt="Quran" height={150} width={250} />
            </div>
            <div>
              <h3>Transportation App</h3>
            </div>
            <div className="individual_projects_icons">
              <FaGithub className="project_icon" />
              <FaLinkedin className="project_icon" />
              <FaInstagram className="project_icon" />
            </div>
          </div>
          <div className="bottom_middle_project_div individual_project_div">
            <div className="pictures">
              <img src={Devfolio} alt="SnackBar" height={150} width={250} />
            </div>
            <div>
              <h3>Personal Portfolio</h3>
            </div>
            <div className="individual_projects_icons">
              <FaGithub className="project_icon" />
              <FaLinkedin className="project_icon" />
              <FaInstagram className="project_icon" />
            </div>
          </div>
          <div className="bottom_right_project_div individual_project_div">
            <div className="pictures">
              <img src={Sastaticket} alt="Storious" height={150} width={250} />
            </div>
            <div>
              <h3>Ticketing App</h3>
              <div className="individual_projects_icons">
                <FaGithub className="project_icon" />
                <FaLinkedin className="project_icon" />
                <FaInstagram className="project_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
