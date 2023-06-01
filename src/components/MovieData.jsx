import "./movie-data.css";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Rate, ConfigProvider, theme } from "antd";
import { NavLink, Link } from "react-router-dom";

function MovieData({ movie }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div>
        <div
          className="modal-btn"
          onClick={() => {
            setLgShow(true);
          }}
        >
          <p className="movie-title">{movie.title}</p>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : "../src/assets/movie-roll.jpg"
            }
            alt={"poster of " + movie.title}
            className="movie-image"
          />
          <div className="movie-rate">
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
              }}
            >
              <Rate disabled defaultValue={movie.vote_average / 2} />
            </ConfigProvider>
          </div>
        </div>
      </div>
      <Modal size="lg" show={lgShow} centered onHide={() => setLgShow(false)}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>
            <h2 className="lg-cafe m-0">{movie.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid modal-body">
          <Container>
            <Row>
              <Col xs={12} lg={4}>
                <img
                  onClick={() => {
                    setLgShow(true);
                  }}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={"poster of " + movie.title}
                  className="img-movie-data"
                />
              </Col>
              <Col xs={12} lg={8} className="p-3 justify-content-center">
                <h2 className="lg-cafe border-title">Overview</h2>
                <p>{movie.overview}</p>
                <Row className="d-flex justify-content-around my-4">
                  <Col
                    xs={12}
                    md={6}
                    className="d-flex flex-column align-items-center"
                  >
                    <span> Rate</span>
                    <ConfigProvider
                      theme={{
                        algorithm: theme.darkAlgorithm,
                      }}
                    >
                      <Rate disabled defaultValue={movie.vote_average / 2} />
                    </ConfigProvider>
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    className="d-flex flex-column align-items-center"
                  >
                    <span>Votes</span>
                    <span>{movie.vote_count}</span>
                  </Col>
                </Row>
                <div className="btn-container">
                  <button className="more-info w-100" disabled>
                    Play (Not implemented)
                  </button>
                  <NavLink
                    to={`/movie/${movie.id}`}
                    className="more-info w-100"
                  >
                    More Info &rarr;
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieData;
