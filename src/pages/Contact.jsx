import "./contact.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { useState } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("xdovnavo");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="contact-container w-font">
        <div className="main-container">
          <h1 className="contact-title">Contact Me</h1>
          <form
            action="https://formspree.io/f/xjvddnel"
            method="POST"
            className="contact-form"
          >
            <label htmlFor="name" className="lg-cafe">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="email" className="lg-cafe">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="message" className="lg-cafe">
              Message
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Hello..."
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="btn-orange bg-dark"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>

          <Row className="contact-cards w-100">
            <Col xs={6} className="contact-card">
              <p className="contact-subtitle">GitHub</p>
              <Link
                to="https://github.com/BMandure"
                target="_blank"
                className="pt-3 link"
              >
                <img
                  src={github}
                  alt="Enter to my github page"
                  className="icon-card"
                />
              </Link>
            </Col>
            <Col xs={6} className="contact-card">
              <p className="contact-subtitle">LinkedIn</p>
              <Link
                to="https://linkedin.com/in/brunomanduré"
                target="_blank"
                className="pt-3 link"
              >
                <img
                  src={linkedin}
                  alt="Enter to my linkedin page"
                  className="icon-card"
                />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Contact;
