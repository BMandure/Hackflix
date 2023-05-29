import "./movie-thumbnail.css";
import Loader from "./Loader";
import { useState } from "react";
import MovieData from "./MovieData";
import { Rate, ConfigProvider, theme } from "antd";

function MovieThumbnail({ movie }) {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <div className="movie-thumbnail col-3">
      {movie ? (
        <MovieData movie={movie} />
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default MovieThumbnail;
