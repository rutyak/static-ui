import React from "react";
import inboxIcon from "../../assets/inboxIcon.png";
import deliveryIcon from "../../assets/deliverIcon.png";
import manageIcon from "../../assets/manageIcon.png";

const FeaturesGrid = () => {
  const features = [
    {
      icon: inboxIcon,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: deliveryIcon,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: manageIcon,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg"
          >
            <img src={feature.icon} alt="image..." className="w-10 h-10" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a
              href="#"
              className="text-purple-600 font-medium hover:underline flex items-center justify-center"
            >
              Learn more{" "}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
