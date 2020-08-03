import React from "react";
import { Parallax } from "react-parallax";
import image from "./img/img6-banner.jpg";

const ParallaxSection = () => {
  return (
    <Parallax bgImage={image} strenght={300} bgImageAlt='parallax banner'>
      <h2 className='parallax-banner-text'>
        Ici se trouve le parallax qui déchire
      </h2>
    </Parallax>
  );
};

export default ParallaxSection;
