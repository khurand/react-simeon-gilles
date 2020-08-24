import React, { useState, useEffect } from "react";
import Cookies from "../../node_modules/js-cookie/src/js.cookie.js";

const Cookie = () => {
  // A chaque refresh de la page, la valeur du state cookie reprend sa valeur par défaut qui est "". Pour faire en sorte que cookie garde la valeur "true" pour ne pas afficher la bannière tout le temps, on lui passe la valeur de l'entrée cookie du localStorage comme valeur par défaut.
  const [cookie, setCookie] = useState(() => {
    // On récupère la valeur de l'entrée "cookie" dans le localStorage dans une variable
    const cookieVal = localStorage.getItem("cookie");

    // Si une valeur existe, on retourne celle-ci pour updater la valeur du state cookie, sinon on retourne rien par défaut.
    return cookieVal ? cookieVal : "";
  });

  // A chaque connexion au site, on vérifie si cookie est à true. Si oui, la bannière est cachée
  useEffect(() => {
    if (cookie) {
      hideCookieBox();
    }
  }, [cookie]);

  // Ajoute une class hide à la bannière pour la cacher
  const hideCookieBox = () => {
    const cookieBox = document.querySelector(".cookie-box");
    cookieBox.classList.add("hide");
  };

  // Quand on clique sur valider, on passe la valeur de cookie à "true", on créé le cookie, et on enregistre dans localStorage une entrée "cookie" dont la valeur est "true".
  const okCookie = () => {
    setCookie(true);
    Cookies.set("Gilles", "true", { expires: 365, path: "/" });
    localStorage.setItem("cookie", "true");
  };

  return (
    <div className='cookie-box'>
      <div className='cookie-body'>
        <p className='cookie-body-text'>
          En poursuivant votre navigation sur ce site, vous acceptez
          l'utilisation de cookies me permettant de réaliser des statistiques de
          visites.
          <a href='# ' className='more-info'>
            En savoir plus
          </a>
        </p>
      </div>
      <div className='cookie-buttons'>
        <button className='btn btn-refuse' onClick={hideCookieBox}>
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
