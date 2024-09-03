import AboutUsSection from "./components/Home/AboutUsSection";
import HeroSection from "./components/Home/HeroSection";
import VrArmorySection from "./components/Home/VrArmorySection";
import asteroid1 from "../public/assets/asteroid1.png";
import asteroid2 from "../public/assets/asteroid2.png";
import WhatWeDoSection from "./components/Home/WhatWeDoSection";
import Partners from "./components/Home/Partners";
import MyContext from "./context/myContext";
import { useEffect, useContext } from "react";
import eng from "../public/eng.json";
import { showTranslated } from "./utils/showTranslated";
function App() {
  const isMobile = window.innerWidth < 992;

  return (
    <div className="lg:w-[1200px] ms-auto me-auto">
      <HeroSection /> <AboutUsSection />
      <VrArmorySection />
      <div className="flex flex-col lg:flex-row lg:gap-20 p-4">
        <div className="text-white font-semibold text-2xl lg:text-3xl lg:w-[60%] mt-10 lg:mt-20">
          {showTranslated(
            "Uz posvećenost inovacijama, vrhunskoj stručnosti i stalnoj težnji za izvrsnošću, naša grupa nastavlja da oblikuje budućnost tehnološkog svijeta i ostavlja dubok i pozitivan uticaj na ",
            eng.commitmentToInnovation
          )}
          <span className="bg-[#F05A22] text-white">
            {showTranslated("društvo i industriju.", "society and industry.")}
          </span>
          <img
            alt="asteroid"
            className="asteroid w-20 lg:w-32   lg:ml-[100%] mt-4   lg:mt-0 mx-auto"
            src={asteroid1}
          />
        </div>
        {!isMobile && (
          <img
            alt="asteroid"
            className="asteroid mt-4  sm:w-[20%] lg:mt-0 mx-auto"
            src={asteroid2}
          />
        )}
      </div>
      <WhatWeDoSection />
      <Partners />
    </div>
  );
}

export default App;
