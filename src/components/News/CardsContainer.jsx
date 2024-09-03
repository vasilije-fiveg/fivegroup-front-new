import React from "react";
import NewsCard from "./NewsCard";

const CardsContainer = () => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Render multiple NewsCard components here */}
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      {/* Add as many NewsCard components as needed */}
    </div>
  );
};

export default CardsContainer;
