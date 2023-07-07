import Header from "../components/Header";
import "./search.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import MovieThumbnail from "../components/MovieThumbnail";
import InfiniteScroll from "react-infinite-scroll-component";

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
    setMovies([]);
    getMovies(searchField);
  }, [searchField]);

  useEffect(() => {
    getMovies(searchField);
  }, [page]);

  const handleChange = (event) => {
    setMovies([]);
    window.scrollTo(0, 0);
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
          className="lg-cafe"
          onChange={handleChange}
          value={searchField}
          placeholder="Movie name..."
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
                  Hmmm... I didn't find any movie with the name: "{searchField}
                  ".
                </div>
              )}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Search;
