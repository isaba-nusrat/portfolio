import React from "react";
import project1 from "../../assets/images/projects/project1.png";
import project2 from "../../assets/images/projects/project2.png";
import "./Projects.scss";

function Projects() {
  const projects = [
    {
      name: "Apex Legends Bot Brawl",
      description:
        "Industry hackathon team project for EA. Winning team of the hackathon.",
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
            </a>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;