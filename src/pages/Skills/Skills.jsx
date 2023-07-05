import React from "react";
import "./Skills.scss";
import figmaIcon from "../../assets/icons/software/figma.png";
import gitIcon from "../../assets/icons/software/git.png";
import jiraIcon from "../../assets/icons/software/jira.png";

import htmlIcon from "../../assets/icons/front-end/html.png";
import cssIcon from "../../assets/icons/front-end/css.png";
import jsIcon from "../../assets/icons/front-end/js.png";
import reactIcon from "../../assets/icons/front-end/react.png";
import sassIcon from "../../assets/icons/front-end/sass.png";
import jsonIcon from "../../assets/icons/front-end/json.png";

import expressIcon from "../../assets/icons/back-end/express-js.png";
import nodeIcon from "../../assets/icons/back-end/nodejs.png";
import mysqlIcon from "../../assets/icons/back-end/mysql.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
        <h1>Skills</h1>
        <div className="skills__front-end">
          <h2>Front-end Skills</h2>
          <div className="skills__front-end--icons">
            <div className="item">
              <img src={htmlIcon} alt="" />
              <p>HTML</p>
            </div>
            <div>
              <img src={cssIcon} alt="" />
              <p>CSS</p>
            </div>
            <div>
              <img src={jsIcon} alt="" />
              <p>JavaScript</p>
            </div>
            <div>
              <img src={reactIcon} alt="" />
              <p>React</p>
            </div>
            <div>
              <img src={sassIcon} alt="" />
              <p>Sass</p>
            </div>
            <div>
              <img src={jsonIcon} alt="" />
              <p>Json</p>
            </div>
          </div>
        </div>
        <div className="skills__back-end">
          <h2>Back-end Skills</h2>
          <div className="skills__back-end--icons">
            <div>
              <img src={expressIcon} alt="" />
              <p>Express</p>
            </div>
            <div>
              <img src={nodeIcon} alt="" />
              <p>Node</p>
            </div>
            <div>
              <img src={mysqlIcon} alt="" />
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className="skills__software">
          <h2>Software Skills</h2>
          <div className="skills__software--icons">
            <div>
              <img src={figmaIcon} alt="" />
              <p>Figma</p>
            </div>
            <div>
              <img src={gitIcon} alt="" />
              <p>Git</p>
            </div>
            <div>
              <img src={jiraIcon} alt="" />
              <p>Jira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
