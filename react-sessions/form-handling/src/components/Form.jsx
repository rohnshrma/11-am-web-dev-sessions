import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [taskName, setTaskName] = useState("");

  const [desc, setDesc] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  // change => name

  const nameChangeHandler = (e) => {
    let nameInput = e.target.value;
    setName(nameInput);
  };
  const descChangeHandler = (e) => {
    let descInput = e.target.value;
    setDesc(descInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTaskName(name);
    setTaskDesc(desc);
  };

  return (
    <div>
      <div>
        <h2>{taskName}</h2>
        <p>{taskDesc}</p>
      </div>
      <form onSubmit={submitHandler}>
        <div>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
