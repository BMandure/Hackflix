import "./navbar.css";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MenuOutlined } from "@ant-design/icons";

function NavScroll() {
  const isOnline = useIsOnline();
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            src="../src/assets/hf_logo.png"
            alt="hackflix_logo"
            className="brand-icon"
          />
        </Link>
        {isOnline ? (
          <i className="bi text-success bi-wifi icon-online"> Online</i>
        ) : (
          <i className="bi text-danger bi-wifi-off icon-online"> Offline</i>
        )}
        <Navbar.Toggle aria-controls="navbarScroll" className="hamburger">
          <MenuOutlined className="image-hamburger" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-nav" navbarScroll>
            <Link to="/about" className="btn-orange bg-dark">
              About
            </Link>
            <Link to="/contact" className="btn-orange bg-dark">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
