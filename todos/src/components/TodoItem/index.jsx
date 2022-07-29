import React, { useState } from "react";
import "./styles.scss";

const ALL_STATUS = ["New", "Doing", "Done"];

function TodoItem({ item, idx }) {
  const [status, setStatus] = useState(item.status);

  const changeStatus = (e) => {
    const currentOrder = parseInt(e.target.value);
    const currentStatus = ALL_STATUS.find(
      (item) => item.order === currentOrder
    ).status;
    setStatus(currentStatus);
  };

  return (
    <li key={idx}>
      <div className="task">
        <p className="task__title">Title: {item.title}</p>
        <p className="task__creator">Creator: {item.creator}</p>
        <p className={`task__status task__status--${status.toLowerCase()}`}>
          Status: {status}
        </p>
        <hr className="task__break" />
        <div className="task__desc">
          <p>Description:</p>
          <p>{item.description}</p>
        </div>

        <select className="task__select" onChange={changeStatus}>
          {ALL_STATUS.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </li>
  );
}

export default TodoItem;
