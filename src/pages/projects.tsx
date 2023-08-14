import Image from "next/image";
import { useRef, useEffect } from "react";
import { Navbar } from "../components/nav";
import { AllProjects } from "@/components/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
export default function Projects(): JSX.Element {
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
          <ProjectHeader />
          <AllProjects />
        </div>
      </div>
    </>
  );
}
