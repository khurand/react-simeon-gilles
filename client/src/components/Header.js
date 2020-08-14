<<<<<<< HEAD
import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { Jump } from "react-jump";
=======
import React from 'react';
import { Jump } from 'react-jump';
>>>>>>> dc93da5ff65562fd5b4d8143c55de14ecce8ccc4

const Header = () => {
  let headerItem = useRef(null);
  let LinkItem1 = useRef(null);
  let LinkItem2 = useRef(null);
  let LinkItem3 = useRef(null);
  let LinkIcon1 = useRef(null);
  let LinkIcon2 = useRef(null);
  let LinkIcon3 = useRef(null);

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
<<<<<<< HEAD
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
=======
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
>>>>>>> dc93da5ff65562fd5b4d8143c55de14ecce8ccc4
                Contact
              </a>
            </Jump>
          </li>
<<<<<<< HEAD
          <li
            className='nav-item'
            ref={(el) => {
              LinkItem2 = el;
            }}
          >
            <div className='winker'></div>
            <Jump target={"#services"} options={{ offset: -200 }}>
              <a className='nav-link' href='# '>
=======
          <li className="nav-item">
            <div className="winker"></div>
            <Jump target={'#services'} options={{ offset: -200 }}>
              <a className="nav-link" href="#">
>>>>>>> dc93da5ff65562fd5b4d8143c55de14ecce8ccc4
                Services
              </a>
            </Jump>
          </li>
<<<<<<< HEAD
          <li
            className='nav-item'
            ref={(el) => {
              LinkItem3 = el;
            }}
          >
            <div className='winker'></div>
            <Jump target={"#about"}>
              <a className='nav-link' href='# '>
=======
          <li className="nav-item">
            <div className="winker"></div>
            <Jump target={'#about'}>
              <a className="nav-link" href="#">
>>>>>>> dc93da5ff65562fd5b4d8143c55de14ecce8ccc4
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
