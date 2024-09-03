import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ onClick, title, isLink, to }) => {
  return (
    <>
      {isLink ? (
        <Link
          to={to}
          className="capitalize text-center p-3 text-[#CAD1E9] w-40 hover:bg-gray-800 rounded-2xl border-2 border-[#e28818] bg-white bg-opacity-20 backdrop-blur-md shadow-lg"
        >
          {" "}
          {title}
        </Link>
      ) : (
        <button
          onClick={onClick ? onClick : () => console.log("")}
          className="capitalize  text-center  w-40 hover:bg-gray-800 rounded-2xl border-2   border-[#e28818] "
        >
          {" "}
          {title}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
