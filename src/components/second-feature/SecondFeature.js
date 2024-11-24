import React from "react";
import secondFeatureImg from "../../assets/secondFeatureImg.png";
import mobilePage from "../../assets/mobileImage.png";
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
        <p className="mt-4 text-center w-[580px] text-gray-600 text-base max-w-2xl mobile:w-[78%] lg:w-[60%]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <img src={secondFeatureImg} alt="hero section" className="mt-6 h-auto px-36 mobile:hidden lg:block" />
      <img src={mobilePage} alt="hero section" className="mt-6 h-auto px-5 mobile:block lg:hidden" />
      <FeaturesGrid />
      <hr className="my-20 max-w-7xl m-auto px-4 mobile:my-10 sm:px-6 lg:px-8"></hr>
    </>
  );
};

export default SecondFeature;
