import React, { useRef, useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";
import gsap from "gsap";

function Services() {
  const cards = [
    {
      icon: require("./img/icn/procesador.svg"),
      titre: "card-title-1",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
    {
      icon: require("./img/icn/medical-equipment.svg"),
      titre: "card-title-2",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
    {
      icon: require("./img/icn/sonography.svg"),
      titre: "card-title-3",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
  ];

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          //do your actions here
          gsap.to(ref.current, 2, {
            opacity: 1,
            x: 0,
            ease: "Power4.easeOut",
            stagger: {
              amount: 0.5,
            },
          });
          console.log("It works!");
        }

        if (entry.intersectionRatio > 0.6) {
          observer.unobserve(entry.target);
          console.log("stopped");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div className='card-container' id='services' ref={ref}>
      <CardDeck>
        <div className='row'>
          {cards.map((item, idx) => {
            return (
              <Card key={idx} className='col-sm-12 col-md-3 mb-lg-0'>
                <Card.Img variant='top' src={item.icon} />
                <Card.Body>
                  <Card.Title>
                    <h5>{item.titre}</h5>
                  </Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </CardDeck>
    </div>
  );
}

export default Services;
