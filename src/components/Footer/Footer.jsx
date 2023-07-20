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
          <a href="http://instagram.com/_shumba_money_official_">
            <FaInstagram />
          </a>
          <a href="http://facebook.com/profile.php?id=100091363929543/">
            <FaFacebook />
          </a>
          <a href="http://twitter.com/shumba_money1">
            <FaTwitter />
          </a>
          <a href="http://linkedin.com/company/shumba-money/">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@shumbamoney">
            <FaYoutube />
          </a>
        </div>
        <div className="copyright">
          <p>
            Copyright ©{new Date().getFullYear()} Shumba Money. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
