// A component is just a JavaScript function that hands back some HTML.
// Think of it as your own custom LEGO brick: build it once, use it anywhere.

// Bring in the Header brick (the title bar at the top).
import Header from "./components/Header";
// Bring in the stylesheet so our colours and layout apply.
import "./App.css";
// useState is a React tool that gives a component a memory.
// Normal variables get wiped every time the screen refreshes; state doesn't.
import { useState } from "react";
// Bring in the Form brick (where you type a task).
import Form from "./components/Form";
// Bring in the Profiles brick (the list of tasks).
import Profiles from "./components/Profiles";

// This is the main component. Everything on the page sits inside it.
function App() {
  // Memory #1: our list of tasks. It starts as an empty list [].
  // "profiles" = what we currently remember.
  // "setProfiles" = the ONLY proper way to change that memory.
  // When we change it, React redraws the screen automatically.
  const [profiles, setProfiles] = useState([]);

  // This function adds a new task to the list.
  // The Form will call it when you press Submit, and pass in the new task.
  const addProfileHandler = (newProfile) => {
    // "prevProfiles" is the list exactly as it was a moment ago.
    // Using it is the safe way to update when the new value depends on the old one.
    setProfiles((prevProfiles) => {
      // Just a note-to-self printed in the browser console (F12) for learning.
      console.log("prev Profiles", prevProfiles);
      // Build a brand new list: the new task first, then all the old ones.
      // The "..." spreads the old items out one by one into the new list.
      return [newProfile, ...prevProfiles];
    });
  };

  // This function throws away one task, found by its unique id.
  const removeProfileHandler = (id) => {
    setProfiles((prevProfiles) => {
      console.log("prev Profiles", prevProfiles);
      // filter keeps only the tasks that pass the test.
      // Test: "is this task's id different from the one we want gone?"
      // So everything stays except the matching task.
      return prevProfiles.filter((profile) => profile.id !== id);
    });
  };

  // This prints every time App redraws, so you can see React re-running the function.
  console.log("app rerendered");

  // Memory #2: is the app in "light" or "dark" mode? Starts as light.
  const [theme, setTheme] = useState("light");

  // Flips the theme: if it's light make it dark, otherwise make it light.
  // (a ? b : c is a tiny if/else: "if a then b, otherwise c")
  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // Print the current theme in the console.
  console.log(theme);

  // Whatever we "return" is what shows up on the screen.
  // This HTML-looking code is called JSX.
  return (
    <div>
      {/* Header brick. text="Taskster" and theme={theme} are "props":
          little notes we pass down to the child, like handing over instructions. */}
      <Header text="Taskster" theme={theme} />

      {/* Form brick. We give it our add function under the name onAdd,
          so the form can send a new task UP to us when submitted. */}
      <Form onAdd={addProfileHandler} />

      {/* Profiles brick. It gets the task list to show and the remove function
          so each task's button can ask us to delete it. */}
      <Profiles onRemove={removeProfileHandler} profiles={profiles} />

      {/* Button that switches light/dark. onClick = "when clicked, run this function".
          The label shows the mode you'd switch TO. */}
      <button onClick={themeToggler} className="theme-toggler">
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

// Make App available so main.jsx can import it.
export default App;
