import React, { useState } from "react";

function OrderTable() {
  // Sample order data
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Springfield",
      status: "Pending",
      trackId: "ABC123",
      amount: 250,
    },
    {
      id: 2,
      customerName: "Jane Smith",
      email: "janesmith@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, Shelbyville",
      status: "Shipped",
      trackId: "XYZ456",
      amount: 150,
    },
  ]);

  // Function to update the order status
  const updateStatus = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  // Function to delete an order (optional functionality)
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="container mt-4">
      <h3>Order Management</h3>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Track ID</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.status}</td>
              <td>{order.trackId}</td>
              <td>${order.amount}</td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => updateStatus(order.id, "Shipped")}
                  >
                    Mark as Shipped
                  </button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => updateStatus(order.id, "Pending")}
                  >
                    Mark as Pending
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteOrder(order.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
