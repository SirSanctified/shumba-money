import React from "react";
import "./Founder.css";
import { BsQuote } from "react-icons/bs";
import { images } from "../../assets";

const Founder = () => {
  return (
    <section className="Founder">
      <article className="founder">
        <div className="image-container">
          <img src={images.founder} alt="Founder of Shumba Money" />
        </div>
        <div className="qoute">
          <div className="qoute-text">
            <div className="heading">
              <h1>founder&#39;s qoute</h1>
              <hr />
            </div>
            <p>
              <BsQuote
                style={{
                  color: "var(--serviceCard)",
                  fontSize: "3rem",
                  paddingRight: "0.1rem",
                }}
              />
              We started Shumba Money with a vision to create a platform that
              would make it easy for people to shop, advertise and entertain
              themselves. We aim to empower empower individuals to express
              themselves through fashion and make a statement whereever they go,
              regardless of their budget.
            </p>
          </div>
          <hr />
          <p className="founder-name">Marshall Tatenda Mushayikwa</p>
        </div>
      </article>
    </section>
  );
};

export default Founder;
