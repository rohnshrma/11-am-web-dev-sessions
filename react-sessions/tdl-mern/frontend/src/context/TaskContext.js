import { createContext, useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

const getErrorMessage = (err) => {
  return err.response?.data?.message || "something went wrong";
};

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setError("");
        setTasks(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Could not load tasks. Is the backend running on port : 5000 ?",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
};
