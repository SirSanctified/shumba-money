import React from "react";
import "./Brands.css";
import { brands } from "../../assets";

const Brands = () => {
  return (
    <section className="Brands">
      <div className="heading">
        <h1>Some Of Our Brands</h1>
        <hr />
        <p>
          Get the best quality products from the best brands in the world.
        </p>
      </div>
      <div className="brands-container">
        {brands.map((brand, index) => (
          <div className="brand" key={index}>
            <img src={brand} alt="brand" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
