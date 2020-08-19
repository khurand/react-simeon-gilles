import React, { Component, createRef } from "react";
import axios from "axios";
import ContactInfo from "./ContactInfo";
import {
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  FormGroup,
  Alert,
  Spinner,
} from "react-bootstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.prenom = createRef();
    this.nom = createRef();
    this.state = {
      email: "",
      message: "",
      conditions: false,
      isSent: false,
      formErrors: {
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        messageError: "",
        checkedError: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Change le state avec les nouvelles valeurs. On récupère le nom et la valeur des inputs controllés (email, message et checkbox), en clé on met les noms des champs et les valeurs correspondent aux noms des inputs qu'on cible. On récupère aussi le type du champs pour la checkbox
  handleChange(e) {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  //Validation du formulaire
  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let messageError = "";
    let checkedError = "";

    if (!this.prenom.current.value) {
      firstNameError = "Un prénom est requis.";
    }

    if (!this.nom.current.value) {
      lastNameError = "Un nom est requis.";
    }

    if (!this.state.email) {
      emailError = "Une adresse mail est requise.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)
    ) {
      emailError = "Cet email est invalide";
    }

    if (!this.state.message) {
      messageError = "Un message est requis.";
    }

    if (this.state.conditions === false) {
      checkedError = "Les conditions doivent être acceptées.";
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
      this.setState({ isNotSent: false });

      const data = {
        prenom: this.prenom.current.value,
        nom: this.nom.current.value,
        email: this.state.email,
        message: this.state.message,
      };

      // Liaison serveur front & back via axios en asynchrone
      async function getData() {
        try {
          const response = await axios.post("http://localhost:5000/send", data);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      getData();
      // console.log(data);

      // Reset inputs non-controllés
      this.prenom.current.value = "";
      this.nom.current.value = "";

      // Reset des valeurs inputs controllés après l'envoi du formulaire
      this.setState({
        email: "",
        message: "",
        conditions: false,
        formErrors: {
          firstNameError: "",
          lastNameError: "",
          emailError: "",
          messageError: "",
          checkedError: "",
        },
      });
    }

    // Le message de succès d'envoi du mail disparaît au bout de 3s et isSent repasse en false
    setTimeout(() => this.setState({ isSent: false }), 3000);
  }

  render() {
    return (
      <div className='contact-container' id='contact'>
        <div className='container'>
          <Row>
            <Col className='col-md-4 col-sm-12'>
              <ContactInfo />
            </Col>
            <Col className='col-md-8 col-sm-12'>
              <Form
                className='contact-form mb-3'
                onSubmit={this.handleSubmit}
                noValidate
                method='POST'
                data-aos='zoom-down'
                data-aos-delay='550'
              >
                {/* Prénom */}
                <FormGroup className='mb-2 prenom'>
                  <Form.Label>Prénom</Form.Label>
                  <InputGroup className='input-field'>
                    <InputGroup.Prepend>
                      <InputGroup.Text className='basic-addon1'>
                        <i className='fas fa-user'></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label='prénom'
                      aria-describedby='basic-addon1'
                      type='text'
                      onChange={this.handleChange}
                      id='firstName'
                      name='firstName'
                      ref={this.prenom}
                      className={
                        this.state.formErrors.firstNameError && " inputError"
                      }
                    />
                    <InputGroup.Append>
                      <InputGroup.Text className='basic-addon2'>
                        *
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  {this.state.formErrors.firstNameError && (
                    <p className='error'>
                      {this.state.formErrors.firstNameError}
                    </p>
                  )}
                </FormGroup>

                {/* Nom */}
                <FormGroup className='mb-2 nom'>
                  <Form.Label>Nom</Form.Label>
                  <InputGroup className='input-field'>
                    <InputGroup.Prepend>
                      <InputGroup.Text className='basic-addon1'>
                        <i className='fas fa-user'></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label='Nom'
                      aria-describedby='basic-addon1'
                      type='text'
                      onChange={this.handleChange}
                      id='firstName'
                      name='firstName'
                      ref={this.nom}
                      className={
                        this.state.formErrors.lastNameError && " inputError"
                      }
                    />
                    <InputGroup.Append>
                      <InputGroup.Text className='basic-addon2'>
                        *
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  {this.state.formErrors.lastNameError && (
                    <p className='error'>
                      {this.state.formErrors.lastNameError}
                    </p>
                  )}
                </FormGroup>

                {/* Mail */}
                <FormGroup className='mb-2 mail'>
                  <Form.Label>Mail</Form.Label>
                  <InputGroup className='input-field'>
                    <InputGroup.Prepend>
                      <InputGroup.Text className='basic-addon1'>
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label='Email'
                      aria-describedby='basic-addon1'
                      type='email'
                      onChange={this.handleChange}
                      id='email'
                      name='email'
                      value={this.state.email}
                      className={
                        this.state.formErrors.emailError && " inputError"
                      }
                    />
                    <InputGroup.Append>
                      <InputGroup.Text className='basic-addon2'>
                        *
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  {this.state.formErrors.emailError && (
                    <p className='error'>{this.state.formErrors.emailError}</p>
                  )}
                </FormGroup>

                {/* Message */}
                <FormGroup className='mb-2 message'>
                  <Form.Label>Message</Form.Label>
                  <InputGroup className='input-field'>
                    <InputGroup.Prepend>
                      <InputGroup.Text className='basic-addon1'>
                        <i className='far fa-envelope'></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      as='textarea'
                      cols='30'
                      rows='10'
                      value={this.state.message}
                      onChange={this.handleChange}
                      name='message'
                      id='message'
                      className={
                        this.state.formErrors.messageError && " inputError"
                      }
                    ></FormControl>
                    <InputGroup.Append>
                      <InputGroup.Text className='basic-addon1'>
                        *
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  {this.state.formErrors.messageError && (
                    <p className='error'>
                      {this.state.formErrors.messageError}
                    </p>
                  )}
                </FormGroup>

                {/* Checkbox */}
                <div className='form-group checkbox'>
                  <input
                    type='checkbox'
                    name='conditions'
                    id='conditions'
                    className={
                      this.state.formErrors.checkedError && " inputError"
                    }
                    checked={this.state.conditions}
                    onChange={this.handleChange}
                  />
                  <div className='checkbox-text'>
                    <div className='conditions-text'>
                      <p>
                        En soumettant ce formulaire, j'accepte que les
                        informations saisies soient exploitées dans le cadre de
                        la demande de contact et de la relation commerciale qui
                        peut en découler.
                      </p>
                      {this.state.formErrors.checkedError && (
                        <p className='error'>
                          {this.state.formErrors.checkedError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message succes envoi */}
                {this.state.isSent &&
                  ({
                    /* <Spinner animation="border" variant="primary" /> */
                  },
                  (
                    <Alert variant='success'>
                      <Alert.Heading className='alert-title'>
                        <i className='far fa-paper-plane mr-3'></i>
                        <h5>Votre message a bien été envoyé !</h5>
                      </Alert.Heading>
                    </Alert>
                  ))}

                <div
                  className='form-group submit-button'
                  data-aos='fade'
                  data-aos-duration='1000'
                >
                  <Button type='submit' size='md' className='btn'>
                    Envoyer
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
