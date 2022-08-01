import React from "react";
import TodoItem from "../TodoItem";
import "./styles.scss";

function TodoList() {
  const tasksList = JSON.parse(localStorage.getItem("data")) | [];

  return (
    <ul className="tasks">
      {tasksList.length > 0 &&
        tasksList.map((item, index) => <TodoItem item={item} key={index} />)}
    </ul>
  );
}

export default TodoList;
