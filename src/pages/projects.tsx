import Image from 'next/image';
import {useRef,useEffect} from 'react'
export default function Projects() {
    const projectsContainerRef = useRef<HTMLDivElement>(null);
    useEffect(()=> {
        if(projectsContainerRef.current){
            projectsContainerRef.current.addEventListener("wheel",(event)=> {
                event.preventDefault();
                if(projectsContainerRef.current) {
                    projectsContainerRef.current.scrollBy({
                        left: event.deltaY < 0 ? -30 : 30,
                    })
                }
              
            } )
        }
      
    })
    return (
        
        <div className="projects">
        <h1 className="project">  PROJECTS</h1>
        <div className="projectsContainer" ref={projectsContainerRef}>
            <div className="projectContainer">
                    <h2>Excursion Escape</h2>
                    <Image
                    src="/ImagesProjects/excursionEscape.png"
                    alt="Picture of the author"
                    width={450}
                    height={570}
                     />
            </div>
            <div className="projectContainer">
                    <h2>CV-Generator</h2>
                    <Image
                    src="/ImagesProjects/cvCurator.png"
                    alt="Picture of the author"
                    width={450}
                    height={570}
                     />
            </div>
            <div className="projectContainer">
                    <h2>Weather App</h2>
                    <Image
                    src="/ImagesProjects/weatherApp.png"
                    alt="Picture of the author"
                    width={450}
                    height={570}
                     />
            </div>
            <div className="projectContainer">
                    <h2>Restaurant Page</h2>
                    <Image
                    src="/ImagesProjects/restaurantPage.png"
                    alt="Picture of the author"
                    width={450}
                    height={570}
                     />
            </div>
            <div className="projectContainer">
                    <h2>Etch-A-Sketch</h2>
                    <Image
                    src="/ImagesProjects/etchSketch.png"
                    alt="Picture of the author"
                    width={450}
                    height={570}
                     />
            </div>
        </div>
        </div>
        
    )
}