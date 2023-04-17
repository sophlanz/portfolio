import React, {useState, useEffect} from 'react';
interface Props{
  sendToParent?: React.Dispatch<React.SetStateAction<string>>
}
export default function LoadingScreen (props:Props): JSX.Element {
  const words =['hola','bonjour','olá'," Nǐn hǎo", 'hello','sa-wat-dee-ka',"Ciao","Konnichiwa", 'Guten Tag','Namaste, Namaskar'];
  const [word,setWord] = useState<string>();
  const [display,setDisplay]=useState<string>('block')
//get random word
//display it
    useEffect(()=> {
      let count=0;
       const interval= setInterval(()=> {
          if(count >10) {
            clearInterval(interval)
            setDisplay('none');
            if(props.sendToParent){
              props.sendToParent(()=>'flex')
            }
          }
            setWord(words[count])
            count++
        },150)
    },[])
  return (
     <div className="loadingContainer" style={{display:display}}>
        <h1 className="loaderHello">{word}</h1>
     </div>
  );
};