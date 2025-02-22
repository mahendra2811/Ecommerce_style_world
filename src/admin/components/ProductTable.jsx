// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// function ProductTable() {
//   const datafromredux = useSelector((store) => store.product);
//   console.log(datafromredux.data);
//   const [products, setProducts] = useState(datafromredux.data);

//   const deleteProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   if (products.length === 0 || !products) return <div>loading...</div>;

//   return (
//     <div className="container mt-4">
//       <h3>Products</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Stock</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>${product.price}</td>
//               <td>{product.stock}</td>
//               <td>
//                 <button className="btn btn-warning btn-sm mr-2">Edit</button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => deleteProduct(product.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductTable;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../../utilis/constant"; // Import your base URL for the API
import { setProductData } from "../../configRedux/productSlice"; // If you are dispatching updated data to Redux store

function ProductTable() {
  const datafromredux = useSelector((store) => store.product);
  const [products, setProducts] = useState(datafromredux.data);
  const dispatch = useDispatch();

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(BASE_URL + `/products/delete/${id}`, {
        method: "GET", // You can also use DELETE if the backend is expecting DELETE method
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        // On success, remove the product from the local state
        setProducts(products.filter((product) => product.id !== id));
        // Optionally, dispatch updated data to Redux store
        dispatch(
          setProductData(products.filter((product) => product.id !== id))
        );
      } else {
        console.error("Error deleting product:", data.message);
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
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>${product.price}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.stock}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button style={{ backgroundColor: "#ffc107", color: "white", padding: "5px 10px", borderRadius: "5px", marginRight: "5px" }}>Edit</button>
                <button
                  style={{ backgroundColor: "#dc3545", color: "white", padding: "5px 10px", borderRadius: "5px" }}
                  onClick={() => deleteProduct(product.id)} // Call deleteProduct with product ID
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