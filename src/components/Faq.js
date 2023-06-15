import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the payment options?",
      answer: "We accept various payment options including credit cards, debit cards, and online payment wallets.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is confirmed, you will receive a tracking link or code to track the status of your order.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your order before it is confirmed by the restaurant. After confirmation, cancellation may not be possible.",
    },
    {
      question: "Do you charge for delivery?",
      answer: "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
    },
    {
      question: "Can I order in advance?",
      answer: "You can cancel your order before it is confirmed by the restaurant. After confirmation, cancellation may not be possible.",
    },
    {
      question: "Is there a minimum order value?",
      answer: "We have no minimum order value and you can order for any amount. ",
    },
    {
      question: "What are your delivery hours?",
      answer: "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
    },
    {
      question: "Do you support bulk orders?",
      answer: "In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.",
    },
    {
      question: "Can I change the address / number?",
      answer: "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.",
    },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-5 w-5 transform ${activeIndex === index ? "rotate-90" : "-rotate-90"}`}
              >
                <path
                  fillRule="evenodd"
                  d="M10.707 6.293a1 1 0 010 1.414L6.414 11H14a1 1 0 110 2H6.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {activeIndex === index && <p className="mt-4">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
