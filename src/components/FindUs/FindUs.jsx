import React from "react";
import "./FindUs.css";
import { MdLocationCity } from "react-icons/md";
import { FaArrowRight, FaBusinessTime } from "react-icons/fa";
import { images } from "../../assets";

const FindUs = () => {
  return (
    <section className="Location">
      <div className="left-l">
        <div className="heading">
          <h1>Find Us</h1>
          <hr />
          <p>Visit our physical location or connect with us online:</p>
        </div>
        <div>
          <span>
            <MdLocationCity />
          </span>
          <span>Office 22, Living Waters, Beitbridge</span>
        </div>
        <div>
          <span>
            <MdLocationCity />
          </span>
          <span>8463 Manyame Park, Chitungwiza, Harare</span>
        </div>
        <div>
          <span>
            <FaBusinessTime />
          </span>
          <div>
            <span>Monday - Friday: 08:00hrs - 16:00hrs</span>
            <span>Saturday: 08:00hrs - 14:00hrs</span>
            <span>Sunday: Closed</span>
          </div>
        </div>
        <a href="/#Contact" className="btn" style={{ marginTop: "2rem" }}>
          Talk To Us Online <FaArrowRight />
        </a>
      </div>
      <div className="right-l">
        <div className="image-container">
          <img src={images.lady} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FindUs;
