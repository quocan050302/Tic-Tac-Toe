import React from "react";
import { Card, Typography } from "antd";
import { ScoreboardProps } from "../../types/typings";

const { Title } = Typography;

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <Card className="bg-[#1f1f1f] text-white w-full max-w-sm shadow-lg">
      <Title level={4} className="text-[#F7F0F5]">
        Score History
      </Title>
      <p className="text-lg">
        X: {score.X} | O: {score.O} | Draws: {score.Draws}
      </p>
    </Card>
  );
};

export default Scoreboard;
