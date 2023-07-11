import React from "react";
import "./Contact.css";
import { images } from "../../assets";
import { BiPhoneCall, BiEnvelope, BiSend, } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="Contact" id="Contact">
      <article className="sidebar">
        <img
          src={images.contact}
          alt="Vector illustration of a person calling"
        />
        <div className="sidebar-content">
          <p>
            Feel free to reach out to us for any enquiries or questions.
          </p>
          <div className="contact-options">
            <a href="tel:+2637133554434" target="blank">
              <BiPhoneCall />
            </a>
            <a href="https://wa.me/2637133554434" target="blank">
              <FaWhatsapp />
            </a>
            <a href="mailto:mail@shumbamoney.co.zw" target="blank">
              <BiEnvelope />
            </a>
          </div>
          <p>
            Do not forget to follow us on social media to stay up-t- date with on what we&#39;ve got for you.
          </p>
        </div>
      </article>
      <article className="contact__form-container">
        <div className="heading">
          <h1>Contact Us</h1>
          <hr />
          <p>Get In Touch With Us With A Quick Message</p>
        </div>
        <form onSubmit={e => e.preventDefault() }>
          <div>
            <label htmlFor="email">Your Email Address:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email Address"
            />
            <label htmlFor="phone">Your Contact Number:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Contact Number"
            />
          </div>
          <label htmlFor="message">Your Message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Type Your Message Here"
          ></textarea>
          <button 
            className="btn" 
            type="submit"
          >
            Send Us A Message <BiSend style={{fontSize: '1.5rem'}}/>
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
