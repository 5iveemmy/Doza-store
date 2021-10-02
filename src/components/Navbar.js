import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsHeart, MdSearch, IoMdCart } from "react-icons/all";
function Navbar() {
  return (
    <>
      <div className="small-nav">
        <div className="free">
          <p>Free shipping for standard order over $100</p>
        </div>
        <ul className="help">
          <li>
            <Link className="small-links">Help & FAQs</Link>
          </li>
          <li>
            <Link className="small-links">My Account</Link>
          </li>
          <li>
            <Link className="small-links">EN</Link>
          </li>
          <li className="line">
            <Link className="small-links">USD</Link>
          </li>
        </ul>
      </div>
      <nav className="big-nav">
        <div className="left">
          <h1>
            DOZA <span>STORE</span>
          </h1>
          <ul className="pages-links">
            <li>
              <Link className="big-links">Home</Link>
            </li>
            <li>
              <Link className="big-links">Shop</Link>
            </li>

            <li>
              <Link className="big-links">Features</Link>
            </li>
            <li>
              <Link className="big-links">Blog</Link>
            </li>
            <li>
              <Link className="big-links">About</Link>
            </li>
            <li>
              <Link className="big-links">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="shopping-icons">
          <Link className="icons">
            <MdSearch />
          </Link>
          <Link className="icons">
            <IoMdCart />
          </Link>
          <Link className="icons">
            <BsHeart />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
