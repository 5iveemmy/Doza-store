import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { TiMediaPlay, TiMediaPlayReverse } from "react-icons/all";
import "../styles/ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <TiMediaPlayReverse className="left-arrow" onClick={prevSlide} />
      <TiMediaPlay className="right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.images} alt="slides" className="slide-img" />
            )}
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="jus">
                  <h1>{slide.text}</h1>
                  <h2>{slide.bigText}</h2>
                  <button className="jus-btn">{slide.thebtn}</button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
