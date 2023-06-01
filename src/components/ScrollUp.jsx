import React from "react";
import "./scrollUp.css";

function ScrollUp() {
  return (
    <button className="goUp bg-dark" onClick={() => window.scrollTo(0, 0)}>
      &uarr; Go Up &uarr;
    </button>
  );
}

export default ScrollUp;
