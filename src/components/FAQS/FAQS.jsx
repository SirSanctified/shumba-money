import React from "react";
import "./FAQS.css";
import faqs from "../../assets/faqs";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQS = () => {
  const [selected, setSelected] = React.useState(null);
  const handleClick = (index) => {
    selected === index ? setSelected(null) : setSelected(index);
  };
  return (
    <section className="faqs">
    <div className="blur blur-faqs"></div>
      <div className="heading">
        <h1>Frequently Asked Questions</h1>
        <hr />
        <p>
          If you have any other questions, please do not hesitate to contact us.
        </p>
      </div>
      <div className="faqs-container">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="faq"
            onClick={() => handleClick(index)}
          >
            <div className="question">
              <p>{faq.question}</p>
              <span>
                {selected !== index ? (
                  <FaPlus className="icon" onClick={() => handleClick(index)} />
                ) : (
                  <FaMinus
                    className="icon"
                    onClick={() => handleClick(index)}
                  />
                )}
              </span>
            </div>
            {selected === index && (
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
