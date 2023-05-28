import "./movie-data.css";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Rate, ConfigProvider, theme } from "antd";

function MovieData({ movie }) {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="modal-btn">
        <p className="movie-title">{movie.title}</p>
        <img
          onClick={() => {
            setLgShow(true), console.log(movie);
          }}
          src={movie.poster_path}
          alt={"poster of " + movie.title}
          className="movie-image"
        />
      </div>
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>
            <h2 className="lg-cafe m-0">{movie.title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid modal-body">
          <Container>
            <Row>
              <Col xs={4}>
                <img
                  onClick={() => {
                    setLgShow(true);
                  }}
                  src={movie.poster_path}
                  alt={"poster of " + movie.title}
                  className="img-movie-data"
                />
              </Col>
              <Col xs={8} className="p-3 justify-content-center">
                <h2 className="lg-cafe border-title">Overview</h2>
                <p>{movie.overview}</p>
                <div className="d-flex justify-content-around my-4">
                  <div className="d-flex flex-column align-items-center">
                    <span> Rate</span>
                    <ConfigProvider
                      theme={{
                        algorithm: theme.darkAlgorithm,
                      }}
                    >
                      <Rate disabled defaultValue={movie.vote_average / 2} />
                    </ConfigProvider>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <span>Votes</span>
                    <span>{movie.vote_count}</span>
                  </div>
                </div>
                <Button className=" modal-btn w-100">More Info &rarr;</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieData;
