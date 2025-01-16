// src/pages/Products.js
import React from "react";
import ProductTable from "../components/ProductTable";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
          Add Product
        </button>
      </div>
      <ProductTable />
    </div>
  );
};

export default Products;
