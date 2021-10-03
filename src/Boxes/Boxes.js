import React from "react";
import "./Boxes.css";
import SmallBox from "./SmallBox";
import banner01 from "../images/banner-01.jpg";
import banner02 from "../images/banner-02.jpg";
import banner03 from "../images/banner-03.jpg";

function Boxes() {
  return (
    <div className="container">
      <div className="card legit">
        <SmallBox src={banner01} title="Women" season="Spring 2018" />
        <SmallBox src={banner02} title="Men" season="Spring 2018" />
        <SmallBox src={banner03} title="Accessories" season="New Trend" />
      </div>
    </div>
  );
}

export default Boxes;
