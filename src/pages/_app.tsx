import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { Socials } from "../components/socials";
import Head from "next/head";
import "../styles/globals.scss";
import { ShadowCursor } from "../components/cursor";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [left, setLeft] = useState<string>();
  const [right, setRight] = useState<string>();
  const setCursor = (e: React.MouseEvent) => {
    const x = e.pageX;
    const y = e.pageY;
    setLeft(`${x}px`);
    setRight(`${y}px`);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (
      body &&
      !body.classList.contains("theme-light") &&
      !body.classList.contains("theme-dark")
    ) {
      body.classList.add("theme-light");
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 ,  maximum-scale=1, user-scalable=0"
        />
      </Head>
      <div className={"cursorContainer"} onMouseMove={(e) => setCursor(e)}>
        <Socials />
        <Component {...pageProps} />
        {/*circle that will follow cursor */}
        <ShadowCursor leftPx={left} rightPx={right} />
      </div>
    </>
  );
}
