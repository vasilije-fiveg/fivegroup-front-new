import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../public/assets/Frame.png";
import { showTranslated } from "../../utils/showTranslated";
const Partners = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" mt-20 py-8 text-center">
      <h2 className="text-[#CAD1E9]  text-4xl mb-6">
        {showTranslated("PARTNERI", "PARTNERS")}
      </h2>
      <div className=" mx-auto">
        <Slider {...settings}>
          <div className="p-4">
            <div className="border-[#3F3F46] border-2 p-12 rounded-lg flex items-center justify-center">
              <img src={logo} alt="Logo 5" className="h-10 w-auto" />
            </div>
          </div>
          <div className="p-4">
            <div className="border-[#3F3F46] border-2 p-12 rounded-lg flex items-center justify-center">
              <img src={logo} alt="Logo 5" className="h-10 w-auto" />
            </div>
          </div>
          <div className="p-4">
            <div className="border-[#3F3F46] border-2 p-12 rounded-lg flex items-center justify-center">
              <img src={logo} alt="Logo 5" className="h-10 w-auto" />
            </div>
          </div>
          <div className="p-4">
            <div className="border-[#3F3F46] border-2 p-12 rounded-lg flex items-center justify-center">
              <img src={logo} alt="Logo 5" className="h-10 w-auto" />
            </div>
          </div>
          <div className="p-4">
            <div className="border-[#3F3F46] border-2 p-12 rounded-lg flex items-center justify-center">
              <img src={logo} alt="Logo 5" className="h-10 w-auto" />
            </div>
          </div>
          {/* Add more logo items as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
