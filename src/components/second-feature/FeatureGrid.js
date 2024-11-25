import React from "react";
import { DelivaryIcon, InboxIcon, ManageIcon } from "../../assets/Icons";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <InboxIcon/>,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: <DelivaryIcon/>,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: <ManageIcon/>,
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
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a
              href="#"
              className="text-purple-600 font-medium hover:underline flex items-center justify-center"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
