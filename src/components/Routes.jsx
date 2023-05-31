import { Routes, Route, useParams } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Movie from "../pages/Movie";
import Error404 from "../pages/Error404";
import Contact from "../pages/Contact";
import Search from "../pages/Search";
import RedirectToMovie from "./RedirectToMovie";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/pelicula/:id" element={<RedirectToMovie />} />
        <Route
          path="*"
          element={
            <Error404
              title="Error 404"
              message="The page you are looking for is not here..."
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}
export default MyRoutes;
