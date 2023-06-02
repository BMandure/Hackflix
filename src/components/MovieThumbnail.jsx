import "./movie-thumbnail.css";
import Loader from "./Loader";
import { useState } from "react";
import MovieData from "./MovieData";
import { Rate, ConfigProvider, theme } from "antd";
import { Col } from "react-bootstrap";

function MovieThumbnail({ movie }) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <Col xs={3} className="movie-thumbnail">
      {movie ? <MovieData movie={movie} /> : <Loader />}
    </Col>
  );
}

export default MovieThumbnail;
