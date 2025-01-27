import React, { useState } from "react";
import ProductTable from "../components/ProductTable";
import axios from "axios";
import { BASE_URL } from "../../utilis/constant";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    imageUrl: null,
    name: "",
    price: "",
    stock: "",
    size: "",
    color: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, imageUrl: e.target.files[0] }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        `${BASE_URL}/products/add-products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      setIsModalOpen(false);
      setFormData({
        imageUrl: null,
        name: "",
        price: "",
        stock: "",
        size: "",
        color: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Products
        </h1>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </button>
      </div>
      <ProductTable />
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              width: "300px",
            }}
          >
            <h2>Add Product</h2>
            <form
              onSubmit={handleFormSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <input
                type="file"
                name="imageUrl"
                onChange={handleFileChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
              <input
                type="text"
                name="size"
                placeholder="Size"
                value={formData.size}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
              <input
                type="text"
                name="color"
                placeholder="Color"
                value={formData.color}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleInputChange}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
