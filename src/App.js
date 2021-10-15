import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Boxes from "./Boxes/Boxes";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ImageSlider slides={SliderData} />
        <Boxes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
