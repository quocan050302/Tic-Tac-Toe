import React from "react";
import Square from "./Square";
import { BoardProps } from "../../types/typings";

const Board: React.FC<BoardProps> = ({ squares, onClick, winner }) => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-[#1f1f1f] p-4 rounded-xl shadow-md">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isWinning={winner?.includes(i) ?? false}
        />
      ))}
    </div>
  );
};

export default Board;
