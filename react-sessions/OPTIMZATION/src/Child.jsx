import React from "react";

const Child = React.memo(({ name, count }) => {
  console.log("child re rendered");
  return (
    <div className="user">
      <h2>{name}</h2>
      <h3>{count}</h3>
    </div>
  );
});

export default Child;
