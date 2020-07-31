import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="infos">
        <h5>
          <span>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          Mon Adresse
        </h5>
        <p>55 rue des Peupliers, 42qch CAZALS</p>
      </div>
      <hr />
      <div className="infos">
        <h5>
          <span>
            <i className="fas fa-mobile-alt"></i>
          </span>
          Mon Téléphone
        </h5>
        <p>0123456789</p>
      </div>
      <hr />
      <div className="infos">
        <h5>
          <span>
            <i className="fas fa-at"></i>
          </span>
          Mon Email
        </h5>
        <p>gilles.simeon@mail.test</p>
        <hr />
      </div>
    </div>
  );
};

export default ContactInfo;
