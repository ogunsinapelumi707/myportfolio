import React from "react";
import "./Services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
      
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>SOFTWARE AND WEB DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            {[
              "Custom web application development tailored to your business needs.",
              "Responsive website design with modern UI/UX principles.",
              "API development and integration for seamless connectivity.",
              "Database design and management for efficient data handling.",
              "E-commerce platform development using the latest technologies.",
              "I bring your ideas to life with cutting-edge software solutions",
            ].map((service, index) => (
              <li key={index}>
                <BsCheck className="service_list_icon" />
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
       
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
