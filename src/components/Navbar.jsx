import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar position-fixed w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="" alt="ICON" className="brand-icon" />
        </a>
        <button className="btn-navbar">About</button>
      </div>
    </nav>
  );
}

export default Navbar;
