import React from "react";
import Menu from "./menu";
import ThemeToggle from "./themeToggle";
interface Props {
  style?: string;
  posts?: {
    frontmatter: object;
    markdownBody: string;
    slug: String;
  }[];
}
export default function NavBar(props: Props): JSX.Element {
  console.log(props.posts);
  const display = props.style ? props.style : "flex";
  return (
    <nav style={{ display: display }}>
      <ThemeToggle />
      <Menu />
    </nav>
  );
}
