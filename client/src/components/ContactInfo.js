import React from "react";
import { ListGroup } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <ListGroup variant='flush'>
        <ListGroup.Item data-aos='zoom-out-down'>
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
        <ListGroup.Item data-aos='zoom-out-down' data-aos-delay='200'>
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
        <ListGroup.Item data-aos='zoom-out-down' data-aos-delay='300'>
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
        <ListGroup.Item data-aos='zoom-out-down' data-aos-delay='400'>
          <div className='row infos'>
            <div className='infos-text'>
              <h5>
                <i className='fas fa-briefcase mr-2'></i>
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
