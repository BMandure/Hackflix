import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./movie.css";
import Loader from "../components/Loader";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Rate, ConfigProvider, theme } from "antd";
import { NavLink } from "react-router-dom";
import Actor from "../components/Actor";

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [actors, setActors] = useState([]);

  const getMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=9eaf0ca08945585cbfa3a26f189cac4e&language=en-US`
    );
    console.log("AGREGAR MAP - Movie.jsx - Linea 21");
    setMovie(response.data);
  };

  const getActors = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=9eaf0ca08945585cbfa3a26f189cac4e&language=en-US`
    );
    setActors(response.data);
  };

  useEffect(() => {
    getMovie();
    getActors();
  }, []);

  return (
    <>
      {!movie ? (
        <Loader />
      ) : (
        <div className="movie-cont">
          <Row>
            <Col xs={3} className="w-font">
              <div className="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={`poster of ${movie.title}`}
                />
              </div>
              <h1 className="title">{movie.title}</h1>
              <h2 className="title status">{movie.status}</h2>
            </Col>

            <Col xs={9} className="w-font">
              <h2 className="lg-cafe border-title">Overview</h2>
              <p>{movie.overview}</p>
              <Row>
                <Col xs={6}>
                  <div className="full-item">
                    <div className="half-item">
                      <span> Rate</span>
                      {movie.vote_average}
                      <ConfigProvider
                        theme={{
                          algorithm: theme.darkAlgorithm,
                        }}
                      >
                        <Rate disabled defaultValue={movie.vote_average / 2} />
                      </ConfigProvider>
                    </div>
                    <div className="half-item">
                      <span>Votes</span>
                      <span>{movie.vote_count}</span>
                    </div>
                  </div>
                  <div className="full-item">
                    <span>Release date: </span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="full-item">
                    <span>Budget: </span>
                    <span>$ {movie.budget}</span>
                  </div>
                  <div className="full-item">
                    Production Countries:
                    <div className="d-flex">
                      {/*movie.production_countries.map((country) => (
                      <p>{country.name}</p>
                    ))*/}
                    </div>
                  </div>
                  <div className="full-item">
                    Spoken Languages:
                    <div className="d-flex">
                      {/*movie.spoken_languages.map((language) => (
                      <p>{language.name}</p>
                    ))*/}
                    </div>
                  </div>
                  <div className="full-item">
                    <NavLink to={movie.homepage} target="_blank">
                      Go to movie Page
                    </NavLink>
                  </div>
                  <div className="full-item">
                    Production countries:
                    {/*movie.production_companies.map((company) => (
                    <p>{company.name}</p>
                  ))*/}
                  </div>
                </Col>
                <Col xs={6}>Actors</Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
      <NavLink to="/" className="go-back-movie">
        &larr; Go Back
      </NavLink>
    </>
  );
}

export default Movie;
