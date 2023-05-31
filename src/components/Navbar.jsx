import "./navbar.css";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";

function Navbar() {
  const isOnline = useIsOnline();
  return (
    <nav className="navbar position-fixed w-100">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="src/assets/hf_logo.png"
            alt="hackflix_logo"
            className="brand-icon"
          />
        </Link>
        <div className="gap-nav">
          {isOnline ? (
            <i className="bi text-success bi-wifi icon-online"> Online</i>
          ) : (
            <i className="bi text-danger bi-wifi-off icon-online"> Offline</i>
          )}
          <Link to="/about" className="btn-orange">
            About
          </Link>
          <Link to="/contact" className="btn-orange">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
