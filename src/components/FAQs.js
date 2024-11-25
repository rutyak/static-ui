import React, { useState } from "react";
import multipleIcons from "../assets/multipleIcon.png";
import { Maximize, Minimize } from "../assets/Icons";

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
      <div className="p-6 max-w-2xl m-auto">
        <h1 className="text-2xl font-semibold font-sans text-center">
          Frequently asked questions
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Everything you need to know about the product and billing.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b rounded-lg p-4 transition duration-200 mobile:p-1 mobile:py-3 lg:p-4"
            >
              <button
                className="flex justify-between items-center w-full"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium mobile:text-md mobile:w-[90%] mobile:text-left lg:font-medium lg:text-medium">{faq.question}</span>
                <span className="text-gray-500">
                  {activeIndex === index ? (
                    <Minimize/>
                  ) : (
                    <Maximize/>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[84%] m-auto items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex space-x-2 mb-4">
          <img src={multipleIcons} alt="profiles" className="w-35 h-10"/>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Still have questions?
        </h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700">
          Get in touch
        </button>
      </div>
      <hr className="my-20 max-w-7xl m-auto px-4 mobile:my-10 sm:px-6 lg:px-8"></hr>
    </>
  );
};

export default FAQs;
