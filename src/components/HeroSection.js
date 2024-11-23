import React from "react";
import herosectionimage from "../assets/herosectionimage.png";
import arrowIcon from "../assets/arrowIcon.png";
import demoIcon from "../assets/demoIcon.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tagline */}
        <div className="text-sm font-medium text-purple-600 mb-4 flex justify-center items-center">
          <a href="#" className="hover:underline">
            New feature
          </a>{" "}
          <span className="text-gray-500 mx-2">|</span>
          <a href="#" className="hover:underline">
            Check out the team dashboard
          </a>
          <img src={arrowIcon} alt="arrow-icon" className="ml-2 text-[10px]" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Beautiful analytics to grow smarter
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-500 mb-8">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-900 hover:text-white transition duration-300"
          >
            <img src={demoIcon} alt="demoIcon" className="mr-2 h-5 w-5" />
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
      <img src={herosectionimage} alt="hero section" className="mt-10" />
    </section>
  );
};

export default HeroSection;
