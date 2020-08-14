import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Carousel from "react-bootstrap/Carousel";
import "../scss/app.scss";

const params = {
  fade: true,
  pause: false,
};

function CarouselSlider() {
  const slides = [
    {
      img: require("./img/img1.jpg"),
      titre: "Titre 1",
      text:
        "1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, tenetur.",
    },
    {
      img: require("./img/img2.jpg"),
      titre: "Titre 2",
      text:
        "2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, tenetur.",
    },
    {
      img: require("./img/img3.jpg"),
      titre: "Titre 3",
      text:
        "3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, tenetur.",
    },
    {
      img: require("./img/img4.jpg"),
      titre: "Titre 4",
      text:
        "4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, tenetur.",
    },
    {
      img: require("./img/img5.jpg"),
      titre: "Titre 5",
      text:
        "5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, tenetur.",
    },
  ];

  let CarouText = useRef(null);

  useEffect(() => {
    gsap.from(CarouText.current, 1, {
      opacity: 0,
      x: "-100%",
    });
  }, []);

  return (
    <div className='carousel-container' id='carousel'>
      <Carousel {...params}>
        {slides.map((item, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img className='d-block w-100' src={item.img} alt='slide' />
              <Carousel.Caption>
                <div
                  className='col-md-6 offset-md-3 my-auto text-center text-white mb-3 carousel-content'
                  ref={CarouText}
                >
                  <h1 className='text-uppercase mb-2 font-weight-bold'>
                    {item.titre}
                  </h1>
                  <p className='carousel-content-text'>{item.text}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
