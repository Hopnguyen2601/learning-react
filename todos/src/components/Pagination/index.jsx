import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Pagination.propTypes = {};

function Pagination(props) {
  return (
    <div className="pagination">
      <div className="pagination__page">{"<"}</div>
      <div className="pagination__page">1</div>
      <div className="pagination__page">2</div>
      <div className="pagination__page">3</div>
      <div className="pagination__page">{">"}</div>
    </div>
  );
}

export default Pagination;
