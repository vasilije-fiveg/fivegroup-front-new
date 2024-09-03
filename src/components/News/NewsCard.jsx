import React from "react";
import sia from "../../../public/assets/sia.png";

const NewsCard = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 rounded-xl bg-black/50">
      <div className="w-full md:w-1/2">
        <img
          src={sia} // Replace with your image URL
          alt="NewsCard image"
          className="rounded-xl w-full md:h-full"
        />
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4 flex flex-col justify-between text-[#CAD1E9]">
        <div>
          <p className="text-sm">July 13, 2022</p>
          <h2 className="text-xl font-bold mt-2">
            12 Mobile UX Design Trends For 2018
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Things move quickly in the mobile app universe. To succeed in the
            field of mobile UX design, designers must have the foresight and
            prepare for new challenges around the corner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
