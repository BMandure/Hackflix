import "./navbar.css";
import { Link } from "react-router-dom";
import useIsOnline from "../hooks/useIsOnline";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Search from "../components/Search";
import { MenuOutlined } from "@ant-design/icons";

import logo from "../assets/hf_logo.png";

function NavScroll() {
  const isOnline = useIsOnline();
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="hackflix_logo" className="brand-icon" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" className="hamburger">
          <MenuOutlined className="image-hamburger" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-nav" navbarScroll>
            <Search />
            <Link to="/about" className="btn-orange bg-dark">
              About The Project
            </Link>
            <Link to="/contact" className="btn-orange bg-dark">
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
