import React, { useContext } from "react";
import { Parallax } from "react-parallax";
import image2 from "./img/img-parallax2.jpg";
import image3 from "./img/img-parallax3.jpg";
import { Context } from "../contexts/Context";
import PropTypes from "prop-types";

const ParallaxBanner = ({ text1, text2 }) => {
  const context = useContext(Context);
  return (
    <div className='parallax-container' id='parallax'>
      <Parallax bgImage={image2} bgImageAlt='parallax banner' strength={300}>
        <h2 className='parallax-banner-text'>{text1}</h2>
      </Parallax>
      <div className='separator'>
        <p>
          <i className={context.logo}></i>
          {context.title}
        </p>
      </div>
      <Parallax bgImage={image3} bgImageAlt='parallax banner' strength={300}>
        <h2 className='parallax-banner-text'>{text2}</h2>
      </Parallax>
    </div>
  );
};

ParallaxBanner.defaultProps = {
  text1: "Ici se trouve un parallax qui déchire",
  text2: "Ici se trouve un autre parallax qui déchire",
};

ParallaxBanner.propTypes = {
  context: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default ParallaxBanner;
