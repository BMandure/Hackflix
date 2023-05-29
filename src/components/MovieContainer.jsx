import "./movie-container.css";
import MovieThumbnail from "./MovieThumbnail";
import { Rate, ConfigProvider, theme } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { BottomScrollListener } from "react-bottom-scroll-listener";

function MovieContainer() {
  let rate = 0;
  const [movies, setMovies] = useState([]);
  const [resultMovies, setResultMovies] = useState([]);
  const [lastPage, setLastPage] = useState(Number(1));

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie/?include_adult=false&api_key=9eaf0ca08945585cbfa3a26f189cac4e&page=${lastPage}`
    );
    setMovies([...movies, ...response.data.results]);
    setResultMovies([...resultMovies, ...response.data.results]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, [lastPage]);

  return (
    <div className="movie-container">
      <BottomScrollListener
        onBottom={() => {
          setLastPage(lastPage + 1);
        }}
      />
      {movies.length !== 0 ? (
        <div>
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
                  setMovies(
                    resultMovies.filter((movie) => movie.vote_average >= rate)
                  )
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
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default MovieContainer;
