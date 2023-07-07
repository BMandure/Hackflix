import "./home.css";
import Header from "../components/Header";
import MovieContainer from "../components/MovieContainer";
import ScrollUp from "../components/ScrollUp";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="home">
      <Header />
      <MovieContainer />
      <ScrollUp />
    </div>
  );
}

export default Home;
