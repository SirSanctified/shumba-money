import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import { images } from "../../assets";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="About" id="About">
      <div className="content">
        <div className="right-c">
          <div className="heading">
            <h1>Who We Are</h1>
            <hr />
            <div className="subheading">
              <span className={window.innerWidth >= 768 ? "stroke-text" : ""}>
                A dynamic
              </span>{" "}
              <span>and fashionable brand</span>
            </div>
          </div>
          <p>
            We believe that everyone should have access to the latest fashion
            trends, regardless of their budget. That&#39;s why we offer a wide
            variety of stylish clothing at affordable prices. We also Believe
            that everyone should have the opportunity to promote their business
            to a global audience. In addition to clothing and advertising, we
            offer a platform for people to connect with friends and family while
            entertaining themselves. With us, you can also send money to your
            loved ones with ease.
          </p>
          <button
            className="btn btn-outline"
            onClick={() => navigate("/about")}
          >
            Learn More <FaArrowRight />
          </button>
        </div>
        <div className="left-c">
          <img src={images.about} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
