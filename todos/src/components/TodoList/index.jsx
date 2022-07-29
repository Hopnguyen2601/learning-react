import React from "react";
import TodoItem from "../TodoItem";
import "./styles.scss";

function TodoList(props) {
  const tasksList = [
    {
      id: 1,
      title: "Task 1",
      creator: "author 1",
      status: "new",
      description: "This is task 1",
    },
    {
      id: 2,
      title: "Task 2",
      creator: "author 3",
      status: "new",
      description: "This is task 2",
    },
    {
      id: 3,
      title: "Task 3",
      creator: "author 3",
      status: "new",
      description: "This is task 3",
    },
    {
      id: 4,
      title: "Task 4",
      creator: "author 4",
      status: "new",
      description: "This is task 4",
    },
  ];

  return (
    <ul className="tasks">
      {tasksList.length &&
        tasksList.map((item, index) => (
          <TodoItem item={item} idx={index} key={item.id} />
        ))}
    </ul>
  );
}

export default TodoList;
