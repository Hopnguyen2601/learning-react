import './styles.css';

TodoItem.propTypes = {

};

function TodoItem(props) {
  return (
    <div className='todoItem'>
      <p className='todoItem-title'>Title: task 1</p>
      <p className='todoItem-creator'>Creator: Loc</p>
      <p className='todoItem-status'>Status: New</p>
      <hr className='todoItem-lineBreak'/>
      <p className='todoItem-description'>
        Description: This is a task
      </p>
      <div className='todoItem-actions'>
        <button className='todoItem-btn'>Start</button>
      </div>
    </div>
  );
}

export default TodoItem;