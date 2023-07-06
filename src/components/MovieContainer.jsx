import "./movie-container.css";
import MovieThumbnail from "./MovieThumbnail";
import { Rate, ConfigProvider, theme } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row, Col } from "react-bootstrap";

function MovieContainer() {
  const [rate, setRate] = useState(Number(0));
  const [movies, setMovies] = useState([]);
  const [lastPage, setLastPage] = useState(Number(1));

  const getMovies = async () => {
    const response = await axios.get(
      `http://api.themoviedb.org/3/discover/movie/?include_adult=false&api_key=9eaf0ca08945585cbfa3a26f189cac4e&page=${lastPage}&vote_average.gte=${rate}`
    );
    setMovies([...movies, ...response.data.results]);
  };

  useEffect(() => {
    setLastPage(Number(1));
    getMovies();
  }, [rate]);

  useEffect(() => {
    getMovies();
  }, [lastPage]);

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
            defaultValue={1}
            allowClear={false}
            onChange={(value) => {
              rate !== value && (setMovies([]), setRate(value * 2));
            }}
          />
        </ConfigProvider>
      </div>

      {movies.length === 0 ? (
        <div className="m-5 justify-content-center flex-column w-font title">
          <h2>Loading</h2>
          <Loader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setLastPage(lastPage + 1)}
          hasMore={true}
        >
          <Row className="movie-container">
            {movies.length !== 0 ? (
              movies.map((movie) => (
                <MovieThumbnail
                  key={Math.floor(String(Math.random() * 10000000000000000))}
                  movie={movie}
                />
              ))
            ) : (
              <div className="alert alert-danger w-50" role="alert">
                There are not movies with this rate
              </div>
            )}
          </Row>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default MovieContainer;
