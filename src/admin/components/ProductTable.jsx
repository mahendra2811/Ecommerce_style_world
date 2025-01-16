import React, { useState } from "react";

function ProductTable() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, offerPrice: 90, stock: 20, description: "Sample product 1" },
    { id: 2, name: "Product 2", price: 200, offerPrice: 180, stock: 15, description: "Sample product 2" },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mt-4">
      <h3>Products</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Offer Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>${product.offerPrice}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Edit</button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
