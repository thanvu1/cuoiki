import React, { useState } from "react";
import PropTypes from "prop-types";
import data from "../Constants/data";
import HeaderSection from "./HeaderSection";
import AddEmployeeModal from "./AddEmployeeModal";

const HeaderList = ({ sections = [] }) => {
  const [employees, setEmployees] = useState(data.employees);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    data.employees.push(employee);
  };

  const handleDelete = (index) => {
    const tmp = [...employees];
    tmp.splice(index, 1);
    setEmployees(tmp);
    data.employees = tmp;
  };

  return (
    <div className="container mt-5">
      {sections.map((section, sectionIndex) => (
        <HeaderSection
          key={sectionIndex}
          title={section.title}
          employees={employees.filter(section.filter)}
          handleDelete={handleDelete}
        />
      ))}
      <AddEmployeeModal addEmployee={addEmployee} />
    </div>
  );
};

HeaderList.propTypes = {
  sections: PropTypes.array,
};

export default HeaderList;
