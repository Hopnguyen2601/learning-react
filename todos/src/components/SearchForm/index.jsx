import React from "react";
import "./styles.scss";

function SearchForm(props) {
  return (
    <div className="search-form">
      <input placeholder="Type something to search" />
      <button>Search</button>
    </div>
  );
}

export default SearchForm;
