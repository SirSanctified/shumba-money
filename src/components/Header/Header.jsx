import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { images } from "../../assets";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <section className="header">
      <nav className="Nav">
        <div className="logo">
          <img src={images.logo} alt="Shumba Money Official Logo" />
          <p>Shumba Money</p>
        </div>
        <ul className="menu">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#About">About Us</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#Gallery">Gallery</a>
          </li>
          <li>
            <a href="/#faqs">FAQs</a>
          </li>
          <li>
            <a href="/#Contact">Contact Us</a>
          </li>
        </ul>
        <div className="mobile-menu__container">
          <motion.span
            className="menu-btn"
            initial={{ y: 100 }}
            whileInView={{
              x: 0,
              transition: { duration: 0.5, type: "tween" },
            }}
            exit={{ opacity: 0, y: 100 }}
          >
            {!toggleMenu ? (
              <FaBars onClick={() => setToggleMenu((prev) => !prev)} />
            ) : (
              <FaTimes onClick={() => setToggleMenu((prev) => !prev)} />
            )}
          </motion.span>
          {toggleMenu ? (
            <motion.ul
              className="mobile-menu"
              initial={{ y: -100 }}
              whileInView={{
                y: 0,
                transition: { duration: 0.5, type: "tween" },
              }}
              exit={{ opacity: 0, y: -100 }}
            >
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#About">About Us</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#Gallery">Gallery</a>
              </li>
              <li>
                <a href="/#faqs">FAQs</a>
              </li>
              <li>
                <a href="/#Contact">Contact Us</a>
              </li>
            </motion.ul>
          ) : null}
        </div>
      </nav>
    </section>
  );
};

export default Header;