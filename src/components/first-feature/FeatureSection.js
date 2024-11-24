import React from "react";
import indexIcon from "../../assets/inboxIcon.png";
import delivaryIcon from "../../assets/deliverIcon.png";
import manageIcon from "../../assets/manageIcon.png";
import connectIcon from "../../assets/connectIcon.png";
import customerIcon from "../../assets/customeConnectIcon.png";
import peopleIcon from "../../assets/peopleIcon.png";
import sisfusIcon from "../../assets/sisIcon.png";
import candiceIcon from "../../assets/candisPreofileIcon.png"

const FeaturesSection = () => {
  const features = [
    {
      icon: indexIcon, 
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: delivaryIcon, 
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: manageIcon, 
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple of clicks.",
    },
    {
      icon: connectIcon,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: customerIcon, 
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: peopleIcon, 
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white max-w-7xl m-auto">
        <p className="text-sm font-medium text-purple-600">
          Features
        </p>
        <h2 className="text-3xl font-sans font-bold text-gray-900 text-center mt-2">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-center text-gray-500 mt-4 mobile:w-[280px] sm:w-[300px] md:w-[330px] lg:w-[450px] xl:w-[580px]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="py-16 mobile:py-8 sm:py-7 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white p-6 rounded-lg transition"
              >
                <img src={feature.icon} alt="icons" className="mb-4 w-10 h-10"/>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-center text-gray-500 mobile:w-[280px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 flex flex-col items-center gap-7 bg-gray-50 px-4 mt-16">
          {/* Logo */}
          <div className="flex items-center">
           <img src={sisfusIcon} alt="sisfus" className="w-8 h-8"/>
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Sisyphus
            </span>
          </div>

          {/* Testimonial Text */}
          <p className="text-center text-3xl font-sans font-medium text-gray-700 max-w-3xl">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </p>

          {/* User Info */}
          <div className="flex flex-col justify-center items-center">
            <img
              src={candiceIcon}
              alt="Candice Wu"
              className="w-10 h-10 rounded-full "
            />
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">Candice Wu</p>
              <p className="text-sm text-gray-500">Product Manager, Sisyphus</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
