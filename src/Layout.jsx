import React from "react";
import Header from "./components/Header";
import CuttedCard from "./components/Home/CuttedCard";
import sjaj from "../public/assets/sjaj.png";
import HaveQuestionBox from "./components/HaveQuestionBox";
import Footer from "./components/Footer";
const Layout = ({ children }) => {
  console.log(window.location.pathname);
  return (
    <div className="w-full">
      <Header />

      {children}
      {window.location.pathname !== "/contact" && <HaveQuestionBox />}

      <Footer />
    </div>
  );
};

export default Layout;
