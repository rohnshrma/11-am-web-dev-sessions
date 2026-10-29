import { useContext } from "react";
import Task from "./Task";
import TaskContext from "../TaskContext";

const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h3>No Tasks Yet! Add one above.</h3>;
  } else {
    return (
      <ul className="tasks">
        {tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    );
  }
};

export default Tasks;
