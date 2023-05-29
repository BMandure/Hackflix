import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Movie from "../pages/Movie";
import Error404 from "../pages/Error404";
import Contact from "../pages/Contact";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default MyRoutes;
