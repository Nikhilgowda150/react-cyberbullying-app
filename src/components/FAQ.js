import React, { useState } from "react";

const faqs = [
  {
    question: "What is cyberbullying?",
    answer: "Cyberbullying is the use of digital technology to harass, threaten, or harm others. It can occur through social media, text messages, and other online platforms.",
  },
  {
    question: "How can I report cyberbullying?",
    answer: "You can report cyberbullying incidents through our platform, which provides a secure and straightforward reporting process.",
  },
  {
    question: "What should I do if I'm being bullied online?",
    answer: "If you're being bullied online, save evidence, block the bully, and reach out for support. You can also report the bullying.",
  },
  {
    question: "Are there resources available for victims of cyberbullying?",
    answer: "Yes, we provide a variety of resources, including hotlines, articles, and links to support groups.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active question

  const toggleAnswer = (index) => {
    // If the clicked question is already active, close it. Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container py-5 bg-light">
      <h3 className="mb-4 text-center">Frequently Asked Questions</h3>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAnswer(index)} // Toggle the answer visibility on click
                aria-expanded={activeIndex === index ? "true" : "false"} // Set aria-expanded dynamically
                aria-controls={`collapse${index}`}
                style={{
                  backgroundColor: "#f8f9fa", // Light background for button
                  color: "#000", // Dark text color for visibility
                  fontWeight: "bold", // Make the question stand out
                  border: "1px solid #ccc", // Border to make the button more defined
                  padding: "10px 20px", // Add some padding for better spacing
                }}
              >
                <span>{faq.question}</span>
                
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body" style={{ backgroundColor: "#e9ecef" }}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
