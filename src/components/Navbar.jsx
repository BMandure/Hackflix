import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar position-fixed w-100">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="" alt="ICON" className="brand-icon" />
        </Link>
        <div className="gap-nav">
          <Link to="/about" className="btn-navbar">
            About
          </Link>
          <Link to="/contact" className="btn-navbar">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
