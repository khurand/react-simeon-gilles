import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.prenom = React.createRef();
    this.nom = React.createRef();
    this.state = {
      email: '',
      message: '',
      conditions: false,
      isSent: false,
      formErrors: {
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        messageError: '',
        checkedError: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Change le state avec les nouvelles valeurs. On récupère le nom et la valeur des inputs controllés (email, message et checkbox), en clé on met les noms des champs et les valeurs correspondent aux noms des inputs qu'on cible. On récupère aussi le type du champs pour la checkbox
  handleChange(e) {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  //Validation du formulaire
  validate = () => {
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let messageError = '';
    let checkedError = '';

    if (!this.prenom.current.value) {
      firstNameError = 'Prénom requis';
    }

    if (!this.nom.current.value) {
      lastNameError = 'Nom requis';
    }

    if (!this.state.email) {
      emailError = 'Email requis';
    } else if (!this.state.email.includes('@')) {
      emailError = 'Email invalide';
    }

    if (!this.state.message) {
      messageError = 'Message requis';
    }

    if (this.state.conditions === false) {
      checkedError = 'Veuillez cocher';
    }

    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      messageError ||
      checkedError
    ) {
      this.setState((prevState) => ({
        // l'objet qu'on souhaite update
        formErrors: {
          // conserver les valeurs des autres clés
          ...prevState.formErrors,
          // update la valeur de la clé spécifique
          firstNameError,
          lastNameError,
          emailError,
          messageError,
          checkedError,
        },
      }));
      return false;
    }
    // Si les conditions du formulaire sont valides, le mail est envoyé
    this.setState({ isSent: true });
    return true;
  };

  // Soumission du formulaire
  handleSubmit(e) {
    e.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      const data = {
        prenom: this.prenom.current.value,
        nom: this.nom.current.value,
        email: this.state.email,
        message: this.state.message,
      };
      console.log(data);

      // Liaison serveur front & back via axios
      axios.post('http://localhost:5000/send', data);

      // Reset inputs non-controllés
      this.prenom.current.value = '';
      this.nom.current.value = '';

      // Reset des valeurs inputs controllés après l'envoi du formulaire
      this.setState({
        email: '',
        message: '',
        conditions: false,
        formErrors: {
          firstNameError: '',
          lastNameError: '',
          emailError: '',
          messageError: '',
          checkedError: '',
        },
      });
    }

    // Le message de succès d'envoi du mail disparaît au bout de 3s avec isSent qui repasse en false
    setTimeout(() => this.setState({ isSent: false }), 3000);
  }

  render() {
    return (
      <form
        className="container"
        onSubmit={this.handleSubmit}
        noValidate
        method="POST"
        // action="send"
      >
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            ref={this.prenom}
            placeholder="Prénom"
            className={
              'form-control' +
              (this.state.formErrors.firstNameError ? ' inputError' : '')
            }
          />
        </div>
        {this.state.formErrors.firstNameError && (
          <p className="error">{this.state.formErrors.firstNameError}</p>
        )}

        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            ref={this.nom}
            placeholder="Nom"
            className={
              'form-control' +
              (this.state.formErrors.lastNameError ? ' inputError' : '')
            }
          />
        </div>
        {this.state.formErrors.lastNameError && (
          <p className="error">{this.state.formErrors.lastNameError}</p>
        )}

        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            onChange={this.handleChange}
            id="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            className={
              'form-control' +
              (this.state.formErrors.emailError ? ' inputError' : '')
            }
          />
        </div>
        {this.state.formErrors.emailError && (
          <p className="error">{this.state.formErrors.emailError}</p>
        )}
        <div className="form-group">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
            className={
              'form-control' +
              (this.state.formErrors.messageError ? ' inputError' : '')
            }
          ></textarea>
        </div>
        {this.state.formErrors.messageError && (
          <p className="error">{this.state.formErrors.messageError}</p>
        )}

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="conditions"
            id="conditions"
            checked={this.state.conditions}
            onChange={this.handleChange}
          />
          <p>
            Click si t'es OK avec les conditions du blabla-Corp International
            Association World Cup Tournament of World Wild Board of Curling qui
            dit: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            corrupti quis autem, iusto ut consequatur!'
          </p>
        </div>
        {this.state.formErrors.checkedError && (
          <p className="error">{this.state.formErrors.checkedError}</p>
        )}

        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
        </div>
        {this.state.isSent && (
          <p className="success">Votre message a bien été envoyé</p>
        )}
      </form>
    );
  }
}
