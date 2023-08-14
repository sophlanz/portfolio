import React from "react";
import ProjectContainer from "./ProjectContainer";

export default function AllProjects(): JSX.Element {
  const projectData = [
    {
      title: "AI Language Learning",
      githubLink: "https://github.com/sophlanz/translate-deepL",
      liveLink: "https://ai-lengua.vercel.app/",
      imgSrc: "/ImagesProjects/aiLengua.png",
      imgPosition: "top left",
    },
    {
      title: "Excursion E-Commerce",
      githubLink: "https://github.com/sophlanz/ecommerce-travel",
      liveLink: "https://ecommerce-travel.vercel.app/",
      imgSrc: "/ImagesProjects/excursionEscape.png",
      imgPosition: "top left",
    },
    {
      title: "CV Generator",
      githubLink: "https://github.com/sophlanz/cv-generator",
      liveLink: "https://cv-curator.up.railway.app/",
      imgSrc: "/ImagesProjects/cvCurator.png",
      imgPosition: "center",
    },
    {
      title: "Weather App",
      githubLink: "https://github.com/sophlanz/weatherApp",
      liveLink: "https://weather-app-sophlanz.netlify.app/",
      imgSrc: "/ImagesProjects/weatherApp.png",
      imgPosition: "center",
    },
    {
      title: "Restaurant Page",
      githubLink: "https://github.com/sophlanz/restaurant-page",
      liveLink: "https://sophlanz.github.io/restaurant-page/",
      imgSrc: "/ImagesProjects/restaurantPage.png",
      imgPosition: "center",
    },
    {
      title: "Etch A Sketch",
      githubLink: "https://github.com/sophlanz/etch-a-sketch",
      liveLink: "https://sophlanz.github.io/etch-a-sketch/",
      imgSrc: "/ImagesProjects/etchSketch.png",
      imgPosition: "center",
    },
  ];
  return (
    <>
      {projectData.map((project) => (
        <ProjectContainer
          key={`${project.title} + ${project.githubLink} + ${project.liveLink} + ${project.imgSrc} + ${project.imgPosition}`}
          title={project.title}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          imgSrc={project.imgSrc}
          imgPosition={project.imgPosition}
        />
      ))}
    </>
  );
}
