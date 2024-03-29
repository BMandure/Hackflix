import "./actor.css";
import imgPoster from "../assets/movie-roll.jpg";
function Actor({ actor }) {
  return (
    <div className="d-flex actor-card">
      <img
        className="actor-img"
        src={
          actor.profile_path === null
            ? imgPoster
            : `https://image.tmdb.org/t/p/original/${actor.profile_path}`
        }
        alt={`Profile image of ${actor.name}`}
      />
      <div className="actor-info">
        <strong className="actor-name">{actor.name}</strong>
        <strong>As: {actor.character}</strong>
      </div>
    </div>
  );
}

export default Actor;
