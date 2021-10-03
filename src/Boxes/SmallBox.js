import React from "react";
import { Link } from "react-router-dom";

function SmallBox({ src, title, season, shop }) {
  return (
    <div className="spring">
      <img src={src} alt="Just-img" />
      <Link className="spring-link">
        <div className="spring-text">
          <span className="title">{title}</span>
          <span className="season">{season}</span>
        </div>
        <div className="shop">
          <div className="shop-text">Shop Now</div>
        </div>
      </Link>
    </div>
  );
}

export default SmallBox;
