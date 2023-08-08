import React from "react";
import ProjectContainer from "./projectContainer";
interface Props {
  ref: React.MutableRefObject<HTMLDivElement>;
}
export default function Projects(props: Props): JSX.Element {
  return (
    <>
      <ProjectContainer
        title="AI Language Learning"
        githubLink="https://github.com/sophlanz/translate-deepL"
        liveLink="https://ai-lengua.vercel.app/"
        imgSrc="/ImagesProjects/aiLengua.png"
        imgPosition="top left"
        ref={props.ref}
      />
      <ProjectContainer
        title="Excursion E-Commerce"
        githubLink="https://github.com/sophlanz/ecommerce-travel"
        liveLink="https://ecommerce-travel.vercel.app/"
        imgSrc="/ImagesProjects/excursionEscape.png"
        imgPosition="top left"
        ref={props.ref}
      />
      <ProjectContainer
        title="CV Generator"
        githubLink="https://github.com/sophlanz/cv-generator"
        liveLink="https://cv-curator.up.railway.app/"
        imgSrc="/ImagesProjects/cvCurator.png"
        imgPosition="center"
        ref={props.ref}
      />
      <ProjectContainer
        title="Weather App"
        githubLink="https://github.com/sophlanz/weatherApp"
        liveLink="https://weather-app-sophlanz.netlify.app/"
        imgSrc="/ImagesProjects/weatherApp.png"
        imgPosition="center"
        ref={props.ref}
      />
      <ProjectContainer
        title="Restaurant Page"
        githubLink="https://github.com/sophlanz/restaurant-page"
        liveLink="https://sophlanz.github.io/restaurant-page/"
        imgSrc="/ImagesProjects/restaurantPage.png"
        imgPosition="center"
        ref={props.ref}
      />
      <ProjectContainer
        title="Etch A Sketch"
        githubLink="https://github.com/sophlanz/etch-a-sketch"
        liveLink="https://sophlanz.github.io/etch-a-sketch/"
        imgSrc="/ImagesProjects/etchSketch.png"
        imgPosition="center"
        ref={props.ref}
      />
    </>
  );
}
