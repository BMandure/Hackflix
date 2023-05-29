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
        <div className="movie-card">
          <MovieData movie={movie} />
          <div className="movie-rate">
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
              }}
            >
              <Rate disabled defaultValue={movie.vote_average / 2} />
            </ConfigProvider>
            {movie.vote_average / 2}
          </div>
        </div>
      ) : (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default MovieThumbnail;
