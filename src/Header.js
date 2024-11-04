import React, { useState } from 'react';
import './Header.css';
import Table from './Table';
import Form from './Form';

function Header() {
  const [showForm, setShowForm] = useState(false);

  const handleAddRanchClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="./photos/Logo.svg" alt="logo" style={{ cursor: "pointer", width: "500px" }} />
        </div>
        <nav>
          <ul>
            <li className="dashboard-item">Dashboard</li>
            <li>Note Lists</li>
            <li>Task Lists</li>
            <li>Users</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <p>Settings</p>
          <p>Logout</p>
        </div>
      </aside>

      <header className="header">
        <div className="header-right">
          <img src="./photos/Menu.svg" alt="Menu" style={{ cursor: "pointer", width: "1000px" }} />
        </div>
      </header>

      <div>
        {!showForm ? (
          <div className="main-content">
            <div className="dashboard-header">
            <h2><span className="dashboard-title-highlight">Demo</span>Book Dashboard</h2>
              <button onClick={handleAddRanchClick} className="add-ranch-button" title='Add Ranch'>Add Ranch</button>
            </div>
            <Table />
          </div>
        ) : (
          <Form onCancel={handleCancelClick}/>
        )}
      </div>
    </div>
  );
}

export default Header;
