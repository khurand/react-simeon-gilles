import { useState, useEffect } from 'react';

const defaultState = {
  prenom: '',
  nom: '',
  email: '',
  message: '',
  conditions: false,
};

const useForm = (validate, sendData) => {
  const [mail, setMail] = useState(defaultState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;

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

  useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(errors).length === 0;

      if (noError) {
        setIsSubmitting(false);
        setIsSent(true);
        sendData(mail);

        setTimeout(() => {
          setIsSent(false);
        }, 3000);

        setMail(defaultState);

        document.querySelector('.contact-form').reset();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  return {
    mail,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    isSent,
    setIsSent,
    sendData,
  };
};

export default useForm;
