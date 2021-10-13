import React, { useState } from "react";
import "../styles/Boxes.css";
import SmallBox from "./SmallBox";
import banner01 from "../images/banner-01.jpg";
import banner02 from "../images/banner-02.jpg";
import banner03 from "../images/banner-03.jpg";
import product01 from "../images/product-01.jpg";
import product02 from "../images/product-02.jpg";
import product03 from "../images/product-03.jpg";
import product04 from "../images/product-04.jpg";
import product05 from "../images/product-05.jpg";
import product06 from "../images/product-06.jpg";
import product07 from "../images/product-07.jpg";
import product08 from "../images/product-08.jpg";
import product09 from "../images/product-09.jpg";
import product10 from "../images/product-10.jpg";
import product11 from "../images/product-11.jpg";
import product12 from "../images/product-12.jpg";
import product13 from "../images/product-13.jpg";
import product14 from "../images/product-14.jpg";
import product15 from "../images/product-15.jpg";
import product16 from "../images/product-16.jpg";
import MidBox from "./MidBox";
import { Link } from "react-router-dom";
import { BsCircle, BsFillCircleFill, BiSearch } from "react-icons/all";

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
        <div className={click ? "first-box" : "display"}>
          <div className="first-box-wrap">
            <div className="sort">
              <h3>Sort By</h3>
              <ul>
                <li>
                  <Link className>Default</Link>
                </li>
                <li>
                  <Link>Popularity</Link>
                </li>
                <li>
                  <Link>Average rating</Link>
                </li>
                <li>
                  <Link>Newness</Link>
                </li>
                <li>
                  <Link>Price: Low to High</Link>
                </li>
                <li>
                  <Link>Price: High to low</Link>
                </li>
              </ul>
            </div>
            <div className="money">
              <h3>Price</h3>
              <ul>
                <li>
                  <Link>All</Link>
                </li>
                <li>
                  <Link>$0.00 - $50.00</Link>
                </li>
                <li>
                  <Link>$50.00 - $100.00</Link>
                </li>
                <li>
                  <Link>$100.00 - $100.00</Link>
                </li>
                <li>
                  <Link>$150.00 - $200.00</Link>
                </li>
                <li>
                  <Link>$200.00+ </Link>
                </li>
              </ul>
            </div>
            <div className="color">
              <h3>Color</h3>
              <ul>
                <li>
                  <span className="circle black">
                    <BsFillCircleFill />
                  </span>
                  <Link>Black</Link>
                </li>
                <li>
                  <span className="circle blue">
                    <BsFillCircleFill />
                  </span>
                  <Link>Blue</Link>
                </li>
                <li>
                  <span className="circle grey">
                    <BsFillCircleFill />
                  </span>
                  <Link>Grey</Link>
                </li>
                <li>
                  <span className="circle green">
                    <BsFillCircleFill />
                  </span>
                  <Link>Green</Link>
                </li>
                <li>
                  <span className="circle red">
                    <BsFillCircleFill />
                  </span>
                  <Link>Red</Link>
                </li>
                <li>
                  <span className="circle white">
                    <BsCircle />
                  </span>
                  <Link>White</Link>
                </li>
              </ul>
            </div>
            <div className="tags">
              <h3>Tags</h3>
              <div className="tags-buttons">
                <button className="fashion">Fashion</button>
                <button className="lifestyle">Lifestyle</button>
                <button className="denim">Denim</button>
                <button className="street">Streetstyle</button>
                <button className="craft">Crafts</button>
              </div>
            </div>
          </div>
        </div>
        <div className={sand ? "search-box" : "display"}>
          <button className="search-btn">
            {" "}
            <BiSearch />{" "}
          </button>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="pictures">
          <div className="pictures-wrap">
            <MidBox src={product01} type="Esprit Ruffle Shirt" price="$16.64" />
            <MidBox src={product02} type="Herschel supply" price="$35.31" />
            <MidBox
              src={product03}
              type="Classical Trench Coat"
              price="$75.00"
            />
            <MidBox src={product04} type="Front Pocket jumper" price="$34.75" />
            <MidBox
              src={product05}
              type="Shirt in Stretch Cotton"
              price="$52.66"
            />
            <MidBox
              src={product06}
              type="Pieces Metallic Printed"
              price="$18.96"
            />
            <MidBox
              src={product07}
              type="Femmee T-Shirt in Stripe"
              price="$25.85"
            />
            <MidBox src={product08} type="T-Shirt with Sleeve" price="$18.49" />
            <MidBox src={product09} type="Pretty Little Thing" price="$54.79" />
            <MidBox src={product10} type="Square Neck Back" price="$28.64" />
            <MidBox src={product11} type="Heschel supply" price="$63.15" />
            <MidBox src={product12} type="Heschel supply" price="$18.49" />
            <MidBox src={product13} type="T-Shirt with Sleeve" price="$54.79" />
            <MidBox src={product14} type="Pretty Little Thing" price="$88.65" />
            <MidBox
              src={product15}
              type="Mini Silver Mesh Watch"
              price="$29.64"
            />
            <MidBox src={product16} type="Square Neck Back" price="$29.64" />
          </div>
        </div>
        <div className="load">
          <button className="load-btn">LOAD MORE</button>
        </div>
      </div>
    </>
  );
}

export default Boxes;
