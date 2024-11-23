import React from "react";
import secondFeatureImg from "../../assets/secondFeature.png";
import FeaturesGrid from "./FeatureGrid";

const SecondFeature = () => {
  return (
    <>
      <div className="flex flex-col items-center py-16 bg-gray-50 px-4 mt-10">
        {/* Tag */}
        <div className="mb-4">
          <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            Features
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-900">
          Cutting-edge features for advanced analytics
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-center text-gray-600 text-base max-w-2xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <img src={secondFeatureImg} alt="hero section" className="mt-10" />
      <FeaturesGrid/>
    </>
  );
};

export default SecondFeature;
