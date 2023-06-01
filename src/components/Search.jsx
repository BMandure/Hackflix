import React from "react";
import "./search.css";

import { NavLink } from "react-router-dom";

function Search() {
  return (
    <NavLink to="/search" className="search-btn bg-dark">
      Search Movie
    </NavLink>
  );
}

export default Search;
