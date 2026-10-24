// createContext makes the "box" for shared data, useState holds the tasks
import { createContext, useState } from "react";

// Empty context for now. Components will read from it using useContext
const TaskContext = createContext();

// Provider component: it owns the tasks and shares them with everyone inside it
// "children" means whatever we wrap with <TaskProvider> (our whole App)
export const TaskProvider = ({ children }) => {
  // tasks starts as an empty array, setTasks is used to change it
  const [tasks, setTasks] = useState([]);

  // Called from AddTask with the new task object
  const addTaskHandler = (newTask) => {
    // just checking in console what we are getting, can remove later
    console.log(newTask);
    // prevTasks is the latest tasks array, safer than using "tasks" directly
    setTasks((prevTasks) => {
      // new task goes first, then all the old ones (so newest shows on top)
      return [newTask, ...prevTasks];
    });
  };

  // Called from Task with the id of the task to be deleted
  const removeTaskHandler = (id) => {
    setTasks((prevTasks) => {
      // filter keeps every task whose id is NOT the one we want to delete
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  return (
    // value is what all child components can access, here data + functions
    <TaskContext.Provider value={{ tasks, addTaskHandler, removeTaskHandler }}>
      {children}
    </TaskContext.Provider>
  );
};

// default export is the context itself, needed in useContext(TaskContext)
export default TaskContext;
