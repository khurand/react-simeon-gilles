import React from "react";
import { ListGroup } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <ListGroup variant='flush col'>
        <ListGroup.Item>
          <div className='row infos'>
            <div className='infos-text'>
              <h5>
                <i className='fas fa-map-marker-alt mr-2'></i>
                Mon Adresse
              </h5>
              <p>55 rue des Peupliers, 42qch CAZALS</p>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row infos'>
            <div className='infos-text'>
              <h5>
                <i className='fas fa-mobile-alt mr-2'></i>
                Mon Téléphone
              </h5>
              <p>0123456789</p>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row infos'>
            <div className='infos-text'>
              <h5>
                <i className='fas fa-at mr-2'></i>
                Mon Email
              </h5>
              <p>gilles.simeon@mail.test</p>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='row infos'>
            <div className='infos-text'>
              <h5>
                <i class='fas fa-briefcase mr-2'></i>
                SIREN
              </h5>
              <p>012345</p>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ContactInfo;
