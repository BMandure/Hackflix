import { useState } from "react";
import "./App.css";
import MyRoutes from "./components/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MyRoutes />
      <Footer />
    </>
  );
}

export default App;
