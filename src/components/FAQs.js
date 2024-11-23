import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can." },
    {
      question: "What is your cancellation policy?",
      answer: "Cancel anytime.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, additional information can be added upon request.",
    },
    {
      question: "How does billing work?",
      answer: "Billing occurs monthly and will be debited automatically.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update it in your account settings.",
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">
          Frequently asked questions
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Everything you need to know about the product and billing.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 transition duration-200 hover:shadow-md"
            >
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-gray-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex space-x-2 mb-4">
          {/* Replace these with actual image URLs */}
          <img
            src="https://via.placeholder.com/40"
            alt="User 1"
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src="https://via.placeholder.com/40"
            alt="User 2"
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src="https://via.placeholder.com/40"
            alt="User 3"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Still have questions?
        </h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">
          Get in touch
        </button>
      </div>
    </>
  );
};

export default FAQs;