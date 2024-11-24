import React from "react";
import Boltshift from "../assets/boltshift.png";
import Lightbox from "../assets/lightbox.png";
import FeatherDev from "../assets/featherdev.png";
import Spherule from "../assets/spherule.png";
import GlobalBank from "../assets/globalbank.png";
import Nietzsche from "../assets/Neitzsche.png";

const LogoSection = () => {

  const logoStyle = "text-gray-900 text-2xl font-bold";

  return (
    <section className="max-w-6xl mx-auto bg-white py-4">
      <div className="text-center">
        {/* Headline */}
        <p className="text-gray-500 text-sm font-medium mb-6">
          Join 4,000+ companies already growing
        </p>

        {/* Logo Grid */}
        <div className="flex justify-center items-center flex-wrap gap-10">
          <div className="flex items-center space-x-2">
            <img
              src={Boltshift}
              alt="Boltshift"
              className="h-10"
            />
            <span className={logoStyle}>Boltshift</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={Lightbox}
              alt="Lightbox"
              className="h-10"
            />
            <span className={logoStyle}>Lightbox</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={FeatherDev} 
              alt="FeatherDev"
              className="h-10"
            />
            <span className={logoStyle}>FeatherDev</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={Spherule} 
              alt="Spherule"
              className="h-10"
            />
            <span className={logoStyle}>Spherule</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={GlobalBank} 
              alt="GlobalBank"
              className="h-10"
            />
            <span className={logoStyle}>GlobalBank</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={Nietzsche}
              alt="Nietzsche"
              className="h-10"
            />
            <span className={logoStyle}>Nietzsche</span>
          </div>
        </div>
      </div>
      <hr className="my-20 max-w-7xl m-auto px-4 sm:px-6 lg:px-8"></hr>
    </section>
  );
};

export default LogoSection;
