import React from "react";
import herosectionimage from "../assets/herosectionimage.png";
import demoIcon from "../assets/demoIcon.png";
import arrowIcon from "../assets/arrowIcon.png";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto text-center justify-center ">
        {/* Tagline */}
        <div className="flex justify-center w-[400px] m-auto items-center space-x-4 border border-purple-400 rounded-full p-1 bg-purple-50 mb-10 mobile:w-[90%] lg:w-[80%]">
          {/* New Feature Badge */}
          <a
            href="#"
            className="text-md w-[35%] font-medium text-purple-600 bg-white border border-purple-400 rounded-full py-1 hover:underline mobile:text-[12px] lg:text-md"
          >
            New feature
          </a>
          {/* Description and Arrow */}
          <a
            href="#"
            className="text-md w-[65%] font-medium text-purple-600 flex items-center hover:underline mobile:text-[12px] md:text-md"
          >
            Check out the team dashboard
            <img src={arrowIcon} alt="arrow-icon" className="w-5 h-4 ml-2" />
          </a>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold sm:text-5xl font-sans text-gray-900 mb-4">
            Beautiful analytics to grow smarter
          </h1>

          {/* Subheading */}
          <p className="text-md w-[580px] text-gray-500 mb-8 mobile:w-[280px] lg:w-[580px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mobile:flex-col mobile:w-[100%]  mobile:items-center lg:flex-row">
          <a
            href="#"
            className="flex items-center px-6 py-3 bg-transparent border-2 border-gray-200 text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-200 transition duration-300"
          >
            <img src={demoIcon} alt="demoIcon" className="mr-2 h-4 w-4" />
            Demo
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold text-sm rounded-xl hover:bg-purple-700 transition duration-300"
          >
            Sign up
          </a>
        </div>
      </div>
      <img src={herosectionimage} alt="hero section" className="mt-10 px-10" />
    </section>
  );
};

export default HeroSection;
