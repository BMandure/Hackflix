import "./error.css";
import { NavLink } from "react-router-dom";

function Error404({ title, message }) {
  return (
    <div className="main-error">
      <h1 className="error-title">{title}</h1>
      <p className="error-text">{message}</p>
      <NavLink to="/" className="go-back">
        Go Home
      </NavLink>
    </div>
  );
}

export default Error404;
