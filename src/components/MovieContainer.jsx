import "./movie-container.css";
import MovieThumbnail from "./MovieThumbnail";
import movieList from "../movieList";
import { Rate, ConfigProvider, theme } from "antd";
import { useState } from "react";

function MovieContainer() {
  let rate = 0;

  const [movies, setMovies] = useState(movieList);

  return (
    <div className="movie-container">
      <div className="filter-container my-3 py-2">
        <span>Filter by rate</span>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Rate
            className="d-inline p-1 px-3"
            defaultValue={0}
            onChange={(value) => (
              (rate = value * 2),
              setMovies(movieList.filter((movie) => movie.vote_average >= rate))
            )}
          />
        </ConfigProvider>
      </div>
      <div className="movie-container row">
        {movies.length !== 0 ? (
          movies
            .filter((movie) => movie.vote_average >= rate)
            .map((movie) => <MovieThumbnail key={movie.id} movie={movie} />)
        ) : (
          <div className="alert alert-danger w-50" role="alert">
            There are not movies with this rate
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieContainer;
