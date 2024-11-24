import React from "react";
import Boltshift from "../assets/boltshift.png";
import Lightbox from "../assets/lightbox.png";
import FeatherDev from "../assets/featherdev.png";
import Spherule from "../assets/spherule.png";
import GlobalBank from "../assets/globalbank.png";
import Nietzsche from "../assets/Neitzsche.png";

const LogoSection = () => {

  const logoStyle = "text-gray-900 text-2xl font-bold mobile:text-xl lg:text-2xl";
  const iconStyle = "h-10 mobile:h-7 lg:h-10";

  return (
    <section className="max-w-7xl mt-10 mx-auto bg-white py-4">
      <div className="text-center">
        <p className="text-gray-500 text-sm font-medium mb-6">
          Join 4,000+ companies already growing
        </p>

        <div className="flex justify-center items-center flex-wrap gap-10 xl:gap-14">
          <div className="flex items-center space-x-2">
            <img
              src={Boltshift}
              alt="Boltshift"
              className={iconStyle}
            />
            <span className={logoStyle}>Boltshift</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={Lightbox}
              alt="Lightbox"
              className={iconStyle}
            />
            <span className={logoStyle}>Lightbox</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={FeatherDev} 
              alt="FeatherDev"
              className={iconStyle}
            />
            <span className={logoStyle}>FeatherDev</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={Spherule} 
              alt="Spherule"
              className={iconStyle}
            />
            <span className={logoStyle}>Spherule</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={GlobalBank} 
              alt="GlobalBank"
              className={iconStyle}
            />
            <span className={logoStyle}>GlobalBank</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={Nietzsche}
              alt="Nietzsche"
              className={iconStyle}
            />
            <span className={logoStyle}>Nietzsche</span>
          </div>
        </div>
      </div>
      <hr className="my-20 max-w-7xl m-auto px-4 mobile:my-10 sm:px-6 lg:px-8"></hr>
    </section>
  );
};

export default LogoSection;
