import React, { useState } from "react";
import { learnerData as data } from "../data/data";

import LearnerList from "../components/LearnerList";

const LearnerPage: React.FC = () => {
  const [learnerData] = useState({ learners: data });
  return (
    <>
      <div className="max-w-2xl w-full">
        <LearnerList data={learnerData.learners} />
      </div>
    </>
  );
};

export default LearnerPage;
