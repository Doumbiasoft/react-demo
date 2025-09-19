import React, { useState } from "react";
import { Search } from "lucide-react";

interface IProps {
  onFilter: (term: string) => void;
}

const SearchBar: React.FC<IProps> = ({ onFilter }) => {
  const [term, setTerm] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTerm(newValue);
    onFilter(newValue);
  };

  return (
    <>
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
        <input
          type="search"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-3 text-base border border-light border-gray-300 bg-opacity-90 text-gray-800 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-300"
          value={term}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
