import React, { Component } from 'react';
import axios from 'axios';
// import Iframe from 'react-iframe';
import ContactInfo from './ContactInfo';
import {
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

export default class Contact extends Component {
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

      // Liaison serveur front & back via axios et une fontion asynchrone
      async function getData() {
        try {
          const response = await axios.post('http://localhost:5000/send', data);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

      getData();
      // console.log(data);

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
      <div className="container">
        <Row>
          <Col>
            <ContactInfo />
          </Col>
          <Col>
            <Form
              className="contact mb-3"
              onSubmit={this.handleSubmit}
              noValidate
              method="POST"
            >
              <InputGroup className="mb-2 prenom">
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    <i className="fas fa-user"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
                <FormControl
                  placeholder="Votre prénom"
                  aria-label="prénom"
                  aria-describedby="basic-addon1"
                  type="text"
                  onChange={this.handleChange}
                  id="firstName"
                  name="firstName"
                  ref={this.prenom}
                  className={
                    this.state.formErrors.firstNameError && ' inputError'
                  }
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">*</InputGroup.Text>
                </InputGroup.Append>
                {this.state.formErrors.firstNameError && (
                  <p className="error">
                    {this.state.formErrors.firstNameError}
                  </p>
                )}
              </InputGroup>
              <InputGroup className="mb-2 nom">
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    <i className="fas fa-user"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
                <FormControl
                  placeholder="Votre nom"
                  aria-label="Nom"
                  aria-describedby="basic-addon1"
                  type="text"
                  onChange={this.handleChange}
                  id="firstName"
                  name="firstName"
                  ref={this.nom}
                  className={
                    this.state.formErrors.lastNameError && ' inputError'
                  }
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">*</InputGroup.Text>
                </InputGroup.Append>
                {this.state.formErrors.lastNameError && (
                  <p className="error">{this.state.formErrors.lastNameError}</p>
                )}
              </InputGroup>

              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  type="email"
                  onChange={this.handleChange}
                  id="email"
                  name="email"
                  value={this.state.email}
                  className={this.state.formErrors.emailError && ' inputError'}
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">*</InputGroup.Text>
                </InputGroup.Append>
                {this.state.formErrors.emailError && (
                  <p className="error">{this.state.formErrors.emailError}</p>
                )}
              </InputGroup>

              <InputGroup className="mb-2">
                <FormControl
                  as="textarea"
                  cols="30"
                  rows="10"
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder="Message"
                  name="message"
                  id="message"
                  className={
                    this.state.formErrors.messageError && ' inputError'
                  }
                ></FormControl>
                {this.state.formErrors.messageError && (
                  <p className="error">{this.state.formErrors.messageError}</p>
                )}
              </InputGroup>

              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  name="conditions"
                  id="conditions"
                  checked={this.state.conditions}
                  onChange={this.handleChange}
                />
                <p>
                  En soumettant ce formulaire, j'accepte que les informations
                  saisies soient exploitées dans le cadre de la demande de
                  contact et de la relation commerciale qui peut en découler.
                </p>
                {this.state.formErrors.checkedError && (
                  <p className="error">{this.state.formErrors.checkedError}</p>
                )}
              </div>

              <div className="form-group">
                <Button type="submit" variant="primary" size="lg" block>
                  <span className="paper-plane">
                    <i className="far fa-paper-plane"></i>
                  </span>
                  Envoyer
                </Button>
              </div>
              {this.state.isSent && (
                <p className="success">Votre message a bien été envoyé</p>
              )}
            </Form>
          </Col>
          {/* <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.7013220528656!2d1.2238742163387937!3d44.6442344441328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac9e261de68331%3A0x406f69c2f3fcd20!2s46250%20Cazals!5e0!3m2!1sfr!2sfr!4v1596197124243!5m2!1sfr!2sfr"
          width="600"
          height={100 + '%'}
          frameborder="0"
          style={{ border: '0' }}
          allowfullscreen=""
          S
          aria-hidden="false"
          tabindex="0"
          className="map"
        /> */}
        </Row>
      </div>
    );
  }
}
