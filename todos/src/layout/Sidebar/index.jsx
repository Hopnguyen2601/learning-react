import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Sidebar.propTypes = {};

function Sidebar(props) {
  const { handleListProducts } = props;

  return (
    <ul className="nav">
      <li className="nav__item">
        <a href="javascript:void(0)" onClick={handleListProducts}>
          All Tasks
        </a>
      </li>
      <li className="nav__item">
        <a href="javascript:void(0)" onClick={handleListProducts}>
          New Task
        </a>
      </li>
      <li className="nav__item">
        <a href="javascript:void(0)" onClick={handleListProducts}>
          Doing Task
        </a>
      </li>
      <li className="nav__item">
        <a href="javascript:void(0)" onClick={handleListProducts}>
          Done Task
        </a>
      </li>
    </ul>
  );
}

export default Sidebar;
