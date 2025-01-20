import React, { useState } from "react";
import { BASE_URL } from "../../utilis/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../configRedux/adminSlice";

const AdminLogin = () => {
  const [userId, setUserId] = useState("admin");
  const [password, setPassword] = useState("password123");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, password }),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(addAdmin(data));
        console.log("Admin State in ProtectedRoute:", data);
        navigate("/auth");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div style={{
      margin: "0 auto",
      width: "100%",
      maxWidth: "1140px",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      // backgroundColor: "#eaeff4",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      color: "#666666"
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        display: "flex",
        backgroundColor: "#ffffff",
        boxShadow: "0 0 5px #999999"
      }}>
        <div style={{
          padding: "30px",
          display: "flex",
          width: "60%",
          clipPath: "polygon(0 0, 0% 100%, 100% 0)",
          backgroundColor: "#f16126",
          color: "#ffffff"
        }}>
          <div style={{ width: "100%" }}>
            <h2 style={{ margin: "0 0 15px 0", fontSize: "30px", fontWeight: "700" }}>Admin - Pannel</h2>
            <p style={{ margin: "0 0 20px 0", fontSize: "16px", fontWeight: "500", lineHeight: "22px" }}>Style-world</p>
          </div>
        </div>
        <div style={{
          padding: "60px 30px",
          width: "50%",
          marginLeft: "-10%"
        }}>
          <div style={{ width: "100%" }}>
            <h2 style={{ margin: "0 0 15px 0", fontSize: "22px", fontWeight: "700" }}>Login</h2>
            <form onSubmit={handleLogin}>
              <p style={{ margin: "0 0 10px 0", textAlign: "left", color: "#666666", fontSize: "15px" }}>
                <label style={{ display: "block", width: "100%", marginBottom: "2px", letterSpacing: ".5px" }}>Username<span style={{ color: "#ff574e", paddingLeft: "2px" }}>*</span></label>
                <input
                  type="text"
                  placeholder="Username or Email"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  style={{
                    display: "block",
                    width: "100%",
                    height: "35px",
                    padding: "0 10px",
                    outline: "none",
                    border: "1px solid #cccccc",
                    borderRadius: "30px",
                    marginBottom: "10px"
                  }}
                />
              </p>
              <p style={{ margin: "0 0 10px 0", textAlign: "left", color: "#666666", fontSize: "15px" }}>
                <label style={{ display: "block", width: "100%", marginBottom: "2px", letterSpacing: ".5px" }}>Password<span style={{ color: "#ff574e", paddingLeft: "2px" }}>*</span></label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    display: "block",
                    width: "100%",
                    height: "35px",
                    padding: "0 10px",
                    outline: "none",
                    border: "1px solid #cccccc",
                    borderRadius: "30px",
                    marginBottom: "10px"
                  }}
                />
              </p>
              <p style={{ margin: "0 0 10px 0", textAlign: "left", color: "#666666", fontSize: "15px" }}>
                <input
                  type="submit"
                  value="Sign In"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    marginTop: "5px",
                    color: "#f16126",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    background: "transparent",
                    border: "1px solid #f16126",
                    borderRadius: "30px",
                    boxShadow: "inset 0 0 0 0 #f16126",
                    transition: ".3s",
                    WebkitTransition: ".3s"
                  }}
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;