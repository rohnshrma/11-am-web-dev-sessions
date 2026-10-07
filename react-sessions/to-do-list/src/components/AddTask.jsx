import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddTask = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const nameChangeHandler = (e) => {
    const nameInput = e.target.value;

    setFormData((prevFormData) => {
      return {
        name: nameInput,
        description: prevFormData.description,
      };
    });
  };
  const descChangeHandler = (e) => {
    const descInput = e.target.value;

    setFormData((prevFormData) => {
      return {
        name: prevFormData.name,
        description: descInput,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onAdd({
      ...formData,
      id: uuidv4(),
    });

    setFormData({
      name: "",
      description: "",
    });
  };

  return (
    <form className="add-task" onSubmit={submitHandler}>
      <div>
        <input
          placeholder="Task Name..."
          type="text"
          value={formData.name}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Task Description"
          value={formData.description}
          onChange={descChangeHandler}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
