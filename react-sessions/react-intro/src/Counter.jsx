import { useState } from "react";

const Counter = () => {
  console.log("Counter rendered");

  var [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1); // new value for state
  };

  console.log(count);
  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={increaseHandler}>INCREASE</button>
    </div>
  );
};

export default Counter;
