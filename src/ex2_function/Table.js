import React from 'react';

const Table = () => {

    const studentList = [];
    
    return (
      <table className="table table-hover mt-5">
        <TableHeader />
        <TableRows />
      </table>
    );
  };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
    );
  };

  const TableRows = () => {
    return (
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    );
  };

export default Table;