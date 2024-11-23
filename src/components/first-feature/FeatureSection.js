import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "💌", // Placeholder for an icon
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: "⚡", // Placeholder for an icon
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: "📊", // Placeholder for an icon
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple of clicks.",
    },
    {
      icon: "💬", // Placeholder for an icon
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: "🔗", // Placeholder for an icon
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: "🤝", // Placeholder for an icon
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 bg-white">
        <p className="text-sm font-medium text-purple-600 uppercase">
          Features
        </p>
        <h2 className="text-3xl font-bold text-gray-900 text-center mt-2">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-center text-gray-500 mt-4">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-50 px-4 mt-20">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l-7.5-7.5m7.5 7.5l7.5-7.5"
              />
            </svg>
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Sisyphus
            </span>
          </div>

          {/* Testimonial Text */}
          <p className="text-center text-lg font-medium text-gray-700 max-w-2xl">
            "We’ve been using Untitled to kick start every new project and can’t
            imagine working without it."
          </p>

          {/* User Info */}
          <div className="flex items-center mt-6">
            {/* Avatar */}
            <img
              src="https://via.placeholder.com/40"
              alt="Candice Wu"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4">
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
