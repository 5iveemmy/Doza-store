import React, { useState } from "react";
import "./Boxes.css";
import SmallBox from "./SmallBox";
import banner01 from "../images/banner-01.jpg";
import banner02 from "../images/banner-02.jpg";
import banner03 from "../images/banner-03.jpg";

function Boxes() {
  const [click, setClick] = useState(false);
  const [sand, setSand] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const sandleClick = () => {
    setSand(!sand);
  };
  return (
    <>
      <div className="container">
        <div className="card legit">
          <SmallBox src={banner01} title="Women" season="Spring 2018" />
          <SmallBox src={banner02} title="Men" season="Spring 2018" />
          <SmallBox src={banner03} title="Accessories" season="New Trend" />
        </div>
      </div>
      <div className="product">
        <h1>PRODUCT OVERVIEW</h1>
        <section className="section">
          <div className="all">
            <button className="btn">All Products</button>
            <button className="btn">Women</button>
            <button className="btn">Men</button>
            <button className="btn">Bag</button>
            <button className="btn">Watches</button>
          </div>
          <div className="all-icons">
            <button className="filter" onClick={handleClick}>
              <i
                className={
                  click ? "fas fa-times fa-sm" : "fas fa-sort-amount-down"
                }
              />
              <span className="filtert"> Filter</span>
            </button>
            <button className="second-search" onClick={sandleClick}>
              <i className={sand ? "fas fa-times fa-sm" : "fas fa-search"} />
              <span className="searcht"> Search</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Boxes;
