import React from "react";
import "./Navigation.scss";
import githubIcon from "../../assets/icons/github.png";
import linkedInIcon from "../../assets/icons/linkedIn.png";

function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav">
      <div className="nav__pages">
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
        </ul>
      </div>
      <div className="nav__socials">
        <div className="nav__linkedIn">
          <a href="https://www.linkedin.com/in/isaba-nusrat/">
            <img src={linkedInIcon} alt="" />
          </a>
        </div>
        <div className="nav__github">
          <a href="https://github.com/isaba-nusrat">
            <img src={githubIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
