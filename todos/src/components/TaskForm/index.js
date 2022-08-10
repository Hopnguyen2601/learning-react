import React, { useState } from "react";
import { URL } from "../../constants";

function TaskForm() {
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: "New",
  });

  const handleChangeFile = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    // Call post API
    console.log(formValue);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleCreateTask}>
      <label>Title: </label>
      <input
        type="text"
        name="title"
        value={formValue.title}
        onChange={handleChangeFile}
      ></input>
      <label>Author: </label>
      <input
        type="text"
        name="author"
        value={formValue.author}
        onChange={handleChangeFile}
      ></input>
      <label>Description: </label>
      <input
        type="text"
        name="description"
        value={formValue.description}
        onChange={handleChangeFile}
      ></input>
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
