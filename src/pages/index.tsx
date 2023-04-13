import LoadingScreen from "../components/loading";
import Navbar from '../components/navbar';
import { useState } from 'react';
import Socials from '../components/socials'
export default function Home() {
  const [display,setDisplay] = useState<string>('none');

  return(
    <>   
      <LoadingScreen sendToParent={setDisplay}/>
      <Navbar style={display}/>
        <header className="firstLastName" style={{display:display}}>
            <h1 className="first" ><span data-text="S" style={{fontFamily:"Telegraf-UltraLight"}}>S</span><span style={{fontFamily:"Telegraf-Regular"}}>o</span><span style={{fontFamily:"Telegraf-UltraBold"}}>phia</span></h1>
            <div className="nameTitle">
                <h1 className="last"><span style={{fontFamily:"Telegraf-UltraBold"}}>Lanzen</span><span style={{fontFamily:"Telegraf-Regular"}}>do</span><span style={{fontFamily:"Telegraf-UltraLight"}}>rf</span></h1>
                <h3><span style={{fontFamily:"Telegraf-UltraLight"}}>So</span><span style={{fontFamily:"Telegraf-Regular"}}>ftwa</span><span style={{fontFamily:"Telegraf-UltraBold"}}>re Engineer</span></h3>
            </div>
        </header>
    </>
  )
}
