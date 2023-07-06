import React from "react";
import project1 from "../../assets/images/projects/project1.png";
import project2 from "../../assets/images/projects/project2.png";
import project3 from "../../assets/images/projects/project3.png";
import "./Projects.scss";

function Projects() {
  const projects = [
    {
      name: "Apex Legends Bot Brawl",
      description:
        "Industry hackathon TEAM PROJECT for EA. This project won the hackathon. Click to see my contribution to this project.",
      image: project1,
      repoUrl: "https://github.com/isaba-nusrat/brainstation-ea-project",
    },
    {
      name: "Anime Search Engine",
      description:
        "A simple anime search website. Users can search anime and see details.",
      image: project2,
      repoUrl: "https://github.com/isaba-nusrat/anime-search-engine",
    },
    {
      name: "Solar System",
      description: "A solar system created wth HTML and CSS animation.",
      image: project3,
      repoUrl: "https://github.com/isaba-nusrat/solar-system",
    },
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                style={{ width: "100%", height: "auto" }}
                className="project-image"
              />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
