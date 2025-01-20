import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Link, useNavigate } from "react-router-dom";
import delImgUrl from "../../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log(storedCartItems);
    setCartItems(storedCartItems);
  }, []);

  // Calculate the total price for each item in the cart
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    // Update local storage with the new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // Handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // Update local storage with the new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      // If quantity is already 1, don't decrease further
      item.quantity = 1;
      setCartItems([...cartItems]);

      // Update local storage with the new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // Handle item removal
  const handleRemoveItem = (item) => {
    // Filter out the item to be removed
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    // Update the state with the new cart
    setCartItems(updatedCart);
    // Update local storage with the updated cart
    updateLocalStorage(updatedCart);
  };

  // Update local storage with the cart items
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Calculate the cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Calculate the order total
  const orderTotal = cartSubtotal + 100;

  // for from detials 
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    queries: "",
  });
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, email, address } = formData;

    if (!name || !mobile || !email || !address) {
      setFormError("Please fill in all required fields.");
      return;
    }

    setFormError("");
    navigate("/check-out");
  };

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop-single">
                            <img src={`${item.img}`} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop-single">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">₹{item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value={item.quantity}
                            readOnly
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ₹{calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <button onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shipping">
                      <h3>Order Details</h3>
                      <form onSubmit={handleSubmit} style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  padding: "20px", borderRadius: "8px" }}>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name *"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                           style={{ borderWidth: "2px", borderColor: "black", borderStyle: "solid" }} // Solid black border with increased width
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile Number *"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="form-control"
                            style={{ borderWidth: "2px", borderColor: "black", borderStyle: "solid" }} // Solid black border with increased width
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            style={{ borderWidth: "2px", borderColor: "black", borderStyle: "solid" }} // Solid black border with increased width
                          />
                        </div>
                        <div className="form-group mb-3">
                          <textarea
                            name="address"
                            placeholder="Address for Order *"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            style={{ borderWidth: "2px", borderColor: "black", borderStyle: "solid" }} // Solid black border with increased width
                            required
                            rows="4"
                          ></textarea>
                        </div>
                        <div className="form-group mb-3">
                          <textarea
                            name="queries"
                            placeholder="Any Other Queries"
                            value={formData.queries}
                            onChange={handleChange}
                            className="form-control"
                            style={{ borderWidth: "2px", borderColor: "black", borderStyle: "solid" }} // Solid black border with increased width
                            rows="1"
                          ></textarea>
                        </div>
                        {formError && <p className="form-error text-danger">{formError}</p>}
                        {/* <button type="submit" className="btn btn-primary w-100">
                          Proceed to Checkout
                        </button> */}
                      </form>
                    </div>
                  </div>

                  {/* cart total */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">₹{cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">₹100</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">₹{orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                      <div>
                        <CheckoutPage />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
