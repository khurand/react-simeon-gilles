import React from "react";
import { Parallax } from "react-parallax";
// import image from "./img/img-parallax.jpg";
import image2 from "./img/img-parallax2.jpg";
import image3 from "./img/img-parallax3.jpg";

const ParallaxBanner = () => {
  return (
    <div className='parallax-container' id='parallax'>
      <Parallax bgImage={image2} bgImageAlt='parallax banner' strength={300}>
        <h2 className='parallax-banner-text'>
          Ici se trouve un parallax qui déchire
        </h2>
      </Parallax>
      <div style={{ height: "100px" }}></div>
      <Parallax bgImage={image3} bgImageAlt='parallax banner' strength={300}>
        <h2 className='parallax-banner-text'>
          Ici se trouve un autre parallax qui déchire
        </h2>
      </Parallax>
    </div>
  );
};

export default ParallaxBanner;
