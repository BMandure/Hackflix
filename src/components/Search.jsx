import React from "react";
import "./search.css";

import { NavLink } from "react-router-dom";

function Search() {
  return (
    <NavLink to="/search" className="btn-orange bg-dark">
      <p className="p-0">
        <i className="bi bi-search"></i> Search
      </p>
    </NavLink>
  );
}

export default Search;
