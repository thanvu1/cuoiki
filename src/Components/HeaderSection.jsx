import React from 'react';
import EmployeeTable from './EmployeeTable';

const HeaderSection = ({ title, employees, handleDelete }) => (
  <div className="card shadow mb-3">
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h3>{title}</h3>
      <button
        type="button"
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#addEmployeeModal"
      >
        <i className="bi bi-plus-circle-fill me-2"></i>
        Add New Employee
      </button>
    </div>
    <div className="card-body">
      <EmployeeTable employees={employees} handleDelete={handleDelete} />
    </div>
  </div>
);

export default HeaderSection;
