// AdminApp.jsx
import React from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminApp() {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="flex-grow-1">
        <AdminHeader />
        <div className="p-4">
          <Outlet /> {/* Renders child routes like Dashboard, ProductTable, etc. */}
        </div>
      </div>
    </div>
  );
}

export default AdminApp;
