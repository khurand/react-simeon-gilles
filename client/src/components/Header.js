import React from "react";

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='main'>
        <a className='nav-brand' href='/'>
          Logo
        </a>

        <ul className='nav-list'>
          <li className='nav-icon'>
            <a className='nav-link' href='#contact'>
              <i className='far fa-paper-plane'></i>
              <p className='nav-link-text'>Message</p>
            </a>
          </li>
          <li className='nav-icon'>
            <a className='nav-link' href='#services'>
              <i className='fas fa-flask'></i>
              <p className='nav-link-text'>Services</p>
            </a>
          </li>
          <li className='nav-icon'>
            <a className='nav-link' href='#about'>
              <i className='far fa-address-card'></i>
              <p className='nav-link-text'>Bio</p>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact'>
              Contact
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#services'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#about'>
              Qui suis-je ?
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
