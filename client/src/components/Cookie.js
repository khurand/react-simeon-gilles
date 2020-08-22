import React, { useState, useEffect } from "react";
import Cookies from "../../node_modules/js-cookie/src/js.cookie.js";

const Cookie = () => {
  const [cookie, setCookie] = useState("");

  // Cookie accepté automatiquement à la première connexion au site
  useEffect(() => {
    if (cookie) {
      okCookie();
    }
  }, []);

  const hideCookieBox = () => {
    const cookieBox = document.querySelector(".cookie-box");
    cookieBox.classList.add("hide");
  };

  const okCookie = () => {
    setCookie(true);
    Cookies.set("Gilles", "true", { expires: 365, path: "/" });
    hideCookieBox();
  };

  // Cookie pas accepté
  const noCookie = () => {
    setCookie(false);
    hideCookieBox();
  };

  return (
    <div className='cookie-box'>
      <div className='cookie-body'>
        <p className='cookie-body-text'>
          En poursuivant votre navigation sur ce site, vous acceptez
          l'utilisation de cookies me permettant de réaliser des statistiques de
          visites.
          <a href='' className='more-info'>
            En savoir plus
          </a>
        </p>
      </div>
      <div className='cookie-buttons'>
        <button className='btn btn-refuse' onClick={noCookie}>
          Refuser
        </button>
        <button className='btn btn-accept' onClick={okCookie}>
          Accepter
        </button>
      </div>
    </div>
  );
};

export default Cookie;
