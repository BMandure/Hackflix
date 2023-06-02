import "./home.css";
import Header from "../components/Header";
import MovieContainer from "../components/MovieContainer";
import ScrollUp from "../components/ScrollUp";

function Home() {
  return (
    <div id="home">
      <Header />
      <MovieContainer />

      <ScrollUp />
    </div>
  );
}

export default Home;
