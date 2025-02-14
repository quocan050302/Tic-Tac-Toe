export type SquareProps = {
  value: string;
  onClick: () => void;
  isWinning: boolean | null;
};

export type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
  winner: number[] | null;
};

export type ScoreboardProps = {
  score: { X: number; O: number; Draws: number };
};
