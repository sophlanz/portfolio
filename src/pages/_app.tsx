import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar';
import Cursor from '../components/curosor';
/* import LoadingScreen  from '../components/loading'; */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }: AppProps) {
  //loading 
  const [loading, setLoading]= useState<boolean>(false);
  const router = useRouter();
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
 useEffect(()=> {
  const handleStart = () => {setLoading(true)};
  const handleComplete = ()=> {setLoading(false)};
  router.events.on('routeChangeStart',handleStart)
  router.events.on('routeChangeComplete', handleComplete)
  router.events.on('routeChangeError', handleComplete)

 },[router]);
 console.log(loading);
  return (
    <>
    {
      !loading ?
      <div className="cursorContainer"onMouseMove={(e)=> setCursor(e)}>
      <NavBar/>
      <Component {...pageProps} />
        {/*circle that will follow cursor */}
        <span className="cursorCircle" style={{left:`${left}`, top:`${right}`}}></span>
    </div>
    :
    <div className="cursorContainer"onMouseMove={(e)=> setCursor(e)}>
     {/*  <LoadingScreen/> */}
    </div>
    }
   </>
  )
}
