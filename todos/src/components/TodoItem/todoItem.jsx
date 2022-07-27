import React from 'react';
import { useState } from 'react';
import './styles.css';

const ALL_STATUS = [
  { name: 'new', order: 0 },
  { name: 'doing', order: 1 },
  { name: 'done', order: 2 },
  { name: 'renew', order: 3 },
]

function TodoItem({item, idx}) {
  const {title, creator, description, status: defaultStatus} = item;
  const [status, setStatus] = useState(defaultStatus);

  const changeStatus = (currentStatus) => {
    if (currentStatus === 'renew') {
      return setStatus('new')
    }

    const foundObj = ALL_STATUS.find((item) => item.name === currentStatus.toLowerCase());
    const order = foundObj.order;
    const nextStatus = ALL_STATUS.find((item) => item.order === order + 1).name;

    setStatus(nextStatus);
  };

  return (
    <li className='card' key={idx}>
      <p className="containerItem__title">Title: {title}</p>
      <p className="containerItem__creator">Creator: {creator}</p>
      <p className={`containerItem__status containerItem__status--${status.toLowerCase()}`}> Status: {status}</p>
      <hr className="containerItem__lineBreak" />
      <div className="containerItem__description">
        <p>Description:</p>
        <p>{description}</p>
      </div>
      <button type='button' onClick={() => changeStatus(status)}>Change</button>
    </li>
  );
}

export default TodoItem;