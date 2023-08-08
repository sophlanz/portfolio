import Image from "next/image";
import { useState, useEffect } from "react";
import GithubSocial from "./githubSocial";
import LinkedinSocial from "./likedinSocial";
export default function Socials(): JSX.Element {
  const [top, setTop] = useState<string>("50%");
  //adjust icon location on projects page, to not cover projects
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.pathname == "/projects"
    ) {
      setTop("25%");
    }
  }, []);
  return (
    <div className="socials" style={{ top: top }}>
      <GithubSocial />
      <LinkedinSocial />
    </div>
  );
}
