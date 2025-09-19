import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import { useState } from "react";
import { employeesData } from "./data/data";
function App() {
  const [employee, setEmployee] = useState(employeesData[0]);
  const handleSelectedEmployee = (employee: any) => {
    setEmployee(employee);
  };

  return (
    <div className="flex space-y-2 lg:flex-row flex-col gap-x-4 bg-gray-50 p-6 w-full min-h-screen items-start justify-center">
      <HomePage onSelect={handleSelectedEmployee} />
      <EmployeePage data={employee} />
    </div>
  );
}

export default App;
