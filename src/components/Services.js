import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "reporting-cyberbullying",
    icon: "fas fa-shield-alt",
    title: "Reporting Cyberbullying",
    description: "Our platform helps you report cyberbullying incidents swiftly and securely.",
  },
  {
    id: "support-for-victims",
    icon: "fas fa-user-shield",
    title: "Support for Victims",
    description: "We offer emotional support and guidance for individuals affected by cyberbullying.",
  },
  {
    id: "advice-on-handling-bullying",
    icon: "fas fa-comments",
    title: "Advice on Handling Bullying",
    description: "Receive practical advice on how to handle bullying situations effectively.",
  },
  {
    id: "resources-for-safety",
    icon: "fas fa-lock",
    title: "Resources for Safety",
    description: "Access articles, hotlines, and support groups dedicated to cyberbullying prevention.",
  },
];

function Services() {
  return (
    <section id="services" className="container py-5 bg-light">
      <h3 className="mb-3">Our Services</h3>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="d-flex">
              <i className={`${service.icon} me-3`} style={{ fontSize: "24px" }}></i>
              <div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
                <Link to={`/services/${service.id}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
