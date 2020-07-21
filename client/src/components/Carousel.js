import React, { useState } from 'react';
import 'swiper/swiper.scss';
import 'swiper/swiper-vars.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.cjs.js';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';
import '../scss/app.scss';
import Swiper from 'react-id-swiper';
import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image5 from './img/img5.jpg';
import Pagination from './Pagination';

const carouselConfig = {
  containerClass: 'swiper-container carousel-slide',
  parallax: true,
  centeredSlides: true,
  speed: 500,
  effect: 'fade',
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
};

const Carousel = () => {
  const { parallaxSwiper, setParallaxSwiper } = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...carouselConfig} getSwiper={setParallaxSwiper}>
      {/* 1 */}
      <div className="carousel-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          data-swiper-autoplay="2000"
        >
          <img src={image1} alt="image1" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
          <h1 className="text-uppercase mb-2 font-weight-bold">Titre 1</h1>
          <p className="mb-5 small">
            1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, tenetur.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="carousel-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
          <h1 className="text-uppercase mb-2 font-weight-bold">Titre 2</h1>
          <p className="mb-5 small">
            2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, tenetur.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="carousel-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image3} alt="image3" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
          <h1 className="text-uppercase mb-2 font-weight-bold">Titre 3</h1>
          <p className="mb-5 small">
            3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, tenetur.
          </p>
        </div>
      </div>
      {/* 4 */}
      <div className="carousel-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image4} alt="image4" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
          <h1 className="text-uppercase mb-2 font-weight-bold">Titre 4</h1>
          <p className="mb-5 small">
            4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, tenetur.
          </p>
        </div>
      </div>
      {/* 5 */}
      <div className="carousel-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image5} alt="image5" />
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
          <h1 className="text-uppercase mb-2 font-weight-bold">Titre 5</h1>
          <p className="mb-5 small">
            5 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, tenetur.
          </p>
        </div>
      </div>
      <Pagination />
    </Swiper>
  );
};

export default Carousel;
