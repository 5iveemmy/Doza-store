import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHeart, MdSearch, IoMdCart } from "react-icons/all";
import "../styles/Navbar.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="nav-container">
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
        <nav className={navbar ? " big-nav active" : "big-nav"}>
          <div className="left">
            <h1>
              DOZA <span>STORE</span>
            </h1>
            <ul className={click ? "pages-links active" : "pages-links"}>
              <li className="big-drop jux">
                <Link className="big-links" to="/">
                  {" "}
                  Home
                </Link>
                <ul className="home-drop">
                  <li>
                    <Link className="drop" to="/">
                      Homepage 1
                    </Link>
                  </li>
                  <li>
                    <Link className="drop" to="/">
                      Homepage 1
                    </Link>
                  </li>
                  <li>
                    <Link className="drop" to="/">
                      Homepage 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="jux">
                <Link className="big-links" to="/">
                  Shop
                </Link>
              </li>

              <li className="jux">
                <Link className="big-links" to="/">
                  Features
                </Link>
              </li>
              <li className="jux">
                <Link className="big-links" to="/">
                  Blog
                </Link>
              </li>
              <li className="jux">
                <Link className="big-links" to="/">
                  About
                </Link>
              </li>
              <li className="jux">
                <Link className="big-links" to="/">
                  Contact
                </Link>
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
            <Link className="icons ">
              <BsHeart />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={click ? "fas fa-times fa-sm" : "fas fa-bars fa-sm"}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
