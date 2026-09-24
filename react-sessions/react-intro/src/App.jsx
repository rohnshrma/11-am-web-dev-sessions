// components : javascript functions returning html which can include js too

import Counter from "./Counter";

const App = () => {
  console.log("App rendered");

  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
