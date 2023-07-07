import "./movie-data.css";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Rate, ConfigProvider, theme } from "antd";
import { NavLink, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import imgPoster from "../assets/movie-roll.jpg";

function MovieData({ movie }) {
  const [lgShow, setLgShow] = useState(false);
  const notifyOutside = () => {
    toast.warn("Outside project's scope", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div>
        <div
          className="modal-btn"
          onClick={() => {
            setLgShow(true);
          }}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : imgPoster
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
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : imgPoster
                  }
                  alt={"poster of " + movie.title}
                  className="img-movie-data"
                />
              </Col>
              <Col xs={12} lg={8} className="p-3 justify-content-center">
                <h2 className="lg-cafe border-title">Overview</h2>
                <p>{movie.overview}</p>
                <Row className="vr-cont">
                  <Col xs={12} md={5} className="votes_rate">
                    <span> Rate</span>
                    <ConfigProvider
                      theme={{
                        algorithm: theme.darkAlgorithm,
                      }}
                    >
                      <Rate disabled defaultValue={movie.vote_average / 2} />
                    </ConfigProvider>
                  </Col>
                  <Col xs={12} md={5} className="votes_rate">
                    <span>Votes</span>
                    <span>{movie.vote_count}</span>
                  </Col>
                </Row>
                <div className="btn-container">
                  <button className="btn-orange w-100" onClick={notifyOutside}>
                    <i className="bi bi-play">Play</i>
                  </button>
                  <NavLink
                    to={`/movie/${movie.id}`}
                    className="btn-orange w-100"
                  >
                    <i className="bi bi-info-circle h-100"> More Info </i>
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default MovieData;
