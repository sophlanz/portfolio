import React from "react";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
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
