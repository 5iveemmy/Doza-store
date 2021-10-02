import React from "react";
import banner01 from "../images/banner-01.jpg";

function SmallBox() {
  return (
    <div className="container">
      <div className="card legit">
        <div className="spring">
          <img src={banner01} alt="Just-img" />
        </div>
      </div>
    </div>
  );
}

export default SmallBox;
