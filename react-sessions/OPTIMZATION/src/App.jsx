import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const App = () => {
  console.log("app re rendered");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
};

export default App;
