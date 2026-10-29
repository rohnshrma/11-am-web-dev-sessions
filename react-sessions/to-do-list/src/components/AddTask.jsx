import { useContext, useReducer } from "react";

import { v4 as uuidv4 } from "uuid";
import TaskContext from "../TaskContext";

const initialState = {
  name: "",
  description: "",
};

const formReducer = (state, action) => {
  if (action.type === "name" || action.type === "description") {
    return {
      ...state,
      [action.type]: action.payload,
    };
  }

  if (action.type === "reset") {
    return initialState;
  }

  return initialState;
};

const AddTask = () => {
  const { addTaskHandler } = useContext(TaskContext);

  const [formData, dispatch] = useReducer(formReducer, initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    dispatch({ type: name, payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addTaskHandler({
      ...formData,
      id: uuidv4(),
    });

    dispatch({ type: "reset" });
  };

  return (
    <form className="add-task" onSubmit={submitHandler}>
      <div>
        <input
          placeholder="Task Name..."
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
