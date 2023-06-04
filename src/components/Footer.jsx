import "./footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <p>
          Made by <strong>MandureDev</strong>
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
