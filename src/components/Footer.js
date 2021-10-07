import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import icon01 from "../images/icons/icon-pay-01.png";
import icon02 from "../images/icons/icon-pay-02.png";
import icon03 from "../images/icons/icon-pay-03.png";
import icon04 from "../images/icons/icon-pay-04.png";
import icon05 from "../images/icons/icon-pay-05.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="row">
          <div className="categories">
            <h4>CATEGORIES</h4>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Watches</li>
            </ul>
          </div>
          <div className="hlep">
            <h4>HELP</h4>
            <ul>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="touch">
            <h4>GET IN TOUCH</h4>
            <p>
              Any questions? Let us know in store at 8th floor,379 Hudson St,New
              York, NY 10018 or call us on (+1)96 716 6879
            </p>
            <div className="socials">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
            </div>
          </div>
          <div className="newsletter">
            <h4>NEWSLETTER</h4>
            <form>
              <div className="for-input">
                <input
                  type="email"
                  placeholder="email@example.com"
                  // className="email"
                />
              </div>
              <div className="for-sub">
                <button className="sub">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom">
          <div className="pay-cards">
            <Link to="/#">
              {" "}
              <img src={icon01} alt="icon-pay" />
            </Link>
            <Link to="/#">
              {" "}
              <img src={icon02} alt="icon-pay" />
            </Link>
            <Link to="/#">
              {" "}
              <img src={icon03} alt="icon-pay" />
            </Link>
            <Link to="/#">
              {" "}
              <img src={icon04} alt="icon-pay" />
            </Link>
            <Link to="/#">
              {" "}
              <img src={icon05} alt="icon-pay" />
            </Link>
          </div>
          <p>Copyright @2021 All rights reserved | Made by 5iveemmy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
