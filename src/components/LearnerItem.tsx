import React from "react";
import type { ILearner } from "../data/data";
import ScoreItem from "./ScoreItem";

const LearnerItem: React.FC<ILearner> = (props) => {
  return (
    <>
      <div className="flex flex-row text gap-2 items-start p-3 bg-white shadow-sm rounded-md w-full mb-5">
        <img
          src={`https://xsgames.co/randomusers/avatar.php?g=male&${props.name}`}
          alt="profile"
          className="h-14 w-14 rounded-full object-fit-cover"
        />
        <div>
          <h1 className="text-xl">{props.name}</h1>
          <h3 className="text-md">Bio:</h3>
          <p className="text-light text-gray-400">{props.bio}</p>
          <div className="mt-2 w-full">
            {props.scores.map((score, i) => (
              <ScoreItem key={i} score={score} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnerItem;
