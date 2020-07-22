import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "react-bootstrap";

function About() {
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
    <CardDeck>
      {card.map((item, idx) => {
        return (
          <Card key={idx}>
            <Card.Img variant='top' src={item.icon} />
            <Card.Body>
              <Card.Title>{item.titre}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        );
      })}
    </CardDeck>
  );
}

export default About;
