import { useState, useEffect } from "react";

const defaultState = {
  prenom: "",
  nom: "",
  email: "",
  message: "",
  conditions: false,
};

const useForm = (callback, validate, sendData) => {
  const [mail, setMail] = useState(defaultState);

  // Nouveau state pour la gestion des erreurs, valeur par défaut : vide
  const [errors, setErrors] = useState({});

  // Nouveau state pour vérifier si le form est sousmis: false par défaut
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Nouveau state pour indiquer que les données ont été envoyées: false par défaut
  // const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    // On fait une copie de l'objet mail (state) dans un nouvel objet, qui comprend toutes les clés non maj, et on modifie les valeurs qu'on veut et faisant correspondre les clés de l'objet avec le nom des champs modifiés.
    setMail({
      ...mail,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gestion erreurs: on update le state "errors" avec l'objet "errors" renvoyé par la function validate() provenant de validateForm.js. On rajoute un delay de 0.5s pour permettre une animation de spinner sur le bouton envoyer avant l'affichage d'erreurs.
    setTimeout(() => {
      setErrors(validate(mail));
    }, 500);

    // Le state isSubmitting est passé à true (soumission des données du form et lancement du spinner)
    setIsSubmitting(true);
  };

  // On vérifie si l'objet "errors" est modifié (quand une erreur est produite), alors on appelle ou non la fonction callback
  useEffect(() => {
    // Si 0 erreur et isSubmitting est true, on appelle notre callback (qui est la function sendData dans contactHooks.js)
    if (Object.keys(errors).lenght === 0 && isSubmitting) {
      // callback();
      // sendData(mail);
      console.log("ok");
    }

    if (Object.keys(errors).lenght > 0) {
      console.log("non ok");
    }

    // Stop le spinner si erreur
    // setIsSubmitting(false);
  }, [errors]);

  return {
    mail,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    // isSent,
    // setIsSent,
  };
};

export default useForm;
