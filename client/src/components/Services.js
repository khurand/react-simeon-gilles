import React from "react";
import { Card, CardDeck } from "react-bootstrap";

function Services() {
  const card = [
    {
      icon: require("./img/icn/procesador.svg"),
      titre: "card-title-1",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
    {
      icon: require("./img/icn/machine.svg"),
      titre: "card-title-2",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
    {
      icon: require("./img/icn/tarjeta-madre.svg"),
      titre: "card-title-3",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
    },
  ];
  return (
    <CardDeck className='container'>
      <div className='row'>
        {card.map((item, idx) => {
          return (
            <Card key={idx} className='col-sm-12 col-md-3 mb-lg-0'>
              <Card.Img variant='top' src={item.icon} />
              <Card.Body>
                <Card.Title>{item.titre}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </CardDeck>
  );
}

export default Services;