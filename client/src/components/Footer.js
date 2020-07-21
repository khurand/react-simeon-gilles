import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='map'>MAP</div>
      <div className='content'>
        <div className='footer-icone'>Icon footer</div>
        <div className='footer-links'>
          <ul className='social-links'>
            <li className='link facebook'>facebook</li>
            <li className='link linkedin'>Linkedin</li>
            <li className='link twitter'>Twitter</li>
          </ul>
        </div>
        <div className='mentions'>
          <a href='#header'>Mentions légales</a>
        </div>

        <div className='copyright'>Copyright</div>
      </div>
    </div>
  );
};

export default Footer;
