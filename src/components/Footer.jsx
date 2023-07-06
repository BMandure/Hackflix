import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <p>
          Made by{" "}
          <Link to="/about" className="strongify">
            MandureDev
          </Link>
        </p>
        <p>
          Hackflix{" "}
          <sup>
            <i className="bi bi-c-circle"></i>
          </sup>{" "}
          2023 - All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
