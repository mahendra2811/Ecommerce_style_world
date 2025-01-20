// src/pages/Products.js
import React from "react";
import ProductTable from "../components/ProductTable";

const Products = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Products</h1>
        <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px 20px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}>
          Add Product
        </button>
      </div>
      <ProductTable />
    </div>
  );
};

export default Products;
