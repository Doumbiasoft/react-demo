import React from "react";
import type { ILearner } from "../data/data";
import LearnerItem from "./LearnerItem";
interface IProps {
  data: ILearner[];
}

const LearnerList: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {data.length > 0 &&
        data.map((item, index) => (
          <LearnerItem
            key={index}
            name={item.name}
            bio={item.bio}
            scores={item.scores}
          />
        ))}
      {data.length === 0 && <div className="text-2xl">📥 No Learner!</div>}
    </div>
  );
};

export default LearnerList;
