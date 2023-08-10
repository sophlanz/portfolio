import LoadingScreen from "../components/loading";
import Navbar from "../components/nav";
import { useState, useEffect } from "react";
import HomepageHeader from "@/components/homepageHeader";

export default function Home(): JSX.Element {
  const [didInit, setDidInit] = useState<boolean>(false);
  useEffect(() => {
    const data = window.localStorage.getItem("didInit");
    if (!data) {
      let timeOut = setTimeout(() => {
        setDidInit(true);
      }, 1350);
      window.localStorage.setItem("didInit", "true");
      return () => {
        clearTimeout(timeOut);
      };
    } else {
      setDidInit(true);
    }
  }, []);
  return (
    <>
      {!didInit ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <HomepageHeader />
        </>
      )}
    </>
  );
}
