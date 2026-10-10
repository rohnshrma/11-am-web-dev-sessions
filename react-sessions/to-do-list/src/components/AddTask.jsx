import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddTask = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevDate) => {
      return {
        ...prevDate,
        [name]: value,
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
