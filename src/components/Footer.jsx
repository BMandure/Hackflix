import "./footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer className="footer">
      <Row className="footer-row">
        <Col
          lg={4}
          className="d-flex justify-content-center align-items-center"
        >
          <a href="#" className="footer-link">
            Terms & Conditions
          </a>
        </Col>
        <Col
          lg={4}
          className="d-flex justify-content-center align-items-center"
        >
          <p className="footer-item">
            Made by <strong>@BMandure</strong>
          </p>
        </Col>
        <Col
          lg={4}
          className="d-flex justify-content-center align-items-center"
        >
          <p className="footer-item">
            Copyright Hackflix<sup>&#169;</sup> 2023 All rights reserved
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
