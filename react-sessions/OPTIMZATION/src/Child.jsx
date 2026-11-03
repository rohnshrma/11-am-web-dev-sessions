import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("child re rendered");
  return <button onClick={onClick}>Child button</button>;
});

export default Child;
