import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../scss/app.scss";
import image1 from "./img/img1.jpg";
import image2 from "./img/img2.jpg";
import image3 from "./img/img3.jpg";
import image4 from "./img/img4.jpg";
import image5 from "./img/img5.jpg";

function CarouselSlider() {
  return (
    <Carousel>
      {/* 1 */}
      <Carousel.Item>
        <img className='d-block w-100' src={image1} alt='First slide' />
        <Carousel.Caption>
          <h1 className='text-uppercase mb-2 font-weight-bold'>Titre 1</h1>
          <p className='mb-5 small'>
            1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, tenetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 2 */}
      <Carousel.Item>
        <img className='d-block w-100' src={image2} alt='Third slide' />

        <Carousel.Caption>
          <div className='col-md-6 offset-md-3 my-auto text-center text-white content'>
            <h1 className='text-uppercase mb-2 font-weight-bold'>Titre 2</h1>
            <p className='mb-5 small'>
              2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit, tenetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 3 */}
      <Carousel.Item>
        <img className='d-block w-100' src={image3} alt='Third slide' />

        <Carousel.Caption>
          <div className='col-md-6 offset-md-3 my-auto text-center text-white content'>
            <h1 className='text-uppercase mb-2 font-weight-bold'>Titre 3</h1>
            <p className='mb-5 small'>
              3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit, tenetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 4 */}
      <Carousel.Item>
        <img className='d-block w-100' src={image4} alt='Third slide' />

        <Carousel.Caption>
          <div className='col-md-6 offset-md-3 my-auto text-center text-white content'>
            <h1 className='text-uppercase mb-2 font-weight-bold'>Titre 4</h1>
            <p className='mb-5 small'>
              4 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit, tenetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 5 */}
      <Carousel.Item>
        <img className='d-block w-100' src={image5} alt='Third slide' />

        <Carousel.Caption>
          <div className='col-md-6 offset-md-3 my-auto text-center text-white content'>
            <h1 className='text-uppercase mb-2 font-weight-bold'>Titre 5</h1>
            <p className='mb-5 small'>
              5 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit, tenetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
