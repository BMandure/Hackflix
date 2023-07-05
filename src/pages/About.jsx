import "./about.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-cont w-font">
      <h1 className="title-about">About the project</h1>
      <Row className="border-about">
        <Col xs={12} lg={6} className="about-subcontainer">
          <p className="w-font">
            Proyect made during{" "}
            <Link
              to="https://ha.dev/"
              className="strongify outline"
              target="_blank"
            >
              Hack Academy
            </Link>
            's Coding Bootcamp, a full-time course with +600 hours of dedication
            over 3 months and based in a JavaScript ecosistem. Its purpose is to
            be a web application for streaming movies that also provides
            detailed information about them.
          </p>
          <p>
            It was designed with an{" "}
            <strong className="strongify">MVC architecture</strong> and as a{" "}
            <strong className="strongify">single page application</strong>,
            using <strong className="strongify">React</strong> to layout the
            site and querying with AJAX calls to
            <strong className="strongify">
              {" "}
              <Link
                to="https://www.themoviedb.org/"
                className="strongify outline"
                target="_blank"
              >
                The Movie Database (TMDB)
              </Link>
            </strong>
            's API .
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <h3 className="subtitle-about">Technologies</h3>
          <Row>
            <Col>
              <div className="technologies">
                <img
                  src="src/assets/4691292_react native_react_icon.svg"
                  alt=""
                  className="about-img"
                />
                React
              </div>
            </Col>
            <Col>
              <div className="technologies">
                <img
                  src="src/assets/bootstrap.svg"
                  alt=""
                  className="about-img"
                />{" "}
                Bootstrap
              </div>
            </Col>
            <Col>
              <div className="technologies">
                <img src="src/assets/css3.svg" alt="" className="about-img" />{" "}
                CSS 3
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default About;
