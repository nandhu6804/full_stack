import React, { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleQuestion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I contact support?",
      answer: "You can contact us by filling out the contact form on our Contact page or reaching out to us on our social media channels."
    },
    {
      question: "What is your return policy?",
      answer: "Our return policy allows you to return items within 30 days of purchase. For more details, please refer to our Return & Refund page."
    },
    {
      question: "Can I update my order after it's placed?",
      answer: "Once an order is placed, it cannot be updated. However, you can cancel it within the first 24 hours and place a new one."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping. Shipping rates and times may vary depending on your location."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order through the tracking link provided in the order confirmation email."
    },
    {
      question: "Do you accept guest checkout?",
      answer: "Yes, we allow guest checkout. You can complete your purchase without creating an account."
    },
  ];

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#00796b',
          fontWeight: 'bold',
        }}
      >
        Frequently Asked Questions (FAQ)
      </h1>

      {faqData.map((faq, index) => (
        <div
          key={index}
          style={{
            background: '#ffffff',
            marginBottom: '15px',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onClick={() => toggleQuestion(index)}
        >
          <h3
            style={{
              color: '#00796b',
              fontSize: '1.5rem',
              margin: '0',
              fontWeight: 'bold',
            }}
          >
            {faq.question}
          </h3>
          {expanded === index && (
            <p
              style={{
                color: '#004d40',
                fontSize: '1.2rem',
                marginTop: '10px',
                fontStyle: 'italic',
              }}
            >
              {faq.answer}
            </p>
          )}
        </div>
      ))}

      <div
        style={{
          marginTop: '20px',
          background: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 style={{ color: '#00796b' }}>Can't find the answer you're looking for?</h3>
        <p>Feel free to <a href="/contact" style={{ color: '#00796b' }}>contact us</a> for further assistance.</p>
      </div>
    </div>
  );
};

export default FAQ;