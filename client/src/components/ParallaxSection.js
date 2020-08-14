import React from "react";
import { Parallax } from "react-parallax";
import image from "./img/img6-banner.jpg";

const ParallaxSection = () => {
  return (
    <div className='parallax-container' id='parallax'>
      <Parallax
        bgImage={image}
        bgImageAlt='parallax banner'
        blur={{ min: -15, max: 15 }}
      >
        {/* <h2 className='parallax-banner-text'>
        Ici se trouve le parallax qui déchire
      </h2> */}
      </Parallax>
    </div>
  );
};

export default ParallaxSection;
