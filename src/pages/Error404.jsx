import "./error.css";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <div className="main-error">
      <h1 className="error-title">Error 404</h1>
      <p className="error-text">The page you are looking for is not here...</p>
      <NavLink to="/" className="go-back">
        Go Home
      </NavLink>
    </div>
  );
}

export default Error404;
