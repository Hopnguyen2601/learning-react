import React from "react";
import "./styles.scss";
import Button from "../../components/Button";
import SearchForm from "../../components/SearchForm";

function Header() {
  return (
    <div className="main-header">
      <Button title="Create New Task" />
      <SearchForm />
    </div>
  );
}

export default Header;
