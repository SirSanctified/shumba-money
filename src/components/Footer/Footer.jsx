import React from "react";
import "./Footer.css";
import { images } from "../../assets";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="footer__hr" />
      <footer className="Footer">
        <div className="logo">
          <img src={images.logo} alt="Shumba Money Logo" />
          <p>Shumba Money</p>
        </div>
        <div className="socials">
          <a href="http://instagram.com/">
            <FaInstagram />
          </a>
          <a href="http://facebook.com/">
            <FaFacebook />
          </a>
          <a href="http://twitter.com/">
            <FaTwitter />
          </a>
          <a href="http://twitter.com/">
            <FaLinkedin />
          </a>
          <a href="http://youtube.com/">
            <FaYoutube />
          </a>
        </div>
        <div className="copyright">
          <p>Copyright ©{new Date().getFullYear()} Shumba Money. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
