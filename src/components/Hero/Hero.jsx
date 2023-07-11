import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { images } from "../../assets";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const width = window.innerWidth;
  const transition = {
    duration: 3,
    type: "tween",
  };

  return (
    <main className="Hero">
      <div className="blur blur-hero"></div>
      <div className="left-h">
        <div>
          <motion.div
            className="overlay_div"
            initial={{
              x: width > 375 ? "15rem" : "13rem",
              transition: transition,
            }}
            whileInView={{ x: 0, transition: transition }}
          ></motion.div>
          <h2 className="tag">The next generation fashionistas&#39; city</h2>
        </div>
        <h1>
          <span className={width >= 600 ? "stroke-text" : ""}>
            The future of stylish
          </span>{" "}
          <span>clothing, advertising, and entertainment is here</span>
        </h1>
        <p>
          Introducing{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "var(--shumba)",
              textTransform: "uppercase",
            }}
          >
            Shumba Money
          </span>
          , the one-stop shop for all your fashion, advertising and
          entertainment needs. We offer a wide variety of stylish clothing,
          affordable advertising options, and a platform for you to enjoy with
          friends and family
        </p>
        <a href="/#services" className="btn btn-hero">
          Explore Our Services <FaArrowRight />
        </a>
      </div>
      <div className="right-h">
        <div></div>
        <div></div>
        <div className="images">
          <img
            src={images.jacket}
            alt="Lady with yellow jacket holding a flower"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
