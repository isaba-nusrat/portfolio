import React from "react";
import "./Home.scss";
import Navigation from "../../components/Navigation/Navigation";
import avatar from "../../assets/images/avatar1.svg";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div>
      <div id="home" className="home">
        <Navigation />
        <div className="home__container">
          <div className="home__intro">
            <h1>
              Hello, I'm <span>Isaba</span>!
            </h1>
            <p>Front-end web developer.</p>
          </div>
          <div className="home__avatar">
            <img src={avatar} alt="" className="avatar-image" />
          </div>
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default Home;
