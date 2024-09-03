import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/fiveglogo.png";
import PrimaryButton from "./PrimaryButton";
import usFlag from "../../public/assets/eng.png";
import mneFlag from "../../public/assets/mne.png";
import MyContext from "../context/myContext";
import { showTranslated } from "../utils/showTranslated";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth < 992;
  const { setLang } = useContext(MyContext);

  return (
    <div
      className={`lg:w-[1200px] md:w-[100%] sm:w-[100%] text-white ms-auto z-20 inset-0 relative me-auto lg:mt-5 p-3 
                  bg-[rgba(1,1,1,0.1)] flex items-center justify-between 
                  ${
                    isOpen ? "rounded-none" : "lg:rounded-xl"
                  } lg:rounded-xl transition-all duration-300`}
    >
      <Link to={"/"}>
        <img src={logo} width={150} alt="five-group-logo" />
      </Link>

      <div className="hidden lg:flex justify-center items-center w-[90%] gap-10 ms-auto me-auto">
        <Link to={"/"}>Shape The Future</Link>
        <Link to={"/about"}> {showTranslated("O nama", "About Us")} </Link>
        <Link to={"/news"}> {showTranslated("Novosti", "News")} </Link>
        <Link to={"/nato"}>NATO Ncage</Link>
      </div>

      <div className="flex items-center gap-4">
        {!isMobile && (
          <>
            <PrimaryButton
              isLink={true}
              to="/contact"
              title={showTranslated("Kontakt >", "Contact >")}
            />
            <div className="flex gap-2">
              <button onClick={() => setLang("en")}>
                <img src={usFlag} alt="US Flag" width={30} height={20} />
              </button>
              <button onClick={() => setLang("me")}>
                <img
                  src={mneFlag}
                  alt="Montenegro Flag"
                  width={30}
                  height={20}
                />
              </button>
            </div>
          </>
        )}
      </div>

      <button
        className="lg:hidden flex items-center text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Burger Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[rgba(1,1,1,0.9)] z-[10000] flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <Link
            to={"/"}
            className="block mb-4 text-xl"
            onClick={() => setIsOpen(false)}
          >
            Shape The Future
          </Link>
          <Link
            to={"/about"}
            className="block mb-4 text-xl"
            onClick={() => setIsOpen(false)}
          >
            {showTranslated("O nama", "About Us")}
          </Link>
          <Link
            to={"/news"}
            className="block mb-4 text-xl"
            onClick={() => setIsOpen(false)}
          >
            {showTranslated("Novosti", "News")}
          </Link>
          <Link
            to={"/nato"}
            className="block mb-4 text-xl"
            onClick={() => setIsOpen(false)}
          >
            NATO Ncage
          </Link>
          <PrimaryButton
            isLink={true}
            to="/contact"
            title={showTranslated("Kontakt >", "Contact >")}
            className="mt-4"
          />
          <div className="flex gap-2 mt-4">
            <button onClick={() => setLang("en")}>
              <img src={usFlag} alt="US Flag" width={30} height={20} />
            </button>
            <button onClick={() => setLang("me")}>
              <img src={mneFlag} alt="Montenegro Flag" width={30} height={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
