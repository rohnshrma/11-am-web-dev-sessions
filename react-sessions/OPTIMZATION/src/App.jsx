import React, { useMemo, useState } from "react";
// import Child from "./Child";

const App = () => {
  console.log("app re rendered");
  // const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const result = useMemo(() => {
    console.log("Calculation running");
    return number * 100;
  }, [number]);

  return (
    <div>
      <h2>Result : {result}</h2>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
};

export default App;
