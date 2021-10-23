import React from "react";
import blog from "../images/bg-02.jpg";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-image">
        <img src={blog} alt="blog" />
      </div>
      <div className="blog-wrappper"></div>
    </div>
  );
}

export default Blog;
