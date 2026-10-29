import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
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

  return (
    <TaskContext.Provider value={{ tasks, addTaskHandler, removeTaskHandler }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
