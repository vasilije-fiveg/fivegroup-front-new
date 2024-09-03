import React from "react";
import line from "../../../public/assets/linija.png";
import check from "../../../public/assets/check.png";
import visual from "../../../public/assets/what-we-do.png";
import eng from "../../../public/eng.json";
import { showTranslated } from "../../utils/showTranslated";
const WhatWeDoSection = () => {
  const isMobile = window.innerWidth < 992;
  return (
    <div className="container flex w-full mx-auto p-4 bg-gradient-to-tr from-black to-[#53546C] rounded-2xl">
      {!isMobile && <img src={line} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className=" p-4">
          {" "}
          <h2 className="text-white text-2xl">
            {showTranslated("Čime se bavimo", eng.whatWeDo)}
          </h2>
          <p className="text-[#CAC6DD] mt-10 flex gap-5">
            {" "}
            <img className="h-8 w-auto" src={check} />
            {showTranslated(
              "Five Grupa je specijalizovana za pružanje naprednih tehnoloških rešenja u različitim sferama poput korporativnog, akademskog i bezbjednosnog sektora.",
              eng.whatWeDo1
            )}
          </p>
          <p className="text-[#CAC6DD] flex gap-5 mt-10 ">
            {" "}
            <img className="h-8 w-auto" src={check} />
            {showTranslated(
              " Naša misija je da svojim klijentima omogućimo pristup efikasnim i inovativnim tehnologijama koje unapređuju njihove operacije i pomažu im da ostvare svoje ciljeve.",
              eng.whatWeDo2
            )}
          </p>
          <p className="text-[#CAC6DD] flex gap-5 mt-10 ">
            {" "}
            <img className="h-8 w-auto" src={check} />
            {showTranslated(
              "Transformišemo način na koji svijet posmatra i koristi tehnologiju.",
              eng.whatWeDo3
            )}
          </p>
        </div>

        <div className=" p-4">
          <img src={visual} alt="Visual" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
