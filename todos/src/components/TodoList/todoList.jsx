import React from 'react';
import TodoItem from '../TodoItem/todoItem';
import './styles.css';

const data = [
  {
    title: 'Task 1',
    creator: 'author 1',
    status: 'new',
    description: 'This is task 1',
  },
  {
    title: 'Task 2',
    creator: 'author 3',
    status: 'new',
    description: 'This is task 2',
  },
  {
    title: 'Task 3',
    creator: 'author 3',
    status: 'new',
    description: 'This is task 3',
  },
  {
    title: 'Task 4',
    creator: 'author 4',
    status: 'new',
    description: 'This is task 4',
  }
];

function TodoList(props) {

  return (
    <ul className="listCard">
      {data.length && data.map((item, index) => <TodoItem item={item} idx={index} key={index} />)}
    </ul>
  );

}

export default TodoList;