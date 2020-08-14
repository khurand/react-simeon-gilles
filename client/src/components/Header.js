import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { Jump } from "react-jump";

const Header = () => {
  let headerItem = useRef(null),
    LinkItem1 = useRef(null),
    LinkItem2 = useRef(null),
    LinkItem3 = useRef(null),
    LinkIcon1 = useRef(null),
    LinkIcon2 = useRef(null),
    LinkIcon3 = useRef(null);

  useEffect(() => {
    TweenMax.from(headerItem, 1, {
      opacity: 0,
      y: "-100%",
      ease: Power3.easeInOut,
    });
    TweenMax.to(headerItem, 0, {
      css: { visibility: "visible" },
    });

    TweenMax.staggerFrom(
      [LinkIcon1, LinkIcon2, LinkIcon3, LinkItem1, LinkItem2, LinkItem3],
      1.3,
      { opacity: 0, y: -500, ease: Power3.easeInOut },
      0.2
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
          Logo
        </a>

        <ul className='nav-list'>
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
            className='nav-item'
            ref={(el) => {
              LinkItem1 = el;
            }}
          >
            <div className='winker'></div>
            <Jump target={"#contact"} options={{ duration: 2000 }}>
              <a className='nav-link' href='# '>
                Contact
              </a>
            </Jump>
          </li>
          <li
            className='nav-item'
            ref={(el) => {
              LinkItem2 = el;
            }}
          >
            <div className='winker'></div>
            <Jump target={"#services"} options={{ offset: -200 }}>
              <a className='nav-link' href='# '>
                Services
              </a>
            </Jump>
          </li>
          <li
            className='nav-item'
            ref={(el) => {
              LinkItem3 = el;
            }}
          >
            <div className='winker'></div>
            <Jump target={"#about"}>
              <a className='nav-link' href='# '>
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
