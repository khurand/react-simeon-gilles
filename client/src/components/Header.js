import React from 'react';
import { Jump } from 'react-jump';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="main">
        <a className="nav-brand" href="/">
          Logo
        </a>

        <ul className="nav-list">
          <li className="nav-icon">
            <Jump
              target={'.contact-form'}
              options={{ duration: 2000, offset: -25 }}
            >
              <a className="nav-link" href="#contact">
                <i className="far fa-paper-plane"></i>
                <p className="nav-link-text">Message</p>
              </a>
            </Jump>
          </li>
          <li className="nav-icon">
            <Jump target={'#services'} options={{ duration: 2000 }}>
              <a className="nav-link" href="#services">
                <i className="fas fa-flask"></i>
                <p className="nav-link-text">Services</p>
              </a>
            </Jump>
          </li>
          <li className="nav-icon">
            <Jump target={'#about'} options={{ duration: 2000 }}>
              <a className="nav-link" href="#about">
                <i className="far fa-address-card"></i>
                <p className="nav-link-text">Bio</p>
              </a>
            </Jump>
          </li>

          <li className="nav-item">
            <div className="winker"></div>
            <Jump target={'#contact'} options={{ duration: 2000 }}>
              <a className="nav-link" href="#">
                Contact
              </a>
            </Jump>
          </li>
          <li className="nav-item">
            <div className="winker"></div>
            <Jump target={'#services'} options={{ offset: -200 }}>
              <a className="nav-link" href="#">
                Services
              </a>
            </Jump>
          </li>
          <li className="nav-item">
            <div className="winker"></div>
            <Jump target={'#about'}>
              <a className="nav-link" href="#">
                Qui suis-je ?
              </a>
            </Jump>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
