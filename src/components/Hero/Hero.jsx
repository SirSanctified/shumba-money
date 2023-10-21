import React from "react";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import "./Hero.css";
import CustomButton from "../Button";
const Hero = () => {
  const width = window.innerWidth;
  const transition = {
    duration: 4,
    type: "tween",
  };

  return (
    <main className="Hero">
      <div className="left-h">
        <div>
          <motion.div
            className="overlay_div"
            initial={{
              x: width > 414 ? "12rem" : "10rem",
              transition: transition,
            }}
            whileInView={{ x: 0, transition: transition }}
          ></motion.div>
          <h2 className="tag">Unlock Your Best Life</h2>
        </div>
        <h1>Essentials for more than just wealth</h1>
        <p>
          We believe true riches come from community, freedom of expression..and
          experiencing life fully. That's why we offer far more than finances -
          aiming to enrich your life through:
        </p>
        <ul className="hero-list">
          <li>
            <FaCheck />
            <p>Trendy fashion at fair prices</p>
          </li>
          <li>
            <FaCheck />
            <p>Financial tools that build wealth</p>
          </li>
          <li>
            <FaCheck />
            <p>A community that inspires</p>
          </li>
          <li>
            <FaCheck />
            <p>Cultural experiences</p>
          </li>
        </ul>
        <p>All designed to unleash the fullest version of you.</p>
        <Link href="/#services" className="w-[100%]">
          <CustomButton title="Find Out How" filled />
        </Link>
      </div>
      <div className="right-h">
        <div className="images"></div>
      </div>
    </main>
  );
};

export default Hero;
