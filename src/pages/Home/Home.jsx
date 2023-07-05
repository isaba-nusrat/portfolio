import React from "react";
import "./Home.scss";
import Navigation from "../../components/Navigation/Navigation";
import avatar from "../../assets/images/avatar1.svg";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../../components/Footer/Footer";

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
            <p>
              A full-stack web developer who loves creating beautiful websites.
              When I'm not coding, you can find me engrossed in books or
              enjoying anime. And yes, I'm addicted to coffee!
            </p>
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
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
