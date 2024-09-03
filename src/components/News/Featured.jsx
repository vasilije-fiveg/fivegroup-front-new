import React from "react";
import sia from "../../../public/assets/sia.png";

const Featured = () => {
  return (
    <div className="mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-[#CAD1E9]">
      {/* First Card - Takes 1/2 width on medium screens and up */}
      <div className="shadow-lg rounded-2xl border border-gray-200 overflow-hidden transform transition-transform hover:scale-105 md:col-span-1 bg-transparent">
        <img
          src={sia}
          alt="Social Impact Award"
          className="h-48 w-full object-cover bg-transparent"
          style={{ backgroundColor: "transparent" }} // Ensures img background is transparent
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold">Podrška SIA programu</h3>
        </div>
      </div>

      {/* Second Column containing two cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:col-span-1">
        {/* Second Card */}
        <div className="shadow-lg rounded-2xl border border-gray-200 overflow-hidden transform transition-transform hover:scale-105 bg-transparent">
          <img
            src={sia}
            alt="Tehnološka Izvrsnost"
            className="h-48 w-full object-cover bg-transparent"
            style={{ backgroundColor: "transparent" }} // Ensures img background is transparent
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold">Tehnološka Izvrsnost</h3>
          </div>
        </div>

        {/* Third Card */}
        <div className="shadow-lg rounded-2xl border border-gray-200 overflow-hidden transform transition-transform hover:scale-105 bg-transparent">
          <img
            src={sia}
            alt="Društvena Odgovornost"
            className="h-48 w-full object-cover bg-transparent"
            style={{ backgroundColor: "transparent" }} // Ensures img background is transparent
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold">Društvena Odgovornost</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
