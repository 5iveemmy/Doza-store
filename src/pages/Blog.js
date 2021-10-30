import React from "react";
import blog from "../images/bg-02.jpg";
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
          <div className="season">
            <div className="season-wrap">
              <div className="winter">
                <div className="winter-image">
                  <img src={blogOne} alt="blog01" className="blog-one-image" />
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
