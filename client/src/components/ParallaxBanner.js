import React from "react";
import { Parallax } from "react-parallax";
import image2 from "./img/img-parallax2.jpg";
import image3 from "./img/img-parallax3.jpg";

const ParallaxBanner = () => {
  const scroll = () => {
    console.log("ça scroll...");
  };

  return (
    <div className='parallax-container' id='parallax' onScroll={scroll}>
      <Parallax bgImage={image2} bgImageAlt='parallax banner' strength={300}>
        <h2 className='parallax-banner-text'>
          Ici se trouve un parallax qui déchire
        </h2>
      </Parallax>
      <div className='separator'>
        <p>Séparateur</p>
      </div>
      <Parallax bgImage={image3} bgImageAlt='parallax banner' strength={300}>
        <h2 className='parallax-banner-text'>
          Ici se trouve un autre parallax qui déchire
        </h2>
      </Parallax>
    </div>
  );
};

export default ParallaxBanner;
