import React from "react";

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='main'>
        <a className='navbar-brand' href='/'>
          Logo
        </a>

        <ul className='nav-list'>
          <li className='nav-icon'>
            <a className='nav-link' href='#contact'>
              <i class='far fa-address-card'></i>
            </a>
          </li>
          <li className='nav-icon'>
            <a className='nav-link' href='#services'>
              <i class='fas fa-flask'></i>
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
        </ul>
      </div>
    </nav>
  );
};

export default Header;
