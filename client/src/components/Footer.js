import React, { useState } from "react";
import Iframe from "react-iframe";
import { Button } from "react-bootstrap";
import MentionsModal from "./MentionsModal";

const Footer = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='footer'>
      <div className='container-fluid'>
        <div className='row m-sm-0 m-xs-0'>
          <div className='col col-md-6 col-sm-12 col-xs-12 map mb-sm-3'>
            <Iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45416.789698651795!2d1.180907640199478!3d44.647126649404726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac9e261de68331%3A0x406f69c2f3fcd20!2s46250%20Cazals!5e0!3m2!1sfr!2sfr!4v1596537881941!5m2!1sfr!2sfr'
              className='iframe'
              display='initial'
              position='relative'
            />
          </div>
          <div className='col col-md-6 col-sm-12 col-xs-12 content mb-sm-3'>
            <div className='content-text'>
              <h4>Icon footer</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis facilis necessitatibus ratione maiores odio, sequi
                reiciendis facere nostrum voluptate deserunt.
              </p>
            </div>
            <div className='footer-links'>
              <a className='link' href='#'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a className='link' href='#'>
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a className='link' href='#'>
                <i className='fab fa-twitter'></i>
              </a>
              <a className='link' href='#'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
          <div className='col col-md-12 col-sm-12 col-xs-12 mentions'>
            <a
              href='#'
              className='mentions-link button'
              onClick={() => setModalShow(true)}
            >
              Mentions légales
            </a>
            <MentionsModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            <div className='copyright'>Copyright</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
