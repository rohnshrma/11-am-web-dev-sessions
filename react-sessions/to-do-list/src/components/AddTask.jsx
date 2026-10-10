// We pull in useReducer from React.
// Think of it as a cousin of useState. useState is fine for one simple value,
// but when a piece of state has a few parts (here: name AND description) and
// a few different ways it can change (typing, clearing), useReducer keeps all
// those "rules for changing" in one place instead of scattering them around.
import { useReducer } from "react";

// uuid is a small library that makes random, unique ids like "3f2a9c1e-...".
// Every task needs its own id so React (and we) can tell tasks apart,
// even if two of them have the same name.
// "v4 as uuidv4" just means: grab the function called v4 and call it uuidv4 here.
import { v4 as uuidv4 } from "uuid";

// This is what the form looks like when the page first loads:
// both boxes empty. We also come back to this whenever we clear the form.
// It lives outside the component so it isn't rebuilt on every render.
const initialState = {
  name: "",
  description: "",
};

// The reducer is basically the "rule book" for our form data.
// React hands it two things:
//   state  -> what the form data looks like right now
//   action -> a little note saying what just happened, e.g.
//             { type: "name", payload: "Buy milk" }
// Whatever this function returns becomes the new form data.
// Important: we never edit the old state directly, we always hand back a new object.
const formReducer = (state, action) => {
  // Someone typed in the "name" box or the "description" box.
  if (action.type === "name" || action.type === "description") {
    return {
      // Copy everything we already have, so typing in one box
      // doesn't wipe out what's in the other box.
      ...state,
      // Then overwrite just the field that changed.
      // The square brackets let us use a variable as the key, so if
      // action.type is "name" this becomes  name: action.payload
      [action.type]: action.payload,
    };
  }

  // The form was submitted and we want empty boxes again.
  if (action.type === "reset") {
    return initialState;
  }

  // If we ever get a note we don't recognise, we play it safe
  // and go back to an empty form.
  return initialState;
};

// This is the AddTask component, the little form at the top of the app.
// "props" is the bag of stuff the parent (App) passes down to us.
// The only thing we use from it is props.onAdd, a function the parent gave us
// so we can hand a brand new task back up to it.
const AddTask = (props) => {
  // useReducer gives us two things back:
  //   formData -> the current values of the form ({ name, description })
  //   dispatch -> the function we call to send a note (action) to the reducer
  // We tell it which rule book to use (formReducer) and where to start (initialState).
  const [formData, dispatch] = useReducer(formReducer, initialState);

  // Runs every single time a key is pressed in either input box.
  // "e" is the event, React's description of what just happened.
  const changeHandler = (e) => {
    // e.target is the input box that was typed in.
    // We grab its name attribute ("name" or "description")
    // and whatever is currently written inside it.
    const { name, value } = e.target;

    // Send a note to the reducer. Because the input's name matches the
    // field in our state, the same handler works for both boxes.
    dispatch({ type: name, payload: value });
  };

  // Runs when the "Add Task" button is clicked (or Enter is pressed).
  const submitHandler = (e) => {
    // By default a form reloads the whole page when submitted.
    // We don't want that in React, so we stop it here.
    e.preventDefault();

    // Hand the new task up to the parent.
    // We copy the name and description we typed, and stick a fresh
    // unique id on it so this task can be found later (e.g. to delete it).
    props.onAdd({
      ...formData,
      id: uuidv4(),
    });

    // Task is sent, so clear both boxes for the next one.
    dispatch({ type: "reset" });
  };

  // Everything below is what actually shows up on the screen.
  return (
    // onSubmit hooks the whole form up to our submitHandler.
    // className is just React's word for the HTML "class" attribute (used for styling).
    <form className="add-task" onSubmit={submitHandler}>
      <div>
        {/* Box for the task's name.
            name="name"   -> tells changeHandler which field to update
            value=...     -> the box always shows what's in our state
                             (this is called a "controlled input": React is in charge)
            onChange=...  -> every keystroke goes through changeHandler */}
        <input
          placeholder="Task Name..."
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        {/* Same idea as above, just for the description. */}
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={changeHandler}
        />
      </div>
      {/* type="submit" means clicking this button submits the form,
          which in turn runs submitHandler. */}
      <button type="submit">Add Task</button>
    </form>
  );
};

// Make this component available so other files (like App.jsx) can import and use it.
export default AddTask;
