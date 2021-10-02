import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="small-nav">
        <div className="free">
          <p>Free shipping for standard order over $100</p>
        </div>
        <ul className="help">
          <li>Help & FAQs</li>
          <li>My Account</li>
          <li>EN</li>
          <li>USD</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
