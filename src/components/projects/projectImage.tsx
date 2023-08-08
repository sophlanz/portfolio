import React from "react";
import Image from "next/image";
interface Props {
  githubLink: string;
  imgSrc: string;
  imgPosition: string;
}
export default function ProjectImage(props: Props): JSX.Element {
  return (
    <div className="imgContainer">
      <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
        <Image
          src={props.imgSrc}
          alt="Excursion escape app"
          width={450}
          height={570}
          style={{ objectPosition: props.imgPosition }}
        />
      </a>
    </div>
  );
}
