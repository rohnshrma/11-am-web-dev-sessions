// useState = give this component a memory.
import { useState } from "react";
// uuid makes random unique ids (like a fingerprint) so every task can be told apart.
// We renamed "v4" to "uuidV4" because that name is easier to understand.
import { v4 as uuidV4 } from "uuid";

// The form where you type a task name and description.
const Form = (props) => {
  // Pull "onAdd" out of the props bag. It's the function App gave us
  // for sending a finished task back up to the parent.
  const { onAdd } = props;

  // Memory for whatever is typed in the boxes. Both start out empty.
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Runs every time you type a letter in the NAME box.
  // "e" is the event: a report about what just happened.
  const nameChangeHandler = (e) => {
    // e.target is the input box, .value is what's written in it right now.
    let nameInput = e.target.value;
    setFormData((prevData) => {
      return {
        // save the newly typed name
        name: nameInput,
        // NOTE: this looks for "prevData.desc" but the field is called
        // "description", so it comes back empty. A small typo that's worth fixing later.
        description: prevData.desc,
      };
    });
  };

  // Same idea, but for the DESCRIPTION box.
  const descChangeHandler = (e) => {
    let descInput = e.target.value;
    setFormData((prevData) => {
      return {
        // keep the name we already had
        name: prevData.name,
        // save the newly typed description
        description: descInput,
      };
    });
  };

  // Runs when the form is submitted (Submit button or pressing Enter).
  const submitHandler = (e) => {
    // Normally a browser form refreshes the whole page on submit.
    // This line stops that so our app keeps its memory.
    e.preventDefault();
    // Make the finished task: copy name + description from memory
    // and stick a fresh unique id onto it.
    const profile = {
      ...formData,
      id: uuidV4(),
    };
    // Hand the task up to App so it lands in the main list.
    onAdd(profile);
  };

  return (
    <div>
      {/* onSubmit = "when this form is submitted, run submitHandler" */}
      <form onSubmit={submitHandler}>
        <div>
          {/* onChange fires on every keystroke, keeping our memory in sync with the box */}
          <input
            onChange={nameChangeHandler}
            type="text"
            name="name"
            placeholder="enter task name..."
          />
        </div>
        <div>
          <input
            onChange={descChangeHandler}
            type="text"
            name="description"
            placeholder="enter task description..."
          />
        </div>
        {/* A button inside a form submits it by default */}
        <button>Submit</button>
      </form>
    </div>
  );
};

// Let other files import this component.
export default Form;
