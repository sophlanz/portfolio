import React from "react";
export default function NavBar(): JSX.Element {
  return (
    <nav>
      {/*theme toggle */}
      <input type="checkbox" id="toggleTheme" />
      <label className="themeToggle" htmlFor="toggleTheme" />
    </nav>
  );
}
