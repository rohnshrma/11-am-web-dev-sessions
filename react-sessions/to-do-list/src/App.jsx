import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (newTask) => {
    console.log(newTask);
    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
    });
  };

  const removeTaskHandler = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  console.log("Tasks", tasks);

  return (
    <div className="app">
      <Header />

      <AddTask onAdd={addTaskHandler} />

      <Tasks onRemove={removeTaskHandler} tasks={tasks} />
    </div>
  );
};

export default App;
