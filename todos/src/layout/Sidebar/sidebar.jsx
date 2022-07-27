import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

Sidebar.propTypes = {

};

function Sidebar(props) {
  const { handleListProducts } = props;

  return (
    <div className='containerSidebar'>
      <div className='containerSidebar__item'>
        <button onClick={handleListProducts}>All Task</button>
      </div>
      <div className='containerSidebar__item'>
        <p>New Task</p>
      </div>
      <div className='containerSidebar__item'>
        <p>Doing Task</p>
      </div>
      <div className='containerSidebar__item'>
        <p>Done Task</p>
      </div>
    </div>
  );
}

export default Sidebar;