import Task from "./Task";

const Tasks = (props) => {
  if (props.tasks.length === 0) {
    return <h3>No Tasks Yet! Add one above.</h3>;
  } else {
    return (
      <ul className="tasks">
        {props.tasks.map((task) => {
          return <Task onRemove={props.onRemove} task={task} key={task.id} />;
        })}
      </ul>
    );
  }
};

export default Tasks;
