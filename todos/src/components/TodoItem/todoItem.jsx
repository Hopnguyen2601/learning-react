import React from 'react';
import { useState } from 'react';
import './styles.css';

const ALL_STATUS = [
  { status: 'new', order: 0 },
  { status: 'doing', order: 1 },
  { status: 'done', order: 2 },
  { status: 'renew', order: 3 },
]

function TodoItem({item, idx}) {
  const [status, setStatus] = useState(item.status);

  const changeStatus = (e) => {
     const currentOrder = parseInt(e.target.value);
     const currentStatus = ALL_STATUS.find(item => item.order === currentOrder).status;
     setStatus(currentStatus);
  };

  return (
    <li className='card' key={idx}>
      <p className="containerItem__title">Title: {item.title}</p>
      <p className="containerItem__creator">Creator: {item.creator}</p>
      <p className={`containerItem__status containerItem__status--${item.status.toLowerCase()}`}> Status: {status}</p>
      <hr className="containerItem__lineBreak" />
      <div className="containerItem__description">
        <p>Description:</p>
        <p>{item.description}</p>
      </div>

      <select name="" onChange={changeStatus}>
        {ALL_STATUS.map((item, idx) => {
          return <option key={idx} value={item.order}>{item.status}</option>
        })}
      </select>
    </li>
  );
}

export default TodoItem;