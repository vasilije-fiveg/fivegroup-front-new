import React from "react";
import { showTranslated } from "../../utils/showTranslated";

const className = "hover:bg-[rgb(24,21,29)] w-20 rounded-2xl p-2";
const activeClassName = "bg-[#18151d]"; // Active class to be applied conditionally

const SelectCategory = ({ category, setCategory }) => {
  return (
    <div className="flex flex-wrap h-auto lg:h-16 rounded-2xl gap-4 lg:gap-20 mt-10 lg:mt-20 items-center justify-center text-white bg-black p-4">
      <button
        onClick={() => setCategory("sve")}
        className={`${className} ${category === "sve" ? activeClassName : ""}`}
      >
        {showTranslated("Sve", "All")}
      </button>
      <button
        onClick={() => setCategory("novosti")}
        className={`${className} ${
          category === "novosti" ? activeClassName : ""
        }`}
      >
        {showTranslated("Novosti", "News")}
      </button>
      <button
        onClick={() => setCategory("podrska")}
        className={`${className} ${
          category === "podrska" ? activeClassName : ""
        }`}
      >
        {showTranslated("Podrška", "Support")}
      </button>
      <button
        onClick={() => setCategory("samiti")}
        className={`${className} ${
          category === "samiti" ? activeClassName : ""
        }`}
      >
        {showTranslated("Samiti", "Summits")}
      </button>
      <button
        onClick={() => setCategory("saradnja")}
        className={`${className} ${
          category === "saradnja" ? activeClassName : ""
        }`}
      >
        {showTranslated("Saradnja", "Cooperation")}
      </button>
    </div>
  );
};

export default SelectCategory;
