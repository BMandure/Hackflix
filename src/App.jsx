import { useState, useEffect } from "react";
import "./App.css";
import MyRoutes from "./components/Routes";
import NavScroll from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavScroll />
      <MyRoutes />
      <Footer />
    </>
  );
}

export default App;
