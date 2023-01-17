import { useState } from 'react';
import './contact.styles.scss';
import clsx from 'clsx';

import Header from '../header/header.component';

import Button from '../button/button.component';
import { useMessageFormValidator } from './hooks/useMessageFormValidator';

const Contact = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formControl = 'contact__form--control';
  const formControlError = 'contact__form--control-error';

  const { errors, validateForm, onBlurField } = useMessageFormValidator(form);

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };
  return (
    <main className="contact">
  
        <div className="contact__wrapper">
          <div className="contact__header">
            <h1 className="contact__header--title">Contact</h1>
            <p className="contact__header--statement">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="contact__form">
            <form onSubmit={onSubmitForm}>
              <div className="contact__form--group">
                <input
                  type="name"
                  name="name"
                  className={clsx(
                    formControl,
                    errors.name.dirty && errors.name.error && formControlError,
                  )}
                  value={form.name}
                  onChange={onUpdateField}
                  onBlur={onBlurField}
                  placeholder="Name"
                />
                {errors.name.dirty && errors.name.error ? (
                  <p className="contact__form--error-message">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div className="contact__form--group">
                <input
                  type="email"
                  name="email"
                  className={clsx(
                    formControl,
                    errors.email.dirty &&
                      errors.email.error &&
                      formControlError,
                  )}
                  value={form.email}
                  onChange={onUpdateField}
                  onBlur={onBlurField}
                  placeholder="Email"
                />
                {errors.email.dirty && errors.email.error ? (
                  <p className="contact__form--error-message">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
              <div className="contact__form--group">
                <textarea
                  className={clsx(
                    formControl,
                    errors.message.dirty &&
                      errors.message.error &&
                      formControlError,
                  )}
                  type="message"
                  name="message"
                  onChange={onUpdateField}
                  onBlur={onBlurField}
                  rows="5"
                  placeholder="Message"
                />
                {errors.message.dirty && errors.message.error ? (
                  <p className="contact__form--error-message">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              <div className="contact__form--button">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
   
  
    </main>
  );
};

export default Contact;
