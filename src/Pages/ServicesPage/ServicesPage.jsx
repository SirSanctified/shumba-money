import React from "react";
import "./ServicesPage.css";
import { services } from "../../constants";
import { FaArrowRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const scrollRef = React.useRef()

  const scroll = (direction) => {
    direction === 'left' ?
      scrollRef.current.scrollLeft -= 100 :
      scrollRef.current.scrollLeft += 100
  }
  const handleTabClick = (index) => {
    setActiveTab(parseInt(index));
  };
  return (
    <main className="ServicesPage">
      <div className="heading">
        <h1>Our Services</h1>
        <hr />
      </div>
      <div className="services-container">
        <div className="leftArrow">
          <MdChevronLeft size={40} onClick={() => scroll('left')} style={{color: 'var(--shumba)'}} />
        </div>
        <div className="rightArrow">
        <MdChevronRight size={40} onClick={() => scroll('right')} style={{color: 'var(--shumba)'}} />
        </div>
        <ul className="tabs" ref={scrollRef}>
          {services.map((service, index) => (
            <li
              className={`${activeTab === index ? "active" : ""} tab`}
              onClick={() => handleTabClick(index)}
              key={index}
            >
              {service.name}
            </li>
          ))}
        </ul>
        <h2 className="subheading">{services[activeTab].sub}</h2>
        <hr />
        <div className="service-content">
          {services[activeTab].jsx}
        </div>
      </div>
      <div className="cta">
        <p>
          Experience the Shumba Money difference today and discover a world of
          exceptional services tailored to your needs. Contact us now to get
          started.
        </p>
        <a href="/#Contact" className="btn">
          Get Started Now <FaArrowRight />
        </a>
      </div>
    </main>
  );
};

export default ServicesPage;
