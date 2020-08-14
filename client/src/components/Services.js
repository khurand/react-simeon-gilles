import React from "react";
import { Card, CardDeck } from "react-bootstrap";

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
  return (
    <div className='card-container' id='services'>
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
