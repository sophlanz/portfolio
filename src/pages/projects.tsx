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
        <div className="projectsContainer" ref={projectsContainerRef}>
        <h1 className="project"><span style={{fontFamily:"Telegraf-UltraLight"}}>P</span><span style={{fontFamily:"Telegraf-Regular"}}>RO</span><span style={{fontFamily:"Telegraf-UltraBold"}}>JECTS</span></h1>
            <div className="projectContainer">
                    <h2>AI Language Learning</h2>
                    <div className="imgContainer">
                         <Image
                         src="/ImagesProjects/aiLengua.png"
                         alt="AI langauge learning app"
                         width={450}
                         height={570}
                         style={{objectPosition:"top left"}}
                          />
                     </div>
                     <div className="svgs">
                          <a href="https://github.com/sophlanz/translate-deepL" target="_blank" rel="noopener noreferrer"><img src='/svgs/github.svg' alt="github"/></a>
                          <a href="https://ai-lengua.vercel.app/" target="_blank" rel="noopener noreferrer"><img src='/svgs/link.svg' alt="link"/></a>
                          </div>
            </div>
            <div className="projectContainer">
                    <h2>Excursion E-Commerce</h2>
                    <div className="imgContainer">
                         <Image
                         src="/ImagesProjects/excursionEscape.png"
                         alt="Excursion escape app"
                         width={450}
                         height={570}
                         style={{objectPosition:"top left"}}
                          />
                          
                     </div>
                     <div className="svgs">
                          <a href="https://github.com/sophlanz/ecommerce-travel"target="_blank" rel="noopener noreferrer"><img src='/svgs/github.svg' alt="github"/></a>
                          <a href="https://ecommerce-travel.vercel.app/" target="_blank" rel="noopener noreferrer"><img src='/svgs/link.svg' alt="link"/></a>
                          </div>
            </div>
            <div className="projectContainer">
                    <h2>CV Generator</h2>
                    <div className="imgContainer">
                        <Image
                        src="/ImagesProjects/cvCurator.png"
                        alt="CV generator App"
                        width={450}
                        height={570}
                     />
                     </div>
                     <div className="svgs">
                          <a href="https://github.com/sophlanz/cv-generator" target="_blank" rel="noopener noreferrer"><img src='/svgs/github.svg' alt="github"/></a>
                          <a href="https://cv-curator.up.railway.app/" target="_blank" rel="noopener noreferrer"><img src='/svgs/link.svg' alt="link"/></a>
                          </div>
            </div>
            <div className="projectContainer">
                    <h2>Weather App</h2>
                    <div className="imgContainer">
                        <Image
                        src="/ImagesProjects/weatherApp.png"
                        alt="Weather App"
                        width={450}
                        height={570}
                         />
                     </div>
                     <div className="svgs">
                          <a href="https://github.com/sophlanz/weatherApp" target="_blank" rel="noopener noreferrer"><img src='/svgs/github.svg' alt="github"/></a>
                          <a href="https://weather-app-sophlanz.netlify.app/" target="_blank" rel="noopener noreferrer"><img src='/svgs/link.svg' alt="link"/></a>
                          </div>
            </div>
            <div className="projectContainer">
                    <h2>Restaurant Page</h2>
                    <div className="imgContainer">
                        <Image
                        src="/ImagesProjects/restaurantPage.png"
                        alt="Restaurant App"
                        width={450}
                        height={570}
                         />
                     </div>
                     <div className="svgs">
                          <a href="https://github.com/sophlanz/restaurant-page" target="_blank" rel="noopener noreferrer"><img src='/svgs/github.svg' alt="github"/></a>
                          <a href="https://sophlanz.github.io/restaurant-page/" target="_blank" rel="noopener noreferrer"><img src='/svgs/link.svg' alt="link"/></a>
                          </div>
            </div>
            <div className="projectContainer">
                    <h2>Etch A Sketch</h2>
                    <div className="imgContainer">
                        <Image
                        src="/ImagesProjects/etchSketch.png"
                        alt="Etch A Sketch App"
                        width={450}
                        height={570}
                         />
                    </div>
                    <div className="svgs">
                          <a href="https://github.com/sophlanz/etch-a-sketch" target="_blank" rel="noopener noreferrer"><img src='/svgs/github.svg' alt="github"/></a>
                          <a href="https://sophlanz.github.io/etch-a-sketch/" target="_blank" rel="noopener noreferrer"><img src='/svgs/link.svg' alt="link"/></a>
                          </div>
            </div>
        </div>
        </div>
        
    )
}