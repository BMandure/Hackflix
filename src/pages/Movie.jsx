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
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Error404 from "./Error404";
import imgPoster from "../assets/movie-roll.jpg";

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [actors, setActors] = useState();
  const [error, setError] = useState(false);

  const getMovie = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=9eaf0ca08945585cbfa3a26f189cac4e&language=en-US`
      )
      .catch(() => setError(true));
    setMovie(response.data);
  };

  const getActors = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=9eaf0ca08945585cbfa3a26f189cac4e&language=en-US`
    );
    setActors(response.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovie();
    getActors();
  }, []);

  return error ? (
    <Error404 title="Movie Not Found" message="Insert a valid ID" />
  ) : (
    <>
      {!movie ? (
        <div className="movie-cont justify-content-center flex-column w-font title">
          <h2>Loading</h2>
          <Loader />
        </div>
      ) : (
        <div className="movie-cont">
          <Row className="movie-row">
            <Col xs={12} lg={3} className="w-font">
              <div className="movie-info-container">
                <div className="movie-poster">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : imgPoster
                    }
                    alt={`poster of ${movie.title}`}
                  />
                </div>
                <h1 className="title">{movie.title}</h1>
                <h2 className="title status">Status: {movie.status}</h2>
                <div>
                  <div className="centered-item">
                    <span>Rate</span>
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
                {movie.homepage !== null && (
                  <div>
                    <NavLink
                      to={movie.homepage}
                      target="_blank"
                      className="btn-link w-100 my-3"
                    >
                      GO TO MOVIE PAGE &rarr;
                    </NavLink>
                  </div>
                )}
              </div>
            </Col>

            <Col xs={12} lg={9} className="w-font">
              <Row className="overview-container">
                <Col xs={12} xl={6}>
                  <h2 className="lg-cafe ">Overview</h2>
                  <p className="p-4">{movie.overview}</p>
                  <div className="lg-cafe">
                    <h2 className="lg-cafe">Genres</h2>
                    <Row className="genre-container">
                      {movie.genres.map((genre) => (
                        <Col
                          xs={12}
                          sm={4}
                          md={3}
                          key={genre.id}
                          className="genre-badge"
                        >
                          {genre.name}
                        </Col>
                      ))}
                    </Row>
                  </div>

                  {!actors ? (
                    <Loader />
                  ) : (
                    <div>
                      <div className="w-100 my-3">
                        <h2 className="lg-cafe ">Actors</h2>

                        <CCarousel controls transition="slide" interval={3000}>
                          {actors.cast.map((actor) => (
                            <CCarouselItem key={actor.id}>
                              <Actor actor={actor} />
                            </CCarouselItem>
                          ))}
                        </CCarousel>
                      </div>
                    </div>
                  )}
                </Col>
                <Col xs={12} xl={6}>
                  <h2 className="lg-cafe ">Information</h2>
                  <div className="full-item row">
                    <p className="w-50 fw-bold">Release date: </p>
                    <p className="w-50 align-right">{movie.release_date}</p>
                  </div>
                  <div className="full-item row">
                    <p className="w-50 fw-bold">Budget: </p>
                    <p className="w-50 align-right">
                      {movie.budget.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <p className="w-50 fw-bold">Revenue: </p>
                    <p className="w-50 align-right">
                      {movie.revenue.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                  </div>
                  <div className="full-item row">
                    <p className="w-50 py-0 fw-bold">Production Countries:</p>
                    <div className="px-0 col-6 align-right">
                      {movie.production_countries.map((country) => (
                        <p className="py-0 px-0" key={country.iso_3166_1}>
                          {country.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="full-item row">
                    <p className="w-50 fw-bold">Spoken Languages:</p>
                    <div className="px-0 col-6 align-right">
                      {movie.spoken_languages.map((language) => (
                        <p key={language.iso_639_1} className="px-0 py-0">
                          {language.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="full-item row">
                    <p className="col-6 py-0 fw-bold">Production Companies:</p>
                    <div className="px-0 col-6 align-right">
                      {movie.production_companies.map((company) => (
                        <p key={company.id} className="company-name px-0 py-0">
                          {company.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
      <NavLink to="/" className="go-back-movie bg-dark">
        &larr; Go Back
      </NavLink>
    </>
  );
}

export default Movie;
