import React, { useState } from "react";
import { GiTicTacToe } from "react-icons/gi";
import { calculateWinner } from "../../utils/calculateWinner";
import Scoreboard from "./Scoreboard";
import Board from "./Board";
import { Typography } from "antd";

const { Title } = Typography;

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0, Draws: 0 });

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      const winnerPlayer = newSquares[winner[0]];
      setScore((prev) => ({
        ...prev,
        [winnerPlayer]: prev[winnerPlayer as "X" | "O"] + 1,
      }));
    } else if (!newSquares.includes(null as any)) {
      setScore((prev) => ({ ...prev, Draws: prev.Draws + 1 }));
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${squares[winner[0]]}`
    : squares.includes(null as any)
    ? `Next player: ${xIsNext ? "X" : "O"}`
    : "It's a Draw!";

  return (
    <div className="flex justify-between items-center flex-col m-auto">
      <div className="gap-2 rounded-lg mt-4 bg-[#8F857D] p-4 sm:gap-3 md:gap-4 lg:gap-6">
        <section className="">
          <div className="flex flex-col items-center gap-6 p-6 bg-[#141414] text-white">
            <Title level={2} className="!text-[#F7F0F5]">
              Tic-Tac-Toe
            </Title>
            <div className="text-center text-xl font-semibold">{status}</div>

            <Board squares={squares} onClick={handleClick} winner={winner} />

            <button
              onClick={resetGame}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#534e48] text-white font-bold transition hover:bg-[#40a9ff] hover:scale-105"
            >
              <GiTicTacToe className="h-6 w-6" />
              <span>Reset Game</span>
              <GiTicTacToe className="h-6 w-6" />
            </button>

            <Scoreboard score={score} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicTacToe;
