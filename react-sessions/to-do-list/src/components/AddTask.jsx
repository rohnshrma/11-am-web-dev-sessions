// useContext for shared data, useReducer for managing our form fields
import { useContext, useReducer } from "react";

// uuid gives a random unique id for every task
import { v4 as uuidv4 } from "uuid";
import TaskContext from "../TaskContext";

// how the form looks at the start (and after clearing)
const initialState = {
  name: "",
  description: "",
};

// reducer = rulebook. It gets current state + action, and returns the new state
const formReducer = (state, action) => {
  // user typed in name or description box
  if (action.type === "name" || action.type === "description") {
    return {
      // keep the other field as it is
      ...state,
      // [ ] lets us use the variable as key, so only the typed field changes
      [action.type]: action.payload,
    };
  }

  // clear the form after submit
  if (action.type === "reset") {
    return initialState;
  }

  // unknown action, so just go back to empty form
  return initialState;
};

// no props now, addTaskHandler comes straight from context
const AddTask = () => {
  const { addTaskHandler } = useContext(TaskContext);

  // formData = current values, dispatch = sends an action to the reducer
  const [formData, dispatch] = useReducer(formReducer, initialState);

  // runs on every keystroke in any input
  const changeHandler = (e) => {
    // name = which input, value = what is typed
    const { name, value } = e.target;

    // input's name is same as the action type, so one handler works for both
    dispatch({ type: name, payload: value });
  };

  const submitHandler = (e) => {
    // stop the page from reloading
    e.preventDefault();

    // send the new task to context, with a unique id added
    addTaskHandler({
      ...formData,
      id: uuidv4(),
    });

    // empty the boxes
    dispatch({ type: "reset" });
  };

  return (
    <form className="add-task" onSubmit={submitHandler}>
      <div>
        {/* controlled input: value comes from state, onChange updates the state */}
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
      {/* submit button triggers the form's onSubmit */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
