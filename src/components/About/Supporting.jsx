import React from "react";

// Import actual image paths
import sia from "../../../public/assets/sia.png";
import fll from "../../../public/assets/fll.png";
import msp from "../../../public/assets/mne-space-research.png";
import eyca from "../../../public/assets/eyca.png";
import { showTranslated } from "../../utils/showTranslated";
const Supporting = () => {
  return (
    <div className="text-[#CAD1E9] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Card */}
      <div className="bg-transparent bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl border border-[#CAD1E9] flex flex-col items-center overflow-hidden transform transition-transform hover:scale-105">
        <img
          src={sia}
          alt="Social Impact Award"
          className="h-48 w-full object-cover rounded-tr-2xl rounded-tl-2xl"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2">
            {showTranslated("Podrška SIA programu", "Support for SIA program")}
          </h3>
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-transparent bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl border border-[#CAD1E9] flex flex-col items-center overflow-hidden transform transition-transform hover:scale-105">
        <img
          src={fll}
          alt="First Lego League"
          className="h-48 w-full border-white border-b-2 object-cover rounded-tr-2xl rounded-tl-2xl"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2">
            {showTranslated(
              "Podrška First Lego League",
              "Support for First Lego League"
            )}
          </h3>
        </div>
      </div>

      {/* Third Card */}
      <div className="bg-transparent bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl border border-[#CAD1E9] flex flex-col items-center overflow-hidden transform transition-transform hover:scale-105">
        <img
          src={msp}
          alt="Montenegro Space Research"
          className="h-48 border-white border-b-2 w-full object-cover rounded-tr-2xl rounded-tl-2xl"
        />
        <div className="p-4 ">
          <h3 className="text-2xl font-semibold mb-2">
            Montenegro Space Research
          </h3>
        </div>
      </div>

      <div className="bg-transparent bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl border border-[#CAD1E9] flex flex-col items-center overflow-hidden transform transition-transform hover:scale-105">
        <img
          src={eyca}
          alt="European Youth Card Association"
          className="h-48 w-full object-cover rounded-tr-2xl rounded-tl-2xl"
        />
        <div className="p-4  ">
          <h3 className="text-2xl  font-semibold mb-2">
            {showTranslated(
              "Evropska Omladinska Kartica",
              "European Youth Card Association"
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Supporting;
