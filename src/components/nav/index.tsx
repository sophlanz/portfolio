import React from "react";
import Menu from "./menu";
import ThemeToggle from "./themeToggle";
interface Props {
  style?: string;
}
export default function NavBar(props: Props): JSX.Element {
  const display = props.style ? props.style : "flex";
  return (
    <nav style={{ display: display }}>
      <ThemeToggle />
      <Menu />
    </nav>
  );
}