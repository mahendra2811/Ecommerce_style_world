import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAdmin } from "../../configRedux/adminSlice";
import { BASE_URL } from "../../utilis/constant";
import { setProductData } from "../../configRedux/productSlice";

function AdminSidebar({ onNavigate }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProduct = async () => {
    try {
      const res = await axios.get(BASE_URL + "/products/all");
      dispatch(setProductData(res.data));
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL + "/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(removeAdmin());
        navigate("/adminlogin");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", backgroundColor: "#f8f9fa", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <button style={{ padding: "10px", backgroundColor: "#f16126", color: "white", borderRadius: "5px" }} onClick={() => onNavigate("dashboard")}>Dashboard</button>
      <button style={{ padding: "10px", backgroundColor: "#f16126", color: "white", borderRadius: "5px" }} onClick={() => { onNavigate("products"); handleProduct(); }}>Products</button>
      <button style={{ padding: "10px", backgroundColor: "#f16126", color: "white", borderRadius: "5px" }} onClick={() => onNavigate("orders")}>Orders</button>
      <button style={{ padding: "10px", backgroundColor: "red", color: "white", borderRadius: "5px" }} onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminSidebar;