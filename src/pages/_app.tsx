import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar';
import Cursor from '../components/curosor';
import LoadingScreen  from '../components/loading';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Socials from '../components/socials';
import Head from 'next/head';
import '../styles/globals.scss';
import styles from '../styles/themes.module.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  //loading 
  const [loading, setLoading]= useState<boolean>(false);
  const router = useRouter();
   /*circle styles */
   const [left, setLeft] = useState<string>();
   const [right, setRight] = useState<string>();
   //theme
   const [theme,setTheme]=useState<string>('theme-light')
 const toggleTheme = () => {
  /* setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light'); */
  const body = document.querySelector('body');
  if (body && body.classList.contains('theme-light')) {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
  } else {
    if(body){
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
    }
  }
 }
   const setCursor = (e:React.MouseEvent) => {
     const x = e.pageX;
         const y = e.pageY;
         setLeft(`${x}px`)
         setRight(`${y}px`)
 };
 useEffect(()=> {
  const handleStart = () => {setLoading(true)};
  const handleComplete = ()=> {setLoading(false)};
  router.events.on('routeChangeStart',handleStart)
  router.events.on('routeChangeComplete', handleComplete)
  router.events.on('routeChangeError', handleComplete)
  const body = document.querySelector('body');
  if (body && !body.classList.contains('theme-light') &&!body.classList.contains('theme-dark') ) {
    body.classList.add('theme-light');
  }
 },[router]);
  return (
    <>
    {
      !loading ?
      <>
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1 ,  maximum-scale=1, user-scalable=0"/>
      </Head>
      <div className={'cursorContainer'}onMouseMove={(e)=> setCursor(e)}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Socials/>
      <Component {...pageProps} />
        {/*circle that will follow cursor */}
        <span className="cursorCircle" style={{left:`${left}`, top:`${right}`}}></span>
    </div>
    </>
    :
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1,  maximum-scale=1, user-scalable=0"/>
    </Head>
    <div className="cursorContainer"onMouseMove={(e)=> setCursor(e)}>
        <LoadingScreen/> 
    </div>
    </>
    }
   </>
  )
}
