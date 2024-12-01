import React from "react";
import { useParams } from "react-router-dom";

const serviceDetails = {
  "reporting-cyberbullying": {
    title: "Reporting Cyberbullying",
    content: "Here's a detailed guide on how to report cyberbullying incidents effectively.",
  },
  "support-for-victims": {
    title: "Support for Victims",
    content: "We provide emotional support and connect you with professionals for help.",
  },
  "advice-on-handling-bullying": {
    title: "Advice on Handling Bullying",
    content: "Discover effective strategies and tips to handle bullying situations.",
  },
  "resources-for-safety": {
    title: "Resources for Safety",
    content: "Explore articles, hotlines, and tools to ensure your online safety.",
  },
};

function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <section className="container py-5">
      <h3>{service.title}</h3>
      <p>{service.content}</p>
    </section>
  );
}

export default ServiceDetail;
