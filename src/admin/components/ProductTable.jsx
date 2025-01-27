import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../utilis/constant";
import { setProductData } from "../../configRedux/productSlice";
import axios from "axios";

function ProductTable() {
  const datafromredux = useSelector((store) => store.product.data);
<<<<<<< Updated upstream
  console.log(datafromredux);
  const [products, setProducts] = useState(datafromredux || []);
  const dispatch = useDispatch();

  // Synchronize local state on initial load
=======
  const [products, setProducts] = useState(datafromredux || []);
  const dispatch = useDispatch();

>>>>>>> Stashed changes
  useEffect(() => {
    setProducts(datafromredux);
  }, [datafromredux]);

  const deleteProduct = async (id) => {
    try {
<<<<<<< Updated upstream
      const response = await axios.get(BASE_URL + `/products/delete/${id}`, {
=======
      const response = await axios.get(`${BASE_URL}/products/delete/${id}`, {
>>>>>>> Stashed changes
        withCredentials: true,
      });

      if (response.status === 200) {
<<<<<<< Updated upstream
        // On success, remove the product from the local state
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        // Optionally, dispatch updated data to Redux store
        dispatch(setProductData(updatedProducts));
      } else {
        console.error("Error deleting product:", response.message);
=======
        // Filter out the deleted product from the local state
        const updatedProducts = products.filter((product) => product.id !== id);

        // Update local state
        setProducts(updatedProducts);

        // Update Redux store
        dispatch(setProductData(updatedProducts));
      } else {
        console.error("Error deleting product:", response.data.message);
>>>>>>> Stashed changes
        alert("Failed to delete product!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while deleting the product!");
    }
  };

  if (products.length === 0 || !products) return <div>loading...</div>;

  return (
    <div style={{ overflowX: "auto" }}>
      <h3>Products List</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Stock</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {product.id}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {product.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                ${product.price}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {product.stock}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  style={{
                    backgroundColor: "#ffc107",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
<<<<<<< Updated upstream
                  onClick={() => deleteProduct(product.id)} // Call deleteProduct with product ID
=======
                  onClick={() => deleteProduct(product.id)}
>>>>>>> Stashed changes
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
