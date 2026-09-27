// component
// a javascript function returning html

import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

function App() {
  console.log("app rerendered");

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);

  return (
    <div>
      <Header text="Taskster" theme={theme} />

      <button onClick={themeToggler} className="theme-toggler">
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default App;
