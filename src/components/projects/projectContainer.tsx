import React from "react";
import ProjectImage from "./projectImage";
import ProjectSVG from "./projectSvg";
interface Props {
  title: string;
  githubLink: string;
  liveLink: string;
  imgSrc: string;
  imgPosition: string;
}
export default function ProjectContainer(props: Props) {
  return (
    <div className="projectContainer">
      <h2>{props.title}</h2>
      <ProjectImage
        imgSrc={props.imgSrc}
        imgPosition={props.imgPosition}
        githubLink={props.githubLink}
      />
      <ProjectSVG githubLink={props.githubLink} liveLink={props.liveLink} />
    </div>
  );
}
