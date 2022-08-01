import React, { useState } from "react";
import PropTypes from "prop-types";

TaskForm.propTypes = {};

function TaskForm(props) {
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: "new",
  });

  const handleChangeFile = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeForm = (e) => {
    // prevent page reload
    e.preventDefault();

    // Valid felds

    localStorage.setItem("data", JSON.stringify(formValue));

    // navigate to "/taskList" (Home page)
  };

  return (
    <form onSubmit={handleChangeForm}>
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
