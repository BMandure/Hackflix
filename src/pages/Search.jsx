import Header from "../components/Header";
import "./search.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import MovieThumbnail from "../components/MovieThumbnail";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollUp from "../components/ScrollUp";

function Search() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(Number(1));
  const [searchField, setSearchField] = useState("");

  const getMovies = async (search) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=9eaf0ca08945585cbfa3a26f189cac4e`
    );
    setMovies([...movies, ...response.data.results]);
  };
  useEffect(() => {
    getMovies(searchField);
  }, [searchField]);
  useEffect(() => {
    getMovies(searchField);
  }, [page]);

  const handleChange = (event) => {
    setMovies([]);
    setSearchField(event.target.value);
  };

  return (
    <>
      <Header />
      <form className="search">
        <label htmlFor="search" className="search-label">
          Search movie:
        </label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
          value={searchField}
        />
      </form>

      {movies !== 0 ? (
        <div>
          <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage(page + 1)}
            hasMore={true}
          >
            <div className="movie-container row">
              {movies.length !== 0 ? (
                movies.map((movie) => (
                  <MovieThumbnail
                    key={Math.floor(String(Math.random() * 10000000000000000))}
                    movie={movie}
                  />
                ))
              ) : searchField === "" ? (
                <div className=" alert-search" role="alert">
                  Start searching something
                </div>
              ) : (
                <div className=" alert-search" role="alert">
                  There are not movies with this title
                </div>
              )}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <Loader />
      )}
      <ScrollUp />
    </>
  );
}

export default Search;
