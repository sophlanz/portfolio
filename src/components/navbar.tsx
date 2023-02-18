import React from 'react';
import Link from 'next/link';


export default function NavBar () {
  return (
    <nav>
      
        <ul>
            <div className="left">
                 <li>
                     <Link href='/'><span>S<span>o</span>phia</span><span>Lanzend<span>o</span>rf</span></Link>
                 </li>
            </div>
           <div className="right">
                 <li>
                      <Link href='/projects'>Projects</Link>
                  </li>
                  <li>
                      <Link href='/about'>About</Link>
                  </li>
                  <li>
                      <Link href='/contact'>Contact</Link>
                  </li>
           </div>
            
        </ul>
    </nav>
  );
};

