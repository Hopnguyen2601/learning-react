import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem";
import Pagination from "../Pagination";
import { URL } from "../../constants";
import "./styles.scss";

function TodoList() {
  const [taskList, setTaskList] = useState([]);

  // Get task list API
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setTaskList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [taskList]);

  const changeItemStatus = (selectedItem, changedStatus) => {
    // call fetch API PUT update
    fetch(`${URL}/${selectedItem.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ ...selectedItem, status: changedStatus }),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedTaskList = taskList.map((obj) => {
          if (obj.id === selectedItem.currentId) {
            obj.status = changedStatus;
            return obj;
          }

          return obj;
        });

        setTaskList(updatedTaskList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ul className="tasks">
        {taskList.length > 0 &&
          taskList.map((item, index) => (
            <TodoItem
              initialItem={item}
              key={index}
              handleChangeStatus={changeItemStatus}
            />
          ))}
      </ul>

      <Pagination />
    </>
  );
}

export default TodoList;
