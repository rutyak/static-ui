import React from "react";
import {Boltshift, GLobalBank, Spherule, FeatherDev, Lightbox, Nietzsche} from "../assets/Icons";

const LogoSection = () => {

  const logoStyle = "text-gray-900 text-3xl font-bold mobile:text-xl lg:text-2xl";

  return (
    <section className="max-w-7xl mt-10 mx-auto bg-white py-4">
      <div className="text-center">
        <p className="text-gray-500 text-sm font-medium mb-6">
          Join 4,000+ companies already growing
        </p>

        <div className="flex justify-center items-center flex-wrap gap-10 xl:gap-14">
          <div className="flex items-center space-x-2">
            <Boltshift/>
            <span className={logoStyle}>Boltshift</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lightbox/>
            <span className={logoStyle}>Lightbox</span>
          </div>
          <div className="flex items-center space-x-2">
            <FeatherDev/>
            <span className={logoStyle}>FeatherDev</span>
          </div>
          <div className="flex items-center space-x-2">
            <Spherule/>
            <span className={logoStyle}>Spherule</span>
          </div>
          <div className="flex items-center space-x-2">
            <GLobalBank/>
            <span className={logoStyle}>GlobalBank</span>
          </div>
          <div className="flex items-center space-x-2">
            <Nietzsche />
            <span className={logoStyle}>Nietzsche</span>
          </div>
        </div>
      </div>
      <hr className="my-20 max-w-7xl m-auto px-4 mobile:my-10 sm:px-6 lg:px-8"></hr>
    </section>
  );
};

export default LogoSection;
