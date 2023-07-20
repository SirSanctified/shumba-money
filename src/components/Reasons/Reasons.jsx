import React from "react";
import "./Reasons.css";
import { images } from "../../assets";
import { MdTaskAlt } from "react-icons/md";
import { reasons } from "../../constants/reasons";

const Reasons = () => {
  return (
    <section className="Reasons">
      <div className="left-r">
        <img src={reasons.tall} alt="Lady in blues" />
        <img src={images.money} alt="Mixture of money in coins and notes" />
        <img src={reasons.long} alt="A man's suit" />
        <img src={reasons.second} alt="Lady holding shopping bags" />
      </div>
      <div className="right-r">
        <div className="heading">
          <h1>Some Reasons to choose us</h1>
          <hr />
          <p>
            What makes us{" "}
            <span className={window.innerWidth > 500 ? "stroke-text" : ""}>
              unique
            </span>
          </p>
        </div>
        <div>
          <span>
            <MdTaskAlt />
          </span>
          <span>
            <span className="bold">Variety</span>: whether you are looking for
            stylish clothing, affordable advertising, or a platform to connect
            with friends and family, we have something for you.
          </span>
        </div>
        <div>
          <span>
            <MdTaskAlt />
          </span>
          <span>
            <span className="bold">Effectiveness</span>: our advertising
            platform is effective to reaching a global audience.
          </span>
        </div>
        <div>
          <span>
            <MdTaskAlt />
          </span>
          <span>
            <span className="bold">Customer service</span>: We are committed to
            customer service and are always available to help you with any
            questions or problems you may have.
          </span>
        </div>
        <div>
          <span>
            <MdTaskAlt />
          </span>
          <span>
            <span className="bold">Affordability</span>: Our services are
            affordable for businesses and individuals of all budgets.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
