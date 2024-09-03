import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useEffect, useContext } from "react";
import MyContext from "../context/myContext";
import eng from "../../public/eng.json";
import { showTranslated } from "../utils/showTranslated";
const HaveQuestionBox = () => {
  return (
    <div className="border-[#e28818] p-5 max-w-[1200px] mx-auto rounded-2xl mt-20 border-2 space-y-4">
      {/* Top Text */}
      <div className="bg-[#1E1E21] w-[100%] mx-auto rounded-2xl  gap-5 p-8 flex flex-col items-center text-center ">
        <div className=" font-medium tracking-wide text-[#CAD1E9] flex ">
          <div className="ps-1 rounded-3xl w-5 me-1 my-auto h-1 border-4 bg-[#e28818] border-[#e28818]"></div>{" "}
          {showTranslated("Želite da nas kontaktirate?", eng.contactUs)}{" "}
          <div className="ps-1 rounded-3xl w-5 ms-1 my-auto h-1 border-4 bg-[#e28818] border-[#e28818]"></div>{" "}
        </div>

        {/* Main Heading */}
        <h2 className="text-gray-100 text-4xl font-normal sm:text-5xl md:text-6xl  leading-tight">
          {showTranslated("Imate neko pitanje za nas?", eng.haveAQuestion)}
        </h2>

        {/* Description */}
        <p className="text-[#CAD1E9] text-sm sm:text-base md:text-lg max-w-lg">
          {showTranslated(
            "Ukoliko želite saznati više o našim uslugama ili sarađivati sa nama, slobodno nas kontaktirajte. FIVE Grupa je tu da vam pomogne da iskoristite sve prednosti modernih tehnologija i unapredite svoje poslovanje na najbolji mogući način.",
            eng.contactUsDescription
          )}{" "}
        </p>

        {/* Contact Button */}
        <PrimaryButton
          isLink={true}
          to="/contact"
          title={showTranslated("Kontakt >", "Contact >")}
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default HaveQuestionBox;
