import { useState, useEffect } from "react";
import "./App.css";
import MyRoutes from "./components/Routes";
import NavScroll from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import { useScrollPosition } from "./hooks/useItsAtTop";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavScroll />
      <MyRoutes />
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
