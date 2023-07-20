import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { services } from "../../constants";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ serviceName, serviceIcon, serviceDescription }) => {
  const navigate = useNavigate();
  return (
    <article className="service-card">
      <div className="service-content">
        <div className="icon">{serviceIcon}</div>
        <div className="service-name">
          <h1 style={{ fontStyle: "italic" }}>{serviceName}</h1>
        </div>
        <div className="service-description">
          <p>{serviceDescription}</p>
        </div>
      </div>
      <button className="btn btn-outline" onClick={() => navigate("/services")}>
        Know More <FaArrowRight />
      </button>
    </article>
  );
};

const Services = () => {
  return (
    <section className="Services" id="services">
      <div className="heading">
        <h1>Our Services</h1>
        <hr />
        <p>
          Shumba Money Official offers a wide variety of services to businesses
          and individuals.
        </p>
      </div>
      <div className="cards-container">
        {services.map((service) => (
          <div key={service.name}>
            <ServiceCard
              serviceIcon={service.icon}
              serviceName={service.name}
              serviceDescription={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
