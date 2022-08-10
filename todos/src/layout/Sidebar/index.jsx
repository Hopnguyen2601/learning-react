import React from "react";
import "./styles.scss";

Sidebar.propTypes = {};

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="nav">
        <li className="nav__item">
          <a href="/">All Tasks</a>
          {/* <Link to="/">All Tasks</Link> */}
        </li>
        <li className="nav__item">
          <a href="/newtasks">New Tasks</a>
          {/* <Link to="/newtasks">New Tasks</Link> */}
        </li>
        <li className="nav__item">
          <a href="/doingtasks">Doing Tasks</a>
          {/* <Link to="/doingtasks">Doing Tasks</Link> */}
        </li>
        <li className="nav__item">
          <a href="/donetasks">Done Tasks</a>
          {/* <Link to="/donetasks">Done Tasks</Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
