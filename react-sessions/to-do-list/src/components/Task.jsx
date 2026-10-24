import { useContext } from "react";
import TaskContext from "../TaskContext";

// props.task is the single task given by Tasks (the only thing passed by props)
const Task = (props) => {
  // delete function comes from context, no need to pass it down
  const { removeTaskHandler } = useContext(TaskContext);

  // runs when Delete is clicked
  const clickHandler = () => {
    // tell the context which task to remove, using its id
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
