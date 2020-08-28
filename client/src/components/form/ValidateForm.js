export default function validate(mail) {
  // On créé un nouvel objet qui contiendra les erreurs générées dans chaque champs du form.
  let errors = {};

  if (!mail.prenom) {
    errors.prenom = 'Un prénom est requis.';
  }

  if (!mail.nom) {
    errors.nom = 'Un nom est requis.';
  }

  if (!mail.email) {
    errors.email = 'Une adresse mail est requise.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mail.email)) {
    errors.email = 'Cet email est invalide';
  }

  if (!mail.message) {
    errors.message = 'Un message est requis.';
  }

  if (mail.conditions === false) {
    errors.conditions = 'Les conditions doivent être acceptées.';
  }

  return errors;
}
