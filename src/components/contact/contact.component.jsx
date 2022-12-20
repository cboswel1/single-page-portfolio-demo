import React from 'react';
import './contact.styles.scss';

import Button from '../button/button.component';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__message--container">
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="contact__form">
        <form>
          <div class="contact__form--group">
            <label for="contact__form--name">Name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              placeholder="enter your name"
            />
          </div>
          <div class="contact__form--group">
            <label for="contact__form--email">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="enter your name"
            />
          </div>
          <div class="contact__form--group">
            <label for="contact__form--body">Message</label>
            <textarea className="form-control" id="name" rows="5"></textarea>
          </div>
          <Button type="button">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
