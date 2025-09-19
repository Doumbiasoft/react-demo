import React, { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import { employeesData } from "../data/data";
interface IProps {
  onSelect: (employee: any) => void;
}
const HomePage: React.FC<IProps> = ({onSelect}) => {
  const [employees, setEmployees] = useState(employeesData);
  const handleFilter = (term: string) => {
    if (!term) {
      setEmployees(employeesData);
      return;
    }
    const filteredEmployees = employeesData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setEmployees(filteredEmployees);
  };
  return (
    <>
      <div className="max-w-2xl w-full">
        <Header title={"Employee Directory"} isArrowVisible={false} />
        <SearchBar onFilter={handleFilter} />
        <EmployeeList data={employees} onSelect={onSelect} />
      </div>
    </>
  );
};

export default HomePage;
