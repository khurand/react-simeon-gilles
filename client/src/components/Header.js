import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Header = () => {
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

export default Header;
