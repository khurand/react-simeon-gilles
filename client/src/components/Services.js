import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import PropTypes from "prop-types";

const Services = ({ title, cards }) => {
  return (
    <div className='card-container section' id='services'>
      <h3 className='container-title'>{title}</h3>
      <CardDeck>
        <div className='row'>
          {cards.map((item, idx) => {
            return (
              <Card
                key={idx}
                className='col-sm-12 col-md-3 mb-lg-0'
                data-aos='flip-up'
                data-aos-delay={item.animationDelay}
                data-aos-offset='300'
              >
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
};

Services.defaultProps = {
  title: "Mes Services",
  cards: [
    {
      icon: require("./img/icn/procesador.svg"),
      titre: "card-title-1",
      text:
        "1 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
      animationDelay: "200",
    },
    {
      icon: require("./img/icn/medical-equipment.svg"),
      titre: "card-title-2",
      text:
        "2 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
      animationDelay: "300",
    },
    {
      icon: require("./img/icn/sonography.svg"),
      titre: "card-title-3",
      text:
        "3 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nobis.",
      animationDelay: "400",
    },
  ],
};

Services.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

export default Services;
