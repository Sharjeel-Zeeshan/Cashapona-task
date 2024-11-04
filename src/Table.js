import React, { useState } from 'react';
import './Table.css';

function Table() {
  
  const data = [
    { id: 1, name: 'Ranch 1', herds: 20, users: 40, livestock: 10000, contactName: 'John Doe', contactNumber: '+12-1243123231', contactEmail: 'johndoe121@gmail.com', city: 'Montena City', state: 'Arizona' },
    { id: 2, name: 'Ranch 2', herds: 20, users: 40, livestock: 10000, contactName: 'Peter William', contactNumber: '+12-1243123212', contactEmail: 'peterwilliam@yahoo.com', city: 'Montena City', state: 'New Jersey' },
    { id: 3, name: 'Ranch 3', herds: 20, users: 40, livestock: 10000, contactName: 'Dan John', contactNumber: '+12-1243124331', contactEmail: 'danjohn@yahoo.com', city: 'New city', state: 'Montana' },
    { id: 4, name: 'Ranch 4', herds: 100, users: 150, livestock: 15000, contactName: 'Kevin James', contactNumber: '+12-1243122311', contactEmail: 'kevinjames@outlook.com', city: 'Church Gate', state: 'Arizona' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="dashboard-container">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Ranch Name</th>
            <th># Herds</th>
            <th># Users</th>
            <th># Livestock</th>
            <th>Contact Name</th>
            <th>Contact Number</th>
            <th>Contact Email</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.herds}</td>
              <td>{item.users}</td>
              <td>{item.livestock}</td>
              <td>{item.contactName}</td>
              <td>{item.contactNumber}</td>
              <td>{item.contactEmail}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
  <span>Showing 1-4 of 10</span>
  <div className="pagination-buttons">
    <button onClick={handlePreviousPage} disabled={currentPage === 1}>{'<'}</button>
    <button onClick={handleNextPage}>{'>'}</button>
  </div>
</div>

    </div>
  );
}

export default Table;
