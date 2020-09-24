import React, { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { Context } from "../contexts/Context";
import PropTypes from "prop-types";

const Header = () => {
  const context = useContext(Context);

  let headerItem = useRef(null),
    LinkItem1 = useRef(null),
    LinkItem2 = useRef(null),
    LinkItem3 = useRef(null),
    LinkIcon1 = useRef(null),
    LinkIcon2 = useRef(null),
    LinkIcon3 = useRef(null);

  useEffect(() => {
    gsap.from(headerItem, 1, {
      opacity: 0,
      y: "-100%",
      ease: "Power4.easeInOut",
    });
    gsap.to(headerItem, 0, {
      css: { visibility: "visible" },
    });

    gsap.from(
      [LinkIcon1, LinkIcon2, LinkIcon3, LinkItem1, LinkItem2, LinkItem3],
      1,
      {
        opacity: 0,
        y: -500,
        ease: "Power4.easeInOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  return (
    <nav
      className='navbar-container'
      id='header'
      ref={(el) => {
        headerItem = el;
      }}
    >
      <div className='navbar'>
        <a className='nav-brand' href='/ '>
          <i className={context.logo} />
          <h4>{context.title}</h4>
        </a>

        <ul className='nav-list'>
          <li
            className='nav-icon'
            ref={(el) => {
              LinkIcon2 = el;
            }}
          >
            <a className='nav-link' href='#services '>
              <i className='fas fa-flask'></i>
              <p className='nav-link-text'>Services</p>
            </a>
          </li>
          <li
            className='nav-icon'
            ref={(el) => {
              LinkIcon3 = el;
            }}
          >
            <a className='nav-link' href='#about '>
              <i className='far fa-address-card'></i>
              <p className='nav-link-text'>Bio</p>
            </a>
          </li>
          <li
            className='nav-icon'
            ref={(el) => {
              LinkIcon1 = el;
            }}
          >
            <a className='nav-link' href='#contact '>
              <i className='far fa-paper-plane'></i>
              <p className='nav-link-text'>Message</p>
            </a>
          </li>

          <li
            className='nav-item'
            ref={(el) => {
              LinkItem2 = el;
            }}
          >
            <div className='winker'></div>
            <a className='nav-link' href='#services '>
              Services
            </a>
          </li>
          <li
            className='nav-item'
            ref={(el) => {
              LinkItem3 = el;
            }}
          >
            <div className='winker'></div>
            <a className='nav-link' href='#about '>
              Qui suis-je ?
            </a>
          </li>
          <li
            className='nav-item'
            ref={(el) => {
              LinkItem1 = el;
            }}
          >
            <div className='winker'></div>
            <a className='nav-link' href='#contact '>
              Contact
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
