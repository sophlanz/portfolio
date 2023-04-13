import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Socials () {
    const[top,setTop]=useState<string>('50%');
    
    useEffect(()=> {
        if(typeof window !== "undefined" && window.location.pathname=="/projects") {
            setTop("25%")
        }
    },[])
  return (
   <div className="socials" style={{top:top}}> 
        <a href='https://github.com/sophlanz' target="_blank" rel="noopener noreferrer">
             <Image src='/svgs/githubSocials.svg' height={20} width={20}alt="github"/>
         </a>
         <a href='https://www.linkedin.com/in/sophialanzendorf/' target="_blank" rel="noopener noreferrer">
             <Image src='/svgs/linkedin.svg' height={20} width={20}alt="linkedin"/>
         </a>
   </div>
  );
};