import React from "react";
import vrarmory from "../../../public/assets/vrarmory.png";
import bg from "../../../public/assets/image.png";
import PrimaryButton from "../PrimaryButton";
import { showTranslated } from "../../utils/showTranslated";
const VrArmorySection = () => {
  return (
    <div className="container  mx-auto px-4">
      <div className="vr-armory relative h-[30rem] md:h-[50rem]">
        {" "}
        <h1 className="text-3xl md:text-4xl text-center text-[#CAD1E9] mt-10 md:mt-20">
          {showTranslated("VRARMORY PROJEKAT", "VRARMORY PROJECT")}
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[25rem] md:h-[35rem] w-full  mx-auto">
            <img
              className="h-full w-full rounded-3xl object-cover"
              src={bg}
              alt="Background"
            />
            <div className="absolute inset-0 w-full bg-black bg-opacity-70 flex items-center justify-center rounded-xl transition-opacity duration-300 ease-in-out hover:opacity-0">
              <a
                href="https://vrarmory.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full flex justify-center items-center"
              >
                <img
                  src={vrarmory}
                  alt="Overlay Image"
                  className="max-w-[70%] max-h-[70%] md:max-w-[80%] md:max-h-[80%]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <PrimaryButton
          title={showTranslated("Saznaj više >", "Learn more >")}
          isLink={true}
          to={"https://vrarmory.net/"}
        />
      </div>
    </div>
  );
};

export default VrArmorySection;
