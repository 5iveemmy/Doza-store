import React from "react";
import blog from "../images/bg-02.jpg";
import "../styles/Pages.css";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-image">
        <img src={blog} alt="blog" />
        <div className="blog-text-wrapper">
          <h1 className="blog-text">Blog</h1>
        </div>
      </div>
    </div>
  );
}

export default Blog;
