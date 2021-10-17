import React from "react";
import "../styles/Boxes.css";
import SmallBox from "./SmallBox";
import banner01 from "../images/banner-01.jpg";
import banner02 from "../images/banner-02.jpg";
import banner03 from "../images/banner-03.jpg";
import Prodpage from "../pages/Prodpage";

function Boxes() {
  return (
    <>
      <div className="container">
        <div className="card legit">
          <SmallBox src={banner01} title="Women" season="Spring 2018" />
          <SmallBox src={banner02} title="Men" season="Spring 2018" />
          <SmallBox src={banner03} title="Accessories" season="New Trend" />
        </div>
        <h1 className="overview">PRODUCT OVERVIEW</h1>
        <Prodpage />
      </div>
    </>
  );
}

export default Boxes;
