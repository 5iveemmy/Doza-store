import React from "react";
import "./Boxes.css";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

function MidBox({ src, type, price }) {
  return (
    <>
      <div className="picture">
        <div className="product-img">
          <img src={src} alt="product" className="for-product" />
          <Link className="quick">
            <button className="quick-btn">Quick View</button>
          </Link>
        </div>
        <div className="picture-text">
          <div className="picture-left">
            <Link className="espirit">{type}</Link>
            <span className="price">{price}</span>
          </div>
          <BsHeart className="love" />
        </div>
      </div>
    </>
  );
}
export default MidBox;
