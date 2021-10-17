import React from "react";
import Boxes from "../Boxes/Boxes";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

function Home() {
  return (
    <>
      <ImageSlider slides={SliderData} />
      <Boxes />
    </>
  );
}

export default Home;
