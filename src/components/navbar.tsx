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
                      <Link href='/projects'><span>P</span>R<span>O</span>J<span>E</span>C<span>T</span>S</Link>
                  </li>
                  <li>
                      <Link href='/about'>A<span>B</span>O<span>U</span>T</Link>
                  </li>
                  <li>
                      <Link href='/contact'><span>C</span>O<span>N</span>T<span>A</span>C<span>T</span></Link>
                  </li>
           </div>
            
        </ul>
    </nav>
  );
};

