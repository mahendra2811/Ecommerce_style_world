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
    {
      id: 3,
      customerName: "Alice Johnson",
      email: "alicejohnson@example.com",
      phone: "555-123-4567",
      address: "789 Oak St, Metropolis",
      status: "Delivered",
      trackId: "LMN789",
      amount: 300,
    },
    {
      id: 4,
      customerName: "Bob Brown",
      email: "bobbrown@example.com",
      phone: "444-987-6543",
      address: "321 Pine St, Gotham",
      status: "Pending",
      trackId: "DEF456",
      amount: 200,
    },
    {
      id: 5,
      customerName: "Charlie Davis",
      email: "charliedavis@example.com",
      phone: "333-654-7890",
      address: "654 Maple St, Star City",
      status: "Shipped",
      trackId: "GHI123",
      amount: 180,
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to update the order status
  const updateStatus = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
    setSelectedOrder(null); // Close the popup after updating the status
  };

  // Function to delete an order (optional functionality)
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
    setSelectedOrder(null); // Close the popup after deleting the order
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <h3>Order Management</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Customer Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Address</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Track ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Amount</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.customerName}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.email}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.phone}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.address}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.status}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.trackId}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>${order.amount}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  style={{ backgroundColor: "#f16126", color: "white", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
                  onClick={() => setSelectedOrder(order)}
                >
                  Actions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
            textAlign: "center"
          }}>
            <h3>Order ID: {selectedOrder.id}</h3>
            <button
              style={{ display: "block", width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", marginBottom: "10px", cursor: "pointer" }}
              onClick={() => updateStatus(selectedOrder.id, "Shipped")}
            >
              Mark as Shipped
            </button>
            <button
              style={{ display: "block", width: "100%", padding: "10px", backgroundColor: "#ffc107", color: "white", border: "none", borderRadius: "5px", marginBottom: "10px", cursor: "pointer" }}
              onClick={() => updateStatus(selectedOrder.id, "Pending")}
            >
              Mark as Pending
            </button>
            <button
              style={{ display: "block", width: "100%", padding: "10px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
              onClick={() => updateStatus(selectedOrder.id, "Cancelled")}
            >
              Mark as Cancelled
            </button>
            <br />
            <button
              style={{ display: "block", width: "100%", padding: "10px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderTable;