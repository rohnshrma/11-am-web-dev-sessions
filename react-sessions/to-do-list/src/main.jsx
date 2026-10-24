// createRoot connects React to the plain HTML page
import { createRoot } from "react-dom/client";
import App from "./App";
// Provider that shares the tasks with the whole app
import { TaskProvider } from "./TaskContext";

// Find <div id="root"> in index.html and render our app inside it
createRoot(document.getElementById("root")).render(
  // Wrapping App here means every component inside can use TaskContext
  <TaskProvider>
    <App />
  </TaskProvider>,
);
