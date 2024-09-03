import React, { useState } from "react";
import Featured from "../components/News/Featured";
import SelectCategory from "../components/News/SelectCategory";
import CardsContainer from "../components/News/CardsContainer";
const NewsPage = () => {
  const [category, setCategory] = useState("sve");
  return (
    <div className="lg:w-[1200px] ms-auto me-auto">
      <Featured />
      <SelectCategory setCategory={setCategory} category={category} />
      <CardsContainer />
    </div>
  );
};

export default NewsPage;
