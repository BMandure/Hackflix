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
  const [movie, setMovie] = useState();
  const [actors, setActors] = useState();

  const getMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=9eaf0ca08945585cbfa3a26f189cac4e&language=en-US`
    );
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
              <h2 className="title status">Status: {movie.status}</h2>
              <div>
                <NavLink
                  to={movie.homepage}
                  target="_blank"
                  className="btn-link w-100 my-3"
                >
                  GO TO MOVIE PAGE &rarr;
                </NavLink>
              </div>
            </Col>

            <Col xs={9} className="w-font">
              <h2 className="lg-cafe border-title">Overview</h2>
              <p>{movie.overview}</p>
              <Row className="my-4 mx-5">
                <Col xs={12} className="mx-auto">
                  <div className="full-item border-0">
                    <div className="centered-item">
                      <span> Rate</span>
                      <ConfigProvider
                        theme={{
                          algorithm: theme.darkAlgorithm,
                        }}
                      >
                        <Rate disabled defaultValue={movie.vote_average / 2} />
                      </ConfigProvider>
                      <div className="centered-item no-column my-2">
                        <span>Votes</span>
                        <span>{movie.vote_count}</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="full-item row">
                    <p className="col-6 fw-bold">Release date: </p>
                    <p className="col-6 align-right">{movie.release_date}</p>
                  </div>

                  <div className="full-item row">
                    <p className="col-6 fw-bold">Budget: </p>
                    <p className="col-6 align-right">$ {movie.budget}</p>
                  </div>

                  <div className="full-item row">
                    <p className="col-6 py-0 fw-bold">Production Countries:</p>
                    <div className="px-0 col-6 align-right">
                      {movie.production_countries.map((country) => (
                        <p className="py-0" key={country.iso_3166_1}>
                          {country.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="full-item row">
                    <p className="col-6 fw-bold">Spoken Languages:</p>
                    <div className="px-0 col-6 align-right">
                      {movie.spoken_languages.map((language) => (
                        <p key={language.iso_639_1}>{language.name}</p>
                      ))}
                    </div>
                  </div>

                  <div className="full-item row">
                    <p className="col-6 py-0 fw-bold">Production Companies:</p>
                    <div className="px-0 col-6 align-right">
                      {movie.production_companies.map((company) => (
                        <p className="py-0" key={company.id}>
                          {company.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
              {!actors ? (
                <Loader />
              ) : (
                <div className="full-item border-0 mx-auto">
                  <div className="w-100">
                    <span className="centered-item">Actors</span>
                    {alert(
                      "agregar paginador en actors: movie.jsx - linea 135"
                    )}
                    {actors.cast.map(
                      (actor) => (
                        console.log(actor),
                        (<Actor key={actor.id} actor={actor} />)
                      )
                    )}
                  </div>
                </div>
              )}
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
