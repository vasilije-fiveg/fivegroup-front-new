import React from "react";
import logo from "../../../public/assets/fiveglogo.png";
import asteroid1 from "../../../public/assets/asteroid1.png";
import asteroid2 from "../../../public/assets/asteroid2.png";
import asteroid3 from "../../../public/assets/asteroid3.png";
import eng from "../../../public/eng.json";
function HeroSection() {
  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col lg:flex-row mt-40">
        {/* First Column */}
        <div className="flex-1 text-center lg:text-left relative z-20">
          <img
            src={logo}
            alt="fiveg logo"
            className="w-[20%] mx-auto lg:mx-0"
          />
          <h1 className="text-5xl lg:text-8xl font-bold mt-5 text-white">
            Shape the
          </h1>
          <h1 className="text-5xl lg:text-8xl font-bold text-[#F05A22]">
            Future
          </h1>
        </div>

        {/* Second Column with Floating Images */}
        <div className="flex-1 relative mt-10 lg:mt-0 flex flex-wrap justify-center lg:justify-start">
          <img
            src={asteroid1}
            alt="Asteroid 1"
            className="w-32 lg:w-48 mb-4 lg:absolute lg:top-10 lg:left-10 z-10 asteroid"
          />
          <img
            src={asteroid2}
            alt="Asteroid 2"
            className="w-40 lg:w-60 mb-4 lg:absolute lg:top-1/2 lg:right-10 z-20 asteroid"
          />
          <img
            src={asteroid3}
            alt="Asteroid 3"
            className="w-64 lg:w-96 lg:absolute lg:bottom-10 lg:left-1/4 z-30 asteroid"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center mt-40 relative">
        <div className="relative flex items-center flex-col z-10">
          {" "}
          <img src={logo} alt="fiveg logo" className="w-[50%] mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Shape the</h1>
          <h1 className="text-4xl font-bold text-[#F05A22]">Future</h1>
        </div>
        {/* Floating Images */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={asteroid1}
            alt="Asteroid 1"
            className="w-24 mt-6 absolute left-1/4 top-1/4 asteroid"
          />
          <img
            src={asteroid2}
            alt="Asteroid 2"
            className="w-32 absolute right-1/4 top-1/2 asteroid"
          />
          <img
            src={asteroid3}
            alt="Asteroid 3"
            className="w-48 absolute left-1/4 bottom-10 asteroid"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
