import React from 'react';
import './contact.styles.scss';

import Header from '../header/header.component';
import Button from '../button/button.component';

const Contact = () => {
  return (
    <><div className="contact">
      <div className="contact__wrapper">
        <div className="contact__header">
          <h1 className="contact__header--title">Contact</h1>
          <p className="contact__header--statement">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="contact__form">
          <form>
            <div class="contact__form--group">
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="Name" />
            </div>
            <div class="contact__form--group">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email" />
            </div>
            <div class="contact__form--group">
              <textarea
                className="form-control"
                id="name"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="contact__form--button">
              <Button type="button">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div><Header  /></>
  );
};

export default Contact;
