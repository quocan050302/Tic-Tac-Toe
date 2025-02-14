import React from "react";
import { SquareProps } from "../../types/typings";

const Square: React.FC<SquareProps> = ({ value, onClick, isWinning }) => {
  return (
    <button
      className={`w-15 h-15 m-1 cursor-pointer rounded-xl text-center !text-3xl font-bold flex items-center justify-center 
        ${
          isWinning
            ? "bg-green-500 border-green-700"
            : "bg-[#2a2a2a] border-gray-500"
        }
        text-[#F7F0F5] border shadow-lg transition hover:scale-105 sm:w-20 sm:h-20`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
