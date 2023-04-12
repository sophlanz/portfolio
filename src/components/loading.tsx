import React, {useState, useEffect} from 'react';

export default function LoadingScreen () {
  const words =['hello','hola','bonjour','olá'," Nǐn hǎo", 'sa-wat-dee-ka'];
  const [word,setWord] = useState<string>();
//get random word
//display it
    useEffect(()=> {
        setInterval(()=> {
            const randomWord = words[Math.floor(Math.random()*words.length)];
            setWord(randomWord)
        },1000)
    },[])
  return (
     <div className='loadingContainer'>
        <h1 style={{color:'white'}}>{word}</h1>
     </div>
  );
};