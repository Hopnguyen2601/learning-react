import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "../../components/Button";
import SearchForm from "../../components/SearchForm";

Header.propTypes = {};

function Header(props) {
  const { handleCreateNewTask } = props;

  return (
    <div className="main-header">
      <Button />
      <SearchForm />
    </div>
  );
}

export default Header;
