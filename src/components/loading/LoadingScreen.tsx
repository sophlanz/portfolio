import React, { useState, useEffect } from "react";

export default function LoadingScreen(): JSX.Element {
  const words = [
    "hola",
    "bonjour",
    "olá",
    " Nǐn hǎo",
    "hello",
    "sa-wat-dee-ka",
    "Ciao",
    "Konnichiwa",
    "Guten Tag",
    "Namaste, Namaskar",
  ];
  const [word, setWord] = useState<string>();
  //get random word
  const getWords = () => {
    let count = 0;
    const interval = setInterval(() => {
      if (count > 10) {
        clearInterval(interval);
      }
      setWord(words[count]);
      count++;
    }, 150);
    return () => {
      clearInterval(interval);
    };
  };
  //display it
  useEffect(() => {
    const cleanup = getWords();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="loadingContainer">
      <h1 className="loaderHello">{word}</h1>
    </div>
  );
}
