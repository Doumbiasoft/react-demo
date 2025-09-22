import React from "react";
import type { IEmployee } from "../data/data";
import { ChevronRight } from "lucide-react";
import Header from "../components/Header";
interface IProps {
  data: IEmployee;
}

const EmployeePage: React.FC<IProps> = (props) => {
  return (
    <div className="max-w-2xl w-full">
      <Header title={"Employee"} isArrowVisible={true} />
      <div className="w-full border border-light border-gray-200 rounded-md bg-white">
        <div className="flex flex-row text gap-2 items-center p-3 w-full">
          <img
            src={props.data.profile}
            alt="profile"
            className="h-28 w-28 rounded-full object-fit-cover"
          />
          <div>
            <h1 className="text-xl">{props.data.name}</h1>
            <h1 className="text-light text-gray-400">{props.data.title}</h1>
          </div>
        </div>
        <div className="flex flex-row text gap-2 justify-between items-center p-3 w-full border-t border-light border-t-gray-200 cursor-pointer">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Call Office</h1>
            <div className="text-gray-400">{props.data.officePhone}</div>
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
        <div className="flex flex-row text gap-2 justify-between items-center p-3 w-full border-t border-light border-t-gray-200 cursor-pointer">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Call Mobile</h1>
            <div className="text-gray-400">{props.data.mobilePhone}</div>
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
        <div className="flex flex-row text gap-2 justify-between items-center p-3 w-full border-t border-light border-t-gray-200 cursor-pointer">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">SMS</h1>
            <div className="text-gray-400">{props.data.officePhone}</div>
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
        <div className="flex flex-row text gap-2 justify-between items-center p-3 w-full border-t border-light border-t-gray-200 cursor-pointer">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Email</h1>
            <div className="text-gray-400">{props.data.email}</div>
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
