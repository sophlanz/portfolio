import React, {useState, useEffect} from 'react';
interface Props{
  sendToParent?: React.Dispatch<React.SetStateAction<string>>
}
export default function LoadingScreen (props:Props) {
  const words =['hello','hola','bonjour','olá'," Nǐn hǎo", 'sa-wat-dee-ka'];
  const [word,setWord] = useState<string>();
  const [display,setDisplay]=useState<string>('block')
//get random word
//display it
    useEffect(()=> {
      let count=0;
       const interval= setInterval(()=> {
          if(count >6) {
            clearInterval(interval)
            setDisplay('none');
            if(props.sendToParent){
              props.sendToParent(()=>'block')
            }
          }
            setWord(words[count])
            count++
        },1000)
    },[])
  return (
     <div className="loadingContainer" style={{display:display}}>
        <h1 className="loaderHello">{word}</h1>
     </div>
  );
};