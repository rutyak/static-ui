import React from "react";
import herosectionimage from "../assets/herosectionimage.png";
import { Arrowicon, DemoIcon } from "../assets/Icons";

const HeroSection = () => {
  return (
    <section className="pt-16 ">
      <div className="max-w-7xl mx-auto text-center justify-center ">
        <div className="flex justify-center w-[400px] m-auto items-center gap-2 border border-purple-400 rounded-full py-0.5 bg-purple-50 mb-5 mobile:w-[330px] sm:w-[360PX] sm:p-1 sm:px-1">
          <a
            href="/"
            className="text-md font-medium text-purple-600 bg-white border border-purple-400 rounded-full py-1 hover:underline mobile:text-[12px] mobile:w-[120px] sm:text-sm lg:text-md "
          >
            New feature
          </a>
          <a
            href="/"
            className="text-md font-medium text-purple-600 flex items-center hover:underline mobile:text-[12px] mobile:leading-5 sm:text-sm md:text-md"
          >
            Check out the team dashboard
            <Arrowicon/>
           </a>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold sm:text-5xl font-sans text-gray-900 mb-4">
            Beautiful analytics to grow smarter
          </h1>

          {/* Subheading */}
          <p className="text-md w-[580px] text-gray-500 mb-8 mobile:w-[78%] lg:w-[60%]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mobile:flex-col-reverse mobile:w-full mobile:items-center lg:flex-row">
          <a
            href="/"
            className="flex items-center justify-center gap-1 px-6 py-3 bg-transparent border-2 border-gray-200 text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-200 mobile:w-[90%] lg:w-[10%]"
          >
            <DemoIcon/>
            <span>Demo</span>
          </a>
          <a
            href="/"
            className="flex justify-center px-6 py-3 bg-purple-600 text-white font-semibold text-sm rounded-xl hover:bg-purple-700 mobile:w-[90%] lg:w-[10%]"
          >
            Sign up
          </a>
        </div>
      </div>
      <img src={herosectionimage} alt="hero section" className="mt-10 px-10 mobile:px-2 lg:px-10 xl:px-24" />
    </section>
  );
};

export default HeroSection;
