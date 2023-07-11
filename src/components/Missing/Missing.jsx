import React from "react";
import { useNavigate } from "react-router-dom";
import "./Missing.css";

const Missing = () => {
  const navigate = useNavigate();
  return (
    <section className="Missing">
      <div className="heading">
        <h1>OOPs! Page Not Found</h1>
        <hr />
      </div>
      <p>
        Looks like you are looking for a page that does not exist on our site.
        Please check the URL or go back to the homepage
      </p>
      <button className="btn btn-missing" onClick={() => navigate("/")}>
        Go To Our Homepage
      </button>
    </section>
  );
};

export default Missing;
