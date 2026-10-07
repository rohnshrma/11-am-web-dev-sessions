const Task = (props) => {
  const clickHandler = () => {
    props.onRemove(props.task.id);
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
