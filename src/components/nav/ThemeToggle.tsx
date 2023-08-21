import React from "react";
export default function ThemeToggle(): JSX.Element {
  const toggleTheme = () => {
    /* setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light'); */
    const body = document.querySelector("body");
    if (body && body.classList.contains("theme-light")) {
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
    } else {
      if (body) {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
      }
    }
  };
  return (
    <>
      <input type="checkbox" id="toggleTheme" onChange={toggleTheme} />
      <label className="themeToggle" htmlFor="toggleTheme" />
    </>
  );
}
