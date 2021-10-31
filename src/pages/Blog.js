import React from "react";
import blog from "../images/bg-02.jpg";
import { Link } from "react-router-dom";
import "../styles/Pages.css";
import blogOne from "../images/blog-04.jpg";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-image">
        <img src={blog} alt="blog" />
        <div className="blog-text-wrapper">
          <h1 className="blog-text">Blog</h1>
        </div>
      </div>
      <section className="blog-sect">
        <div className="blog-sect-wrapper">
          <div className="for-winter">
            <div className="winter">
              <Link to="/">
                <div className="winter-image">
                  <img src={blogOne} alt="blog01" className="blog-one-image" />
                </div>
                <div className="season-date">
                  <span className="num-span">01</span>
                  <span className="month-span">Oct 2021</span>
                </div>
              </Link>
              <div className="winter-text">
                <h4>
                  {" "}
                  <Link> 8 Inspiring Ways to Wear Dresses in the winter</Link>
                </h4>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos, Fusce eget dictum tortot.
                  Donec dictum vitae sapien eu varius
                </p>
                <div className="winter-tiny">
                  <span>
                    <span>
                      <span>
                        <span>By</span>Admin
                      </span>
                      <span>|</span>
                    </span>
                    <span>
                      StreetStyle,Fashion, Couple
                      <span>|</span>
                    </span>
                    <span>8 Comments</span>
                  </span>
                  <Link>CONTINUE READING</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
