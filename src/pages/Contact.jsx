import "./contact.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="contact-container w-font">
        <div className="main-container">
          <h1 className="contact-title">Contact Us</h1>
          <Row className="contact-cards w-100">
            <Col xs={4} className="contact-card">
              <p className="contact-subtitle">Gmail</p>
              <NavLink to="/contact" className="pt-3 link">
                <img src="src/assets/gmail.svg" alt="" className="icon-card" />
              </NavLink>
            </Col>
            <Col xs={4} className="contact-card">
              <p className="contact-subtitle">Instagram</p>
              <NavLink to="/contact" className="pt-3 link">
                <img
                  src="src/assets/instagram.svg"
                  alt=""
                  className="icon-card"
                />
              </NavLink>
            </Col>
            <Col xs={4} className="contact-card">
              <p className="contact-subtitle">Twitter</p>
              <NavLink to="/contact" className="pt-3 link">
                <img
                  src="src/assets/twitter.svg"
                  alt=""
                  className="icon-card"
                />
              </NavLink>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Contact;
