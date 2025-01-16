// src/pages/Orders.js
import React from "react";
import OrderTable from "../components/OrderTable";

const Orders = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>
      <OrderTable />
    </div>
  );
};

export default Orders;
