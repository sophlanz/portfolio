import React from "react";
import Image from "next/image";
interface Props {
  githubLink: string;
  liveLink: string;
}
export default function ProjectSVG(props: Props): JSX.Element {
  return (
    <div className="svgs">
      <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
        <Image height={40} width={40} src="/svgs/github.svg" alt="github" />
      </a>
      <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
        <Image height={40} width={40} src="/svgs/link.svg" alt="link" />
      </a>
    </div>
  );
}
