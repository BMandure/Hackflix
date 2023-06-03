import "./about.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-cont w-font">
      <h1 className="title-about">About the project...</h1>
      <Row className="border-about">
        <Col xs={6}>
          <p className="w-font">
            Proyect made during{" "}
            <Link
              to="https://ha.dev/"
              className="strongify outline"
              target="_blank"
            >
              Hack Academy
            </Link>
            's Code Bootcamp , a full-time course with +600 hours of dedication
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
        <Col xs={6}>
          <p className="w-font">
            Proyecto realizado durante el{" "}
            <strong className="strongify">Coding Bootcamp de </strong>
            <Link
              to="https://ha.dev/"
              className="strongify outline"
              target="_blank"
            >
              Hack Academy
            </Link>{" "}
            , un curso de modalidad full-time de más de 600 horas de dedicación
            a lo largo de tres meses y basado en el ecosistema JavaScript que
            tiene como objetivo simular una aplicación de streaming de películas
            y a la vez, brindar información sobre la misma.
          </p>
          <p>
            Fue diseñada con una{" "}
            <strong className="strongify">arquitectura MVC</strong> y como una{" "}
            <strong className="strongify">single page application</strong>,
            utilizando <strong className="strongify">React</strong> para
            maquetar y consultando mediante llamadas AJAX a una API de{" "}
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
            .
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
