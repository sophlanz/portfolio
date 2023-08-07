import LoadingScreen from "../components/loading";
import Navbar from "../components/nav";
import { useState, useEffect } from "react";

export default function Home(): JSX.Element {
  const [didInit, setDidInit] = useState<boolean>(false);
  useEffect(() => {
    const data = window.localStorage.getItem("didInit");
    if (!data) {
      window.localStorage.setItem("didInit", "true");
      let timeOut = setTimeout(() => {
        setDidInit(true);
      }, 5000);
      return () => {
        clearTimeout(timeOut);
      };
    } else {
      setDidInit(true);
    }
  }, []);
  console.log(didInit);
  return (
    <>
      {!didInit ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <header className="firstLastName">
            <h1 className="first">
              <span data-text="S" style={{ fontFamily: "Telegraf-UltraLight" }}>
                S
              </span>
              <span style={{ fontFamily: "Telegraf-Regular" }}>o</span>
              <span style={{ fontFamily: "Telegraf-UltraBold" }}>phia</span>
            </h1>
            <div className="nameTitle">
              <h1 className="last">
                <span style={{ fontFamily: "Telegraf-UltraBold" }}>Lanzen</span>
                <span style={{ fontFamily: "Telegraf-Regular" }}>do</span>
                <span style={{ fontFamily: "Telegraf-UltraLight" }}>rf</span>
              </h1>
              <h3>
                <span style={{ fontFamily: "Telegraf-UltraLight" }}>So</span>
                <span style={{ fontFamily: "Telegraf-Regular" }}>ftwa</span>
                <span style={{ fontFamily: "Telegraf-UltraBold" }}>
                  re Engineer
                </span>
              </h3>
            </div>
          </header>
        </>
      )}
    </>
  );
}
