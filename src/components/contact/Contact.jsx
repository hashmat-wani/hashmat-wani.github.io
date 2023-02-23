import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../common/Button";
import PageHeader from "../common/PageHeader";
import useForm from "../../hooks/useForm";

import {
  ContactWrapper,
  LeftContent,
  ContactBox,
  ContactForm,
} from "./Contact.style";
import SideContact from "./SideContact";

function Contact() {
  const { formData, errors, handleInput, isFormValid } = useForm();

  return (
    <ContactWrapper id="contact">
      <PageHeader>Get In Touch</PageHeader>
      <ContactBox>
        <LeftContent>
          <FontAwesomeIcon size={"5x"} icon="handshake" />
          <h3>Thank You</h3>
          <p>Do You Have Any Queries?</p>
          <div className="contact">
            <div>
              <FontAwesomeIcon icon="location-dot" />
              <p>Baramulla, Jammu and Kashmir</p>
            </div>
            <div>
              <FontAwesomeIcon icon="envelope" />
              <p>
                <a href="mailto: hashmatwani@icloud.com">
                  hashmatwani@icloud.com
                </a>
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon="phone" />
              <p>
                <a href="tel:7006600835">7006600835</a>
              </p>
            </div>
          </div>
        </LeftContent>
        <ContactForm
          noValidate
          action="https://formspree.io/f/xlevvjeb"
          method="POST"
        >
          <label className="label__email">
            <span>Email</span>
            <input
              className={errors._replyto && "invalid"}
              onChange={handleInput}
              value={formData.email}
              id="email"
              name="_replyto"
              type="email"
              required
              placeholder="example@gmail.com"
            />
          </label>
          <label className="label__name">
            <span>Name</span>
            <input
              className={errors.name && "invalid"}
              onChange={handleInput}
              value={formData.name}
              name="name"
              type="text"
              required
              placeholder="John Doe"
            />
          </label>
          <label className="label__message">
            <span>Message</span>
            <textarea
              className={errors.message && "invalid"}
              onChange={handleInput}
              value={formData.message}
              name="message"
              required
              placeholder="Hey there!"
            />
          </label>

          <Button
            disabled={!isFormValid()}
            className="submit__btn"
            as="button"
            type="submit"
            value="send"
          >
            <FontAwesomeIcon icon="paper-plane" /> Submit
          </Button>
        </ContactForm>
      </ContactBox>
      <SideContact />
    </ContactWrapper>
  );
}
export default Contact;
