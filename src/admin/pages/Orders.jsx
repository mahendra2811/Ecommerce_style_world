import React from "react";
import OrderTable from "../components/OrderTable";

const Orders = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Orders</h1>
      </div>
      <OrderTable />
    </div>
  );
};

export default Orders;