import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";

import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
