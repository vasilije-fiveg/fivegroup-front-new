import React, { useState, useEffect } from "react";
import icon from "../../../public/assets/01.png";
import gradient from "../../../public/assets/gradient (1).png";

const CuttedCard = ({ title, text }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const animateGradient = () => {
      setPosition((prev) => {
        const speedX = Math.random() * 1.5 + 1.5;
        const speedY = Math.random() * 1.5 + 1.5;

        const nextX = prev.left + direction.x * speedX;
        const nextY = prev.top + direction.y * speedY;

        let newDirectionX = direction.x;
        let newDirectionY = direction.y;

        if (nextX < 0 || nextX > 66) newDirectionX *= -1;
        if (nextY < 0 || nextY > 66) newDirectionY *= -1;

        setDirection({ x: newDirectionX, y: newDirectionY });

        return {
          left: nextX,
          top: nextY,
        };
      });
    };

    const intervalId = setInterval(animateGradient, 100);

    return () => clearInterval(intervalId);
  }, [direction]);

  return (
    <div className="cutted-card hover:cursor-pointer relative mx-auto mt-10 text-white p-6 rounded-lg max-w-full md:max-w-lg lg:max-w-xl overflow-hidden">
      {/* Content with lower z-index */}
      <img className="w-10 h-10 relative z-10" src={icon} alt="icon" />
      <h3 className="text-2xl md:text-3xl mt-3 font-semibold mb-4 relative z-10">
        {title}
      </h3>
      <p className="text-base md:text-lg relative z-10">{text}</p>

      {/* Gradient Background */}
      <img
        src={gradient}
        alt="gradient"
        className="absolute object-cover z-0"
        style={{
          top: `${position.top}%`,
          left: `${position.left}%`,
          transition: "top 0.1s linear, left 0.1s linear",
        }}
      />
    </div>
  );
};

export default CuttedCard;
