import "./contact.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="contact-container w-font">
        <div className="main-container my-auto">
          <h1 className="contact-title">Contact</h1>
          <form action="" className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="John" />
            <label htmlFor="mail">Email</label>
            <input type="text" name="mail" placeholder="email@example" />
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" placeholder="Hello..." />
            <button type="submit" className="btn-orange">
              Send
            </button>
          </form>
          <Row className="contact-cards w-100">
            <Col xs={6} className="contact-card">
              <p className="contact-subtitle">GitHub</p>
              <NavLink to="/contact" className="pt-3 link">
                <img
                  src="src/assets/github.svg"
                  alt="Enter to my github page"
                  className="icon-card"
                />
              </NavLink>
            </Col>
            <Col xs={6} className="contact-card">
              <p className="contact-subtitle">LinkedIn</p>
              <NavLink to="/contact" className="pt-3 link">
                <img
                  src="src/assets/linkedin.svg"
                  alt="Enter to my linkedin page"
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
