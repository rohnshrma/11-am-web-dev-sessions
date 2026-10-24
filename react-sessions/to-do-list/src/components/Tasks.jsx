// useContext lets us read the shared data without props
import { useContext } from "react";
import Task from "./Task";
import TaskContext from "../TaskContext";

const Tasks = () => {
  // take only "tasks" from the context value
  const { tasks } = useContext(TaskContext);

  // nothing added yet, so show a message
  if (tasks.length === 0) {
    return <h3>No Tasks Yet! Add one above.</h3>;
  } else {
    return (
      <ul className="tasks">
        {/* map makes one <Task> for every task in the array */}
        {tasks.map((task) => {
          // key must be unique, so React can track each item. We use the id
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    );
  }
};

export default Tasks;
