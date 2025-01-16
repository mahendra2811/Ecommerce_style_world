import React from 'react';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li>Notifications</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;