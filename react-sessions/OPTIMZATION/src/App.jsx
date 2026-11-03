import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  console.log("app re rendered");
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const properties = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
  };

  return (
    <div>
      <Child name={"john doe"} count={count} />
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? "dark" : "light"}
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default App;
