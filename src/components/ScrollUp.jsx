import React from "react";
import "./scrollUp.css";
import { useScrollPosition } from "../hooks/useItsAtTop";

function ScrollUp(show) {
  const { scrollPos } = useScrollPosition();
  return (
    <>
      {scrollPos && (
        <button className="goUp bg-dark" onClick={() => window.scrollTo(0, 0)}>
          &uarr;
        </button>
      )}
    </>
  );
}

export default ScrollUp;
