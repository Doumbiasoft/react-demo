import React from "react";
import { employeesData, type IEmployee } from "../data/data";

interface IProps {
  id: number;
  name: string;
  title: string;
  profile: string;
  onSelect: (employee: IEmployee) => void;
}
const EmployeeListItem: React.FC<IProps> = (props) => {
  const handleClick = () => {
    props.onSelect(employeesData.find((em) => em.id === props.id)!);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="flex flex-row text gap-2 items-start p-3 bg-white shadow-sm rounded-md w-full mb-5 cursor-pointer"
      >
        <img
          src={props.profile}
          alt="profile"
          className="h-14 w-14 rounded-full object-fit-cover"
        />
        <div>
          <h1 className="text-xl">{props.name}</h1>
          <h1 className="text-light text-gray-400">{props.title}</h1>
        </div>
      </div>
    </>
  );
};

export default EmployeeListItem;
