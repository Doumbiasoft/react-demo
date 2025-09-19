import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import type { IEmployee } from "../data/data";
interface IProps {
  data: IEmployee[];
  onSelect: (employee: any) => void;
}

const EmployeeList: React.FC<IProps> = ({ data, onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {data.length > 0 &&
        data.map((item) => (
          <EmployeeListItem
            key={item.id}
            id={item.id}
            profile={item.profile}
            name={item.name}
            title={item.title}
            onSelect={onSelect}
          />
        ))}
      {data.length === 0 && <div className="text-2xl">📥 No employee!</div>}
    </div>
  );
};

export default EmployeeList;
