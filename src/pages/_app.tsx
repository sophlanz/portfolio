import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar';
import { useState } from 'react';
export default function App({ Component, pageProps }: AppProps) {
     /*circle styles */
     const [left, setLeft] = useState<string>();
     const [right, setRight] = useState<string>();
   
     const setCursor = (e:React.MouseEvent) => {
       const x = e.pageX;
           const y = e.pageY;
           setLeft(`${x}px`)
           console.log(left)
           setRight(`${y}px`)
           console.log(right)
   };

  return (
    <div  className="cursorContainer"onMouseMove={(e)=> setCursor(e)}>
    
        {/*circle that will follow cursor */}
        <span className="cursorCircle" style={{left:`${left}`, top:`${right}`}}></span>
      <NavBar/>
      
      <Component {...pageProps} />
      
   
    
    </div>
  )
}
