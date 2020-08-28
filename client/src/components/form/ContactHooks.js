import React, { useState, useEffect, useRef } from "react";
import ContactInfo from "../ContactInfo";
// import useForm from "./useForm";
// import validate from "./ValidateForm";
// import sendData from "./SendData";
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

const defaultState = {
  prenom: "",
  nom: "",
  email: "",
  message: "",
  conditions: false,
};

const ContactHooks = () => {
  const [mail, setMail] = useState(defaultState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setMail({
      ...mail,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setErrors(validate(mail));
    }, 500);
    setIsSubmitting(true);
  };

  function validate(mail) {
    let errors = {};

    if (!mail.prenom) {
      errors.prenom = "Un prénom est requis.";
    }

    if (!mail.nom) {
      errors.nom = "Un nom est requis.";
    }

    if (!mail.email) {
      errors.email = "Une adresse mail est requise.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mail.email)) {
      errors.email = "Cet email est invalide";
    }

    if (!mail.message) {
      errors.message = "Un message est requis.";
    }

    if (mail.conditions === false) {
      errors.conditions = "Les conditions doivent être acceptées.";
    }

    console.log(errors);
    return errors;
  }

  useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(errors).length === 0;
      if (noError) {
        console.log("prout");
        setIsSubmitting(false);
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
        setMail(defaultState);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  return (
    <div className='contact-container' id='contact'>
      <h3 className='container-title'>Contactez-moi</h3>
      <div className='container'>
        <Row>
          <Col className='col-md-4 col-sm-12'>
            <ContactInfo />
          </Col>
          <Col className='col-md-8 col-sm-12'>
            <Form
              className='contact-form mb-3'
              onSubmit={handleSubmit}
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
                    onChange={handleChange}
                    values={mail.prenom}
                    id='prenom'
                    name='prenom'
                    className={`${errors.prenom && " inputError"}`}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text className='basic-addon2'>
                      *
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {errors.prenom && (
                  <p className='error'>
                    <i className='fas fa-exclamation-triangle'></i>
                    {errors.prenom}
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
                    onChange={handleChange}
                    values={mail.nom}
                    id='nom'
                    name='nom'
                    className={`${errors.nom && " inputError"}`}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text className='basic-addon2'>
                      *
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {errors.nom && (
                  <p className='error'>
                    <i className='fas fa-exclamation-triangle'></i>
                    {errors.nom}
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
                    onChange={handleChange}
                    id='email'
                    name='email'
                    value={mail.email}
                    className={`${errors.email && " inputError"}`}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text className='basic-addon2'>
                      *
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {errors.email && (
                  <p className='error'>
                    <i className='fas fa-exclamation-triangle'></i>
                    {errors.email}
                  </p>
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
                    value={mail.message}
                    onChange={handleChange}
                    name='message'
                    id='message'
                    className={`${errors.message && " inputError"}`}
                  ></FormControl>
                  <InputGroup.Append>
                    <InputGroup.Text className='basic-addon1'>
                      *
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {errors.message && (
                  <p className='error'>
                    <i className='fas fa-exclamation-triangle'></i>
                    {errors.message}
                  </p>
                )}
              </FormGroup>

              {/* Checkbox */}
              <div className='form-group checkbox'>
                <input
                  type='checkbox'
                  name='conditions'
                  id='conditions'
                  className={`${errors.conditions && " inputError"}`}
                  checked={mail.conditions}
                  onChange={handleChange}
                />
                <div className='checkbox-text'>
                  <div className='conditions-text'>
                    <p>
                      En soumettant ce formulaire, j'accepte que les
                      informations saisies soient exploitées dans le cadre de la
                      demande de contact et de la relation commerciale qui peut
                      en découler.
                    </p>
                    {errors.conditions && (
                      <p className='error'>
                        <i className='fas fa-exclamation-triangle'></i>
                        {errors.conditions}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Message succes envoi */}
              {isSent && (
                <Alert variant='success'>
                  <Alert.Heading className='alert-title'>
                    <i className='far fa-paper-plane mr-3'></i>
                    <h5>Votre message a bien été envoyé !</h5>
                  </Alert.Heading>
                </Alert>
              )}

              <div className='form-group submit-button'>
                <Button type='submit' size='md'>
                  {isSubmitting ? (
                    <Spinner animation='border' variant='primary' />
                  ) : (
                    "Envoyer"
                  )}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactHooks;
