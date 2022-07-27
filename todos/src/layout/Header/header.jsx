import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

Header.propTypes = {

};

function Header(props) {
  const { handleCreateNewTask } = props;

  return (
    <div className="containerHeader">
      <div className="containerHeader__left">
        <button onClick={handleCreateNewTask}>Create New Task</button>
      </div>
      <div className="containerHeader__right">
        <input placeholder="Type something to search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;