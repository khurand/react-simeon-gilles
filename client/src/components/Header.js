import React, { useContext } from "react";
import { Context } from "../contexts/Context";
import PropTypes from "prop-types";

const Header = () => {
  const context = useContext(Context);

  // Hide header when scrolldown
  const maxScrollXValue = document.body.scrollWidth;

  // when #header is at bottom
  if (maxScrollXValue < 450) {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.bottom = "0";
      } else {
        document.getElementById("header").style.bottom = "-100px";
      }
      prevScrollPos = currentScrollPos;
    };
  } else if (maxScrollXValue > 450) {
    // get previous vertical position of the window
    let prevScrollPos = window.pageYOffset;

    // call anonymous function on scroll
    window.onscroll = () => {
      // Get vertical position after a scrolling
      var currentScrollPos = window.pageYOffset;

      // if prev is superior than current, the header is visible. If not, the header is hidden.
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-100px";
      }

      // then, the prev value is defined with the current value.
      prevScrollPos = currentScrollPos;
    };
  }

  return (
    <nav className='navbar-container' id='header'>
      <div className='navbar'>
        <a className='nav-brand' href='/ '>
          <i className={context.logo} />
          <h4>{context.title}</h4>
        </a>

        <ul className='nav-list'>
          <li className='nav-item'>
            <div className='winker'></div>
            <a className='nav-link' href='#services '>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <div className='winker'></div>
            <a className='nav-link' href='#about '>
              Qui suis-je ?
            </a>
          </li>
          <li className='nav-item'>
            <div className='winker'></div>
            <a className='nav-link' href='#contact '>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-responsive'>
        <ul className='nav-list-responsive'>
          <li className='nav-icon'>
            <a className='nav-link' href='#services '>
              <i className='fas fa-flask'></i>
              <p className='nav-link-text'>Services</p>
            </a>
          </li>
          <li className='nav-icon'>
            <a className='nav-link' href='#about '>
              <i className='far fa-address-card'></i>
              <p className='nav-link-text'>Bio</p>
            </a>
          </li>
          <li className='nav-icon'>
            <a className='nav-link' href='#contact '>
              <i className='far fa-paper-plane'></i>
              <p className='nav-link-text'>Message</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  context: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default Header;
