import React from "react";
import { ChevronLeft } from "lucide-react";
interface IProps {
  title: string;
  isArrowVisible: boolean;
}
const Header: React.FC<IProps> = ({ title, isArrowVisible = false }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div>
          {isArrowVisible && (
            <ChevronLeft size={30} className="cursor-pointer" />
          )}
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-center mb-4">{title}</h1>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
