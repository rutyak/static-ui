import React from "react";
import secondFeatureImg from "../../assets/secondFeatureImg.png";
import FeaturesGrid from "./FeatureGrid";

const SecondFeature = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* Tag */}
        <div className="mb-4">
          <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            Features
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center font-sans text-2xl md:text-3xl font-bold text-gray-900">
          Cutting-edge features for advanced analytics
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-center w-[580px] text-gray-600 text-base max-w-2xl mobile:w-[280px] lg:w-[580px]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <img
        src={secondFeatureImg}
        alt="hero section"
        className="mt-6 h-auto px-36"
      />
      <FeaturesGrid />
      <hr className="my-12 w-[88%] m-auto"></hr>
    </>
  );
};

export default SecondFeature;
