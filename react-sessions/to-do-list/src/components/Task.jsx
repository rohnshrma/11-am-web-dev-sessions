import { useContext } from "react";
import TaskContext from "../TaskContext";

const Task = (props) => {
  const { removeTaskHandler } = useContext(TaskContext);

  const clickHandler = () => {
    removeTaskHandler(props.task.id);
  };

  return (
    <li className="task">
      <h4>{props.task.name}</h4>
      <p>{props.task.description}</p>
      <button onClick={clickHandler}>Delete</button>
    </li>
  );
};

export default Task;
