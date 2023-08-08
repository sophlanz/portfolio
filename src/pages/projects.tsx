import Image from "next/image";
import { useRef, useEffect } from "react";
import Navbar from "../components/nav";
import AllProjects from "@/components/projects";
export default function Projects(): JSX.Element {
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(projectsContainerRef.current);
    if (projectsContainerRef.current) {
      projectsContainerRef.current.addEventListener("wheel", (event) => {
        event.preventDefault();
        if (projectsContainerRef.current) {
          projectsContainerRef.current.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
          });
        }
      });
    }
  });
  return (
    <>
      <Navbar />
      <div className="projects">
        <div className="projectsContainer" ref={projectsContainerRef}>
          <h1 className="project">
            <span style={{ fontFamily: "Telegraf-UltraLight" }}>P</span>
            <span style={{ fontFamily: "Telegraf-Regular" }}>RO</span>
            <span style={{ fontFamily: "Telegraf-UltraBold" }}>JECTS</span>
          </h1>
          <AllProjects />
        </div>
      </div>
    </>
  );
}
