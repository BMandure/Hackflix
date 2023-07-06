import "./App.css";
import { useEffect } from "react";
import MyRoutes from "./components/Routes";
import NavScroll from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

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
