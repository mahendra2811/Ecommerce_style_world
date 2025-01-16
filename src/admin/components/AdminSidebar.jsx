import React from "react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
      <h4 className="text-center">Admin Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/admin/dashboard" className="nav-link text-white">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/products" className="nav-link text-white">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin/orders" className="nav-link text-white">
            Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
