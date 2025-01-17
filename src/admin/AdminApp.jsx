import React, { useState } from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function AdminApp() {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="d-flex">
      <AdminSidebar onNavigate={setCurrentView} />
      <div className="flex-grow-1">
        <AdminHeader />
        <div className="p-4">{renderView()}</div>
      </div>
    </div>
  );
}

export default AdminApp;
