import React from "react";
interface Score {
  score: {
    date: string;
    score: number;
  };
}

const ScoreItem: React.FC<Score> = ({ score }) => {
  return (
    <div className="mt-2 w-full">
      <div className="text-sm text-light">{`Date : ${score.date} [Score: ${score.score}]`}</div>
    </div>
  );
};

export default ScoreItem;
