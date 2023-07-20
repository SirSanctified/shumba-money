import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { images } from "../../assets";
import { BiPhoneCall, BiEnvelope, BiSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = React.useRef();
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        formRef.current,
        "PUBLIC_KEY"
      )
      .then(
        (result) => {
          setEmail("");
          setPhone("");
          setMessage("");
          setSent((prev) => !prev);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="Contact" id="Contact">
      <article className="sidebar">
        <img
          src={images.contact}
          alt="Vector illustration of a person calling"
        />
        <div className="sidebar-content">
          <p>Feel free to reach out to us for any enquiries or questions.</p>
          <div className="contact-options">
            <a href="tel:+263715290838" target="blank">
              <BiPhoneCall />
            </a>
            <a href="https://wa.me/263715290838" target="blank">
              <FaWhatsapp />
            </a>
            <a href="mailto:admin@shumbamoney.co.zw" target="blank">
              <BiEnvelope />
            </a>
          </div>
          <p>
            Do not forget to follow us on social media to stay up-t- date with
            on what we&#39;ve got for you.
          </p>
        </div>
      </article>
      <article className="contact__form-container">
        <div className="heading">
          <h1>Contact Us</h1>
          <hr />
          <p>Get In Touch With Us With A Quick Message</p>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <div>
            <label htmlFor="email">Your Email Address:</label>
            <input
              type="email"
              name="from_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              required
            />
            <label htmlFor="phone">Your Contact Number:</label>
            <input
              type="tel"
              name="from_phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Contact Number"
              required
            />
          </div>
          <label htmlFor="message">Your Message:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="5"
            placeholder="Type Your Message Here"
            required
          ></textarea>
          <button className="btn" type="submit">
            Send Us A Message <BiSend style={{ fontSize: "1.5rem" }} />
          </button>
          {sent && (
            <motion.p
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 5 }}
              onAnimationEnd={() => setSent((prev) => !prev)}
              style={{
                background: "green",
                borderRadius: "2%",
                width: "230px",
                height: "2rem",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Message sent successifully!
            </motion.p>
          )}
        </form>
      </article>
    </section>
  );
};

export default Contact;
