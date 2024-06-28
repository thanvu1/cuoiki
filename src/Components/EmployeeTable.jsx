import React from 'react';

const EmployeeTable = ({ employees, handleDelete }) => (
  <div className="table-responsive">
    <table className="table table-bordered table-hover">
      <thead className="table-light">
        <tr>
          <th><input type="checkbox" /></th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td><input type="checkbox" /></td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EmployeeTable;
