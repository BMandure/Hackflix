import React from "react";
import "./search.css";

import { NavLink } from "react-router-dom";

function Search() {
  return (
    <NavLink to="/search" className="btn-orange bg-dark">
      Search
    </NavLink>
  );
}

export default Search;
