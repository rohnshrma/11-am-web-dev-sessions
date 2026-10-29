import { useEffect, useState } from "react";

const App = () => {
  console.log("App rendered");

  const [theme, setTheme] = useState("light");
  const [txt, setTxt] = useState("");

  const properties = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#faf" : "#000",
    color: theme === "light" ? "#333" : "#fff",
  };

  // useEffect(()=>{})
  // no dependency array :   the callback in useEffect reruns every time the component re-renders due to state changes
  // useEffect(() => {
  //   async function fetchProfile() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users",
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   }

  //   fetchProfile();
  // });

  //  useEffect(()=>{} , [])
  // empty dependency array : the callback runs only once the component mounts
  // useEffect(() => {
  //   async function fetchProfile() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users",
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   }

  //   fetchProfile();
  // }, []);

  // useEffect(()=>{} , [ dependency, ... ])
  // with dependency : the callback runs on mount and every time the dependency changes

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      console.log(data);
    }

    fetchProfile();
  }, [txt]);

  return (
    <div style={properties}>
      <h1>{txt}</h1>
      {/* <Counter /> */}

      <input
        type="text"
        onChange={(e) => {
          setTxt(e.target.value);
        }}
      />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default App;
