import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import CollagePortfolio from "./components/Portfolio/CollagePortfolio";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/custom_photoshoot"
          element={<CollagePortfolio />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
