import Image from 'next/image';
export default function Socials () {
  return (
   <div className="socials"> 
        <a href='https://github.com/sophlanz' target="_blank" rel="noopener noreferrer">
             <Image src='/svgs/githubSocials.svg' height={20} width={20}alt="github"/>
         </a>
         <a href='https://www.linkedin.com/in/sophialanzendorf/' target="_blank" rel="noopener noreferrer">
             <Image src='/svgs/linkedin.svg' height={20} width={20}alt="linkedin"/>
         </a>
   </div>
  );
};