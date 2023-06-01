import "./home.css";
import Header from "../components/Header";
import MovieContainer from "../components/MovieContainer";
import ScrollUp from "../components/ScrollUp";
import Search from "../components/Search";

function Home() {
  return (
    <div id="home">
      <Header />
      <MovieContainer />
      <ScrollUp />
      <Search />
    </div>
  );
}

export default Home;
